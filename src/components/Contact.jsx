import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import SectionLabel from "./SectionLabel";
import { CONTACT } from "../data";
import { focusRing } from "../ui";

const LINKS = [
  { label: "Email", href: `mailto:${CONTACT.email}`, Icon: Mail, external: false },
  { label: "GitHub", href: CONTACT.github, Icon: FaGithub, external: true },
  { label: "LinkedIn", href: CONTACT.linkedin, Icon: FaLinkedinIn, external: true },
  { label: "WhatsApp", href: CONTACT.whatsapp, Icon: FaWhatsapp, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-12 py-6 md:py-8">
      <SectionLabel>contact</SectionLabel>
      <h3 className="mb-2 max-w-md font-display text-2xl font-medium sm:text-3xl">
        Let&apos;s build something together.
      </h3>
      <p className="mb-1 max-w-md leading-relaxed text-stone-600">
        Open to frontend roles and freelance projects.
      </p>
      <p className="mb-4 font-mono text-sm text-stone-700">{CONTACT.email}</p>

      <div className="flex flex-wrap gap-3">
        {LINKS.map(({ label, href, Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
            className={`inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-4 py-2 text-sm transition-colors hover:border-emerald-700 hover:text-emerald-800 ${focusRing}`}
          >
            <Icon size={16} aria-hidden="true" /> {label}
          </a>
        ))}
      </div>
    </section>
  );
}