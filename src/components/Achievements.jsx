import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

function Achievements({ achievements, section }) {
  return (
    <section id="achievements" className="px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.06}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{item.title}</p>
              <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{item.value}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
