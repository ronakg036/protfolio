import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

function Leadership({ leadership, section }) {
  return (
    <section id="leadership" className="px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {leadership.map((item, index) => (
            <Reveal
              key={`${item.title}-${item.organization}`}
              delay={index * 0.08}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.organization}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{item.duration}</p>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
