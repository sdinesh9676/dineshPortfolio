import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionLabel from "./SectionLabel";
import { PROJECTS } from "../data";
import { asset, focusRing } from "../ui";

function Shot({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-md border border-dashed border-stone-300 bg-stone-100 px-2 text-center font-mono text-xs text-stone-500">
        Add screenshot: public/{src}
      </div>
    );
  }

  return (
    <img
      src={asset(src)}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="aspect-video w-full rounded-md border border-stone-200 object-cover object-top"
    />
  );
}

function Label({ children }) {
  return <dt className="mb-1 font-mono text-xs text-emerald-700">{children}</dt>;
}

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-12 py-6 md:py-8">
      <SectionLabel>work</SectionLabel>
      <div className="grid gap-4">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="rounded-lg border border-stone-200 bg-white p-4 sm:p-5"
          >
            <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-lg font-medium sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-0.5 text-sm text-stone-600">{p.tagline}</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 font-mono text-[11px] text-emerald-800">
                {p.status}
              </span>
            </div>

            {p.screenshots?.length > 0 && (
              <div className="mb-4 grid gap-3 sm:grid-cols-2">
                {p.screenshots.map((s) => (
                  <Shot key={s.src} {...s} />
                ))}
              </div>
            )}

            <dl className="mb-4 grid gap-3 text-sm leading-relaxed text-stone-700 sm:text-base">
              <div>
                <Label>problem</Label>
                <dd>{p.problem}</dd>
              </div>
              <div>
                <Label>what I built</Label>
                <dd>
                  <ul className="list-disc space-y-0.5 pl-5">
                    {p.built.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <Label>status</Label>
                <dd>{p.statusNote}</dd>
              </div>
            </dl>

            <ul className="mb-4 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <li
                  key={t}
                  className="rounded bg-emerald-50 px-2 py-0.5 font-mono text-[11px] text-emerald-800 sm:text-xs"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={`inline-flex items-center gap-2 rounded-md bg-stone-900 px-4 py-2 text-sm text-white hover:bg-emerald-800 ${focusRing}`}
              >
                Live project <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a
                href={p.codeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={`inline-flex items-center gap-2 rounded-md border border-stone-300 px-4 py-2 text-sm text-stone-700 hover:border-emerald-700 hover:text-emerald-800 ${focusRing}`}
              >
                <FaGithub size={15} aria-hidden="true" /> Source code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}