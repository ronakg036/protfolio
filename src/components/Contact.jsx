import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

function Contact({ personalInfo, contact, section }) {
  const description = contact.descriptionTemplate
    .replace("{availability}", personalInfo.availability)
    .replace("{location}", personalInfo.location)

  return (
    <section id="contact" className="px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-slate-200 bg-gradient-to-br from-teal-50 via-white to-orange-50 p-8 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 sm:p-10">
        <Reveal>
          <SectionHeading eyebrow={section.eyebrow} title={section.title} description={description} />
          <div className="flex flex-wrap gap-3">
            {contact.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noreferrer"}
                className="rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
