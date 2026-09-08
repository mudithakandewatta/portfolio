import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Tailwind CSS.
      </div>
    </footer>
  )
}
