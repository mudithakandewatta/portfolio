export type Theme = 'light' | 'dark'

export function getInitialTheme(): Theme {
  try {
    return window.localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export function applyTheme(theme: Theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
  try {
    window.localStorage.setItem('theme', theme)
  } catch {
    // ignore storage errors (e.g. private browsing)
  }
}
