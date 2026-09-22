import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { applyTheme, getInitialTheme, type Theme } from '../lib/theme'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      className="flex items-center justify-center h-9 w-9 shrink-0 rounded-full border border-border text-text-muted hover:text-text hover:border-accent transition-colors"
    >
      {theme === 'light' ? <FiMoon size={16} /> : <FiSun size={16} />}
    </button>
  )
}
