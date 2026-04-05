import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

function CodingProfiles({ codingProfiles, section }) {
  return (
    <section id="coding-profiles" className="px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {codingProfiles.map((profile, index) => (
            <Reveal
              key={profile.platform}
              delay={index * 0.06}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-teal-500 hover:shadow-xl hover:shadow-teal-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-teal-950/40"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{profile.platform}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{profile.metricLabel}</p>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-xs font-bold tracking-wide text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {profile.iconText}
                </span>
              </div>

              <p className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">{profile.metricValue}</p>

              <a
                href={profile.profileLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex text-sm font-semibold text-teal-700 transition hover:text-teal-600 dark:text-teal-400"
              >
                {section.ctaLabel}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles
