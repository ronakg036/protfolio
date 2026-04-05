import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

function EventsHosted({ eventsHosted, section }) {
  return (
    <section id="events" className="px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {eventsHosted.map((event, index) => (
            <Reveal
              key={`${event.title}-${event.role}`}
              delay={index * 0.07}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-teal-500 dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-lg font-semibold text-slate-900 dark:text-white">{event.title}</p>
              <p className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                {event.role}
              </p>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{event.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsHosted
