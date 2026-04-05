function ThemeToggle({ isDarkMode, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:border-teal-400 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-teal-500"
      aria-label="Toggle color mode"
    >
      <span className={`h-2.5 w-2.5 rounded-full ${isDarkMode ? "bg-teal-300" : "bg-amber-500"}`} />
      {isDarkMode ? "Dark" : "Light"}
    </button>
  )
}

export default ThemeToggle
