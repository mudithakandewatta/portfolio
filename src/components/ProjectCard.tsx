import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import type { Project } from '../data/projects'
import { createImageResolver } from '../lib/images'

const modules = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>
const resolveProjectImage = createImageResolver(modules)

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-accent/60 transition-colors flex flex-col"
    >
      <div className="aspect-[8/5] overflow-hidden bg-surface-2">
        <img
          src={resolveProjectImage(project.image)}
          alt={project.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-text-muted text-sm leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-surface-2 text-text-muted border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-5 pt-5 border-t border-border">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors"
            >
              <FiGithub size={16} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors"
            >
              <FiExternalLink size={16} /> Live demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
