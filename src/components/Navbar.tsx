import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? 'bg-bg/80 backdrop-blur border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight">
          Muditha<span className="text-accent">.Kandewatta</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-text transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-text-muted"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm text-text-muted bg-bg/95 border-b border-border">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 hover:text-text transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
