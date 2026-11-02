export default function SectionLabel({ children }) {
  return (
    <div className="mb-4 flex items-center gap-3 md:mb-5">
      <h2 className="font-mono text-xs tracking-tight text-emerald-700 md:text-sm">
        ~/{children}
      </h2>
      <span className="h-px flex-1 bg-stone-300" aria-hidden="true" />
    </div>
  );
}