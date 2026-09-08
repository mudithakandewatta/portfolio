import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-accent text-sm font-medium tracking-widest uppercase mb-3"
      >
        About Me
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-display text-2xl sm:text-3xl font-semibold mb-6"
      >
        A bit about who I am
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-text-muted text-base sm:text-lg leading-relaxed"
      >
        {profile.bio}
      </motion.p>
    </section>
  )
}
