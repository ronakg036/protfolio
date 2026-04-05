function Footer({ footer, personalInfo }) {
  return (
    <footer className="border-t border-slate-200 px-4 py-6 text-center text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
      <p>{footer.message}</p>
      <p className="mt-1">{new Date().getFullYear()} {personalInfo.name}</p>
    </footer>
  )
}

export default Footer
