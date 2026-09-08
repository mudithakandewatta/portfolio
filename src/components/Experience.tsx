import { motion } from 'framer-motion'
import { aiesecExperience } from '../data/experience'
import { createImageResolver } from '../lib/images'

const modules = import.meta.glob('../assets/experience/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>
const resolveExperienceImage = createImageResolver(modules)

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-medium tracking-widest uppercase mb-3"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display text-2xl sm:text-3xl font-semibold"
        >
          AIESEC Journey
        </motion.h2>
      </div>

      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-border" />

        <div className="flex flex-col gap-10">
          {aiesecExperience.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-8 sm:-left-10 top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-bg" />

              <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6 flex flex-col sm:flex-row gap-5">
                <img
                  src={resolveExperienceImage(item.image)}
                  alt={item.role}
                  className="h-32 w-full sm:h-28 sm:w-40 rounded-xl object-cover border border-border shrink-0"
                  loading="lazy"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display font-semibold text-lg">{item.role}</h3>
                    <span className="text-xs text-text-muted">{item.period}</span>
                  </div>
                  <p className="text-accent text-sm mb-2">{item.organization}</p>
                  <p className="text-text-muted text-sm leading-relaxed mb-3">{item.description}</p>
                  <ul className="space-y-1.5">
                    {item.bullets.map((b) => (
                      <li key={b} className="text-sm text-text-muted flex gap-2">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
