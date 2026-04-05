import Reveal from "./Reveal"

function Hero({ personalInfo, contactLinks, heroContent }) {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-20 sm:px-6 sm:pt-24">
      <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-500/20" />
      <div className="absolute -right-12 bottom-0 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl dark:bg-orange-500/20" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-400">{personalInfo.role}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-6xl dark:text-white">{personalInfo.name}</h1>
          <p className="mt-5 max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-300">{personalInfo.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {personalInfo.ctaButtons.map((button) => {
              const isPrimary = button.type === "primary"
              return (
                <a
                  key={button.label}
                  href={button.href}
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                    isPrimary
                      ? "bg-slate-900 text-white hover:bg-teal-600 dark:bg-white dark:text-slate-900 dark:hover:bg-teal-300"
                      : "border border-slate-300 text-slate-700 hover:border-teal-500 hover:text-teal-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-teal-400"
                  }`}
                >
                  {button.label}
                </a>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-200/40 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/30">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{heroContent.snapshotLabel}</p>
            <ul className="mt-4 space-y-4">
              {personalInfo.heroStats.map((item) => (
                <li key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-300">{item.label}</span>
                  <span className="text-xl font-bold text-slate-900 dark:text-white">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {contactLinks.slice(1).map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
