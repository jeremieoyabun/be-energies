import Link from "next/link";

export default function ConceptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Floating nav back to showcase */}
      <div className="fixed top-4 left-4 z-[100]">
        <Link
          href="/showcase/"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-xl shadow-lg border border-[#e2e8f0] text-sm text-[#0c1220] hover:bg-white transition-all duration-200"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Showcase
        </Link>
      </div>
      {children}
    </>
  );
}
