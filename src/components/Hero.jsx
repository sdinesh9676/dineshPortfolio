import { useState } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { PROFILE } from "../data";
import { asset, focusRing } from "../ui";

function Avatar() {
  const [failed, setFailed] = useState(false);
  const size = "h-20 w-20 sm:h-32 sm:w-32";

  if (failed) {
    return (
      <div
        className={`${size} flex shrink-0 items-center justify-center rounded-full border border-stone-300 bg-white font-display text-3xl font-medium text-emerald-700 sm:text-5xl`}
        aria-hidden="true"
      >
        D
      </div>
    );
  }

  return (
    <img
      src={asset(PROFILE.photo)}
      alt="Portrait of Dinesh"
      width="128"
      height="128"
      onError={() => setFailed(true)}
      className={`${size} shrink-0 rounded-full border border-stone-300 object-cover`}
    />
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-stone-200">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-4xl flex-col gap-5 px-4 pb-8 pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-6 md:pb-12 md:pt-12">
        <div className="order-2 sm:order-1">
          <p className="mb-3 font-mono text-xs text-emerald-700 sm:text-sm">
            <span className="text-stone-500">&gt;</span> const role ={" "}
            <span className="text-stone-600">'{PROFILE.role}'</span>
            <span
              className="ml-1 inline-block h-[1em] w-[7px] bg-emerald-700 align-middle motion-safe:animate-pulse"
              aria-hidden="true"
            />
          </p>

          <h1 className="mb-3 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {PROFILE.name}
          </h1>

          <p className="mb-5 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
            {PROFILE.intro}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className={`inline-flex items-center gap-1.5 rounded-md bg-stone-900 px-4 py-2 text-sm text-stone-50 transition-colors hover:bg-emerald-800 ${focusRing}`}
            >
              View work <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href={asset(PROFILE.resume)}
              download
              className={`inline-flex items-center gap-1.5 rounded-md border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 transition-colors hover:border-emerald-700 hover:text-emerald-800 ${focusRing}`}
            >
              <Download size={15} aria-hidden="true" /> Resume
            </a>
            <a
              href="#contact"
              className={`inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm text-stone-700 underline-offset-4 hover:underline ${focusRing}`}
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="order-1 sm:order-2">
          <Avatar />
        </div>
      </div>
    </section>
  );
}