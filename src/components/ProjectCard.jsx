import Reveal from "./Reveal"

function ProjectCard({ project, index, section }) {
  return (
    <Reveal
      delay={index * 0.06}
      className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-teal-500 hover:shadow-xl hover:shadow-teal-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-teal-950/40"
    >
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-teal-700 transition group-hover:text-teal-600 dark:text-teal-400"
        >
          {section.githubLabel}
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-slate-700 transition group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white"
        >
          {section.liveLabel}
        </a>
      </div>
    </Reveal>
  )
}

export default ProjectCard
