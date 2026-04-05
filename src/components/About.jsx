import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

function About({ personalInfo, section }) {
  return (
    <section id="about" className="px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
        </Reveal>

        <Reveal className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900" delay={0.05}>
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{personalInfo.bio}</p>
        </Reveal>
      </div>
    </section>
  )
}

export default About
