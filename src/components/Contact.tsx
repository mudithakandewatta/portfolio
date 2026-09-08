import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/profile'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'a website visitor'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ''}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-accent text-sm font-medium tracking-widest uppercase mb-3"
      >
        Contact
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-display text-2xl sm:text-3xl font-semibold mb-4"
      >
        Let&apos;s build something together
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-text-muted mb-10"
      >
        I&apos;m open to internships, freelance work, and interesting collaborations. Send me a message below or
        reach out directly.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        onSubmit={handleSubmit}
        className="text-left flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-8"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm text-text-muted mb-1.5">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-lg bg-surface-2 border border-border px-4 py-2.5 text-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-text-muted mb-1.5">
              Your email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg bg-surface-2 border border-border px-4 py-2.5 text-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-text-muted mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What would you like to talk about?"
            className="w-full rounded-lg bg-surface-2 border border-border px-4 py-2.5 text-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:border-accent transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="mt-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:opacity-90 transition-opacity self-start"
        >
          Send message
        </button>
        <p className="text-xs text-text-muted">
          Opens your email app addressed to <span className="text-text">{profile.email}</span>.
        </p>
      </motion.form>

      <div className="flex items-center justify-center gap-6 text-text-muted mt-10">
        <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-text transition-colors">
          <FiGithub size={20} />
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-text transition-colors">
          <FiLinkedin size={20} />
        </a>
        <a href={profile.socials.email} aria-label="Email" className="hover:text-text transition-colors">
          <FiMail size={20} />
        </a>
      </div>
    </section>
  )
}
