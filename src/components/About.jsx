import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="scroll-mt-12 py-6 md:py-8">
      <SectionLabel>about</SectionLabel>
      <div className="max-w-2xl space-y-3 leading-relaxed text-stone-700">
        <p>
          I&apos;m a frontend developer based in India. I build responsive
          interfaces with React, JavaScript, HTML, and CSS, with a focus on
          practical tools that help small businesses manage everyday
          operations.
        </p>
        <p>
          Alongside frontend work, I automate repetitive workflows with n8n and
          Google Sheets. I use AI-assisted development to learn and move
          faster, and I test and refine everything I ship.
        </p>
      </div>
    </section>
  );
}