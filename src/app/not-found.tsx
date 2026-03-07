import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-amber font-[family-name:var(--font-heading)]">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-[family-name:var(--font-heading)] text-midnight">
          Page introuvable
        </h2>
        <p className="mt-3 text-steel max-w-md mx-auto">
          La page que vous cherchez n&apos;existe pas ou a ete deplacee.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-amber hover:bg-amber-dark text-midnight font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Retour a l&apos;accueil
          </Link>
          <Link
            href="/services/"
            className="inline-flex items-center justify-center border border-cloud text-charcoal hover:bg-cloud font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Voir nos services
          </Link>
        </div>
      </div>
    </div>
  );
}
