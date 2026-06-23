import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderToBuffer } from "@react-pdf/renderer";
import { GuidePiegesDocument } from "@/lib/guide-pieges-pdf";
import { piegePdfSections } from "@/lib/guide-pieges-content";
import { verifyLeadToken } from "@/lib/lead-token";

export const runtime = "nodejs";
// Token-gated, per-user: must be dynamic so the token check actually runs
// instead of being cached. The PDF buffer itself is still rendered once
// per cold start and reused thanks to Next's response caching.
export const dynamic = "force-dynamic";

async function loadImageBuffers(): Promise<Record<number, Buffer>> {
  const result: Record<number, Buffer> = {};
  const cwd = process.cwd();
  await Promise.all(
    piegePdfSections.map(async (s) => {
      if (!s.imageRelativePath) return;
      try {
        const absPath = path.join(cwd, s.imageRelativePath);
        result[s.number] = await readFile(absPath);
      } catch (err) {
        // Missing image is non-fatal - the PDF will just skip it.
        console.warn(
          `[guide-pieges] failed to load image for section ${s.number}:`,
          err instanceof Error ? err.message : "unknown",
        );
      }
    }),
  );
  return result;
}

export async function GET(request: Request) {
  // Token gate — the only way to reach this PDF is to have gone through
  // the lead-magnet form (which signed a short-lived HMAC token). Direct
  // hits get a friendly 403 explaining how to retry.
  const url = new URL(request.url);
  const verdict = verifyLeadToken(
    "pieges-a-eviter",
    url.searchParams.get("exp"),
    url.searchParams.get("sig"),
  );
  if (!verdict.ok) {
    const status = verdict.reason === "expired" ? 410 : 403;
    return NextResponse.json(
      {
        ok: false,
        reason: verdict.reason ?? "missing",
        error:
          verdict.reason === "expired"
            ? "Le lien de téléchargement a expiré. Demandez à nouveau le guide pour recevoir un lien frais."
            : "Le téléchargement nécessite de remplir le formulaire d'accès. Retournez sur la page du guide pour le récupérer.",
      },
      { status },
    );
  }

  // Construct JSX outside try/catch (React 19 error-boundaries rule).
  let imageBuffers: Record<number, Buffer> = {};
  try {
    imageBuffers = await loadImageBuffers();
  } catch (err) {
    console.warn(
      "[guide-pieges] image loading failed:",
      err instanceof Error ? err.message : "unknown",
    );
  }
  const doc = <GuidePiegesDocument imageBuffers={imageBuffers} />;
  try {
    const buffer = await renderToBuffer(doc);
    const bytes = new Uint8Array(buffer);

    return new NextResponse(bytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'inline; filename="be-energies-7-pieges-a-eviter.pdf"',
        "Cache-Control":
          "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
      },
    });
  } catch (err) {
    console.error(
      "[guide-pieges] PDF render failed:",
      err instanceof Error ? err.message : "unknown",
    );
    return NextResponse.json(
      { ok: false, error: "Génération du guide impossible pour le moment." },
      { status: 500 },
    );
  }
}
