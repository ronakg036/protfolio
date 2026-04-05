function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
      {description ? <p className="mt-3 text-sm text-slate-600 sm:text-base dark:text-slate-300">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
