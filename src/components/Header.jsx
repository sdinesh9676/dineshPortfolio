import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "../data";
import { focusRing } from "../ui";

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      ref={ref}
      className="sticky top-0 z-30 border-b border-stone-200 bg-stone-50/90 backdrop-blur"
    >
      <div className="mx-auto flex h-12 max-w-4xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className={`font-mono text-sm font-medium tracking-tight ${focusRing}`}
        >
          dinesh<span className="text-emerald-700">.dev</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-mono text-sm text-stone-600 transition-colors hover:text-emerald-700 ${focusRing}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={`-mr-2 p-2 md:hidden ${focusRing}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="flex flex-col gap-3 border-t border-stone-200 bg-stone-50 px-4 py-3 md:hidden"
        >
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`font-mono text-sm text-stone-600 ${focusRing}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}