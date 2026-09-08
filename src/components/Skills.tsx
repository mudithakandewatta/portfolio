import { motion } from 'framer-motion'
import { skills } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-medium tracking-widest uppercase mb-3"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display text-2xl sm:text-3xl font-semibold"
        >
          What I work with
        </motion.h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="font-display font-semibold mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-full bg-surface-2 border border-border text-text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
