import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 pt-28 pb-16 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full blur-3xl opacity-20"
        style={{ background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-2))' }}
      />

      <div className="relative mx-auto max-w-6xl w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent font-medium tracking-wide mb-4"
            >
              Hi, I&apos;m {profile.name.split(' ')[0]} 👋
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-semibold text-4xl sm:text-5xl xl:text-6xl leading-tight"
            >
              {profile.role} building{' '}
              <span className="gradient-text">practical, polished products</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl mx-auto lg:mx-0 text-text-muted text-base sm:text-lg"
            >
              {profile.tagline}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative mx-auto"
          >
            <div
              className="absolute -inset-3 rounded-full blur-xl opacity-40"
              style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-2))' }}
            />
            <img
              src={profile.avatar}
              alt={profile.name}
              className="relative h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72 rounded-full object-cover border-2 border-border"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 max-w-xl mx-auto lg:mx-0 flex flex-wrap items-center justify-center lg:justify-start gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:opacity-90 transition-opacity"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-border text-text hover:border-accent transition-colors"
          >
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full text-text-muted hover:text-text transition-colors"
          >
            Resume ↗
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 max-w-xl mx-auto lg:mx-0 flex items-center justify-center lg:justify-start gap-5 text-text-muted"
        >
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-text transition-colors">
            <FiGithub size={20} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-text transition-colors">
            <FiLinkedin size={20} />
          </a>
          <a href={profile.socials.email} aria-label="Email" className="hover:text-text transition-colors">
            <FiMail size={20} />
          </a>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-text transition-colors animate-bounce"
      >
        <FiArrowDown size={20} />
      </a>
    </section>
  )
}
