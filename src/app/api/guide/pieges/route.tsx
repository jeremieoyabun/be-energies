import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { GuidePiegesDocument } from "@/lib/guide-pieges-pdf";

export const runtime = "nodejs";
// PDF generation is expensive; cache aggressively at the edge.
export const revalidate = 3600;

export async function GET() {
  // JSX constructed outside try/catch (React 19 lint rule
  // react-hooks/error-boundaries).
  const doc = <GuidePiegesDocument />;
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
