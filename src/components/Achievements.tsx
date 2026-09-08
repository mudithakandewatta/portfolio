import { motion } from 'framer-motion'

// Auto-discovers every image dropped into src/assets/achievements/ at build time —
// no code changes needed, just add a file there and reload.
const modules = import.meta.glob('../assets/achievements/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const images = Object.keys(modules)
  .sort()
  .map((key) => modules[key])

export default function Achievements() {
  if (images.length === 0) return null

  const track = [...images, ...images]

  return (
    <section id="achievements" className="py-24">
      <div className="text-center mb-14 px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-medium tracking-widest uppercase mb-3"
        >
          Achievements
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display text-2xl sm:text-3xl font-semibold"
        >
          Milestones & recognition
        </motion.h2>
      </div>

      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: images.length * 6, repeat: Infinity, ease: 'linear' }}
        >
          {track.map((src, i) => (
            <div
              key={i}
              className="h-56 w-80 shrink-0 rounded-2xl overflow-hidden border border-border bg-surface"
            >
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
