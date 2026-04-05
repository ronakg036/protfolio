import { useMemo, useState } from "react"
import ProjectCard from "./ProjectCard"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

function Projects({ projects, section }) {
  const [activeFilter, setActiveFilter] = useState(section.allFilterLabel)

  const filters = useMemo(() => {
    const allStacks = projects.flatMap((project) => project.techStack)
    const uniqueStacks = Array.from(new Set(allStacks)).sort()
    return [section.allFilterLabel, ...uniqueStacks]
  }, [projects, section.allFilterLabel])

  const visibleProjects = useMemo(() => {
    if (activeFilter === section.allFilterLabel) {
      return projects
    }
    return projects.filter((project) => project.techStack.includes(activeFilter))
  }, [activeFilter, projects, section.allFilterLabel])

  return (
    <section id="projects" className="px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
        </Reveal>

        <Reveal className="mb-8 flex flex-wrap gap-2" delay={0.05}>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                activeFilter === filter
                  ? "border-teal-600 bg-teal-600 text-white"
                  : "border-slate-300 text-slate-700 hover:border-teal-500 hover:text-teal-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} section={section} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
