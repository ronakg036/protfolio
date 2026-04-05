import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

function Skills({ skills, section }) {
  const categories = Object.entries(skills)

  return (
    <section id="skills" className="px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, categoryData], index) => (
            <Reveal
              key={category}
              delay={index * 0.07}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{categoryData.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {categoryData.items.map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      skill.primary
                        ? "border border-teal-500 bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300"
                        : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    }`}
                  >
                    {skill.name}
                    {skill.primary ? ` • ${section.primaryLabel}` : ""}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
