import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import portfolioData from "./data/portfolioData"
import HomePage from "./pages/HomePage"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("theme")
    return savedMode ? savedMode === "dark" : true
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  }, [isDarkMode])

  return (
    <div className="min-h-screen text-slate-700 transition-colors dark:bg-slate-950 dark:text-slate-200">
      <Navbar
        name={portfolioData.personalInfo.name}
        navLinks={portfolioData.navLinks}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((prev) => !prev)}
      />
      <main>
        <HomePage data={portfolioData} />
      </main>
    </div>
  )
}

export default App
