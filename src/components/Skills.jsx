import SectionLabel from "./SectionLabel";
import { SKILL_GROUPS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-12 py-6 md:py-8">
      <SectionLabel>skills</SectionLabel>
      <div className="grid gap-3">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="grid gap-2 sm:grid-cols-[6rem_1fr] sm:items-baseline"
          >
            <h3 className="font-mono text-xs text-stone-500 sm:text-sm">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-stone-300 bg-white px-2.5 py-1 font-mono text-xs text-stone-700 sm:text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}