import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

function Navbar({ name, navLinks, isDarkMode, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/75">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="text-sm font-bold tracking-[0.18em] text-slate-900 dark:text-white">
          {name}
        </a>

        <button
          type="button"
          className="rounded-md border border-slate-300 px-2 py-1 text-xs font-semibold text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-medium text-slate-700 transition hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
        </div>
      </nav>

      {isMenuOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-slate-700 transition hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
