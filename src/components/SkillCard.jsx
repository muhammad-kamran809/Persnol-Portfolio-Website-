import { Atom, Code2, Database, Layers, Webhook } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const iconMap = {
  php: Code2,
  laravel: Layers,
  react: Atom,
  database: Database,
  'rest-api': Webhook,
}

function SkillCard({ icon, name, description, index = 0 }) {
  const Icon = iconMap[icon] ?? Code2
  const reducedMotion = useReducedMotion()

  return (
    <motion.article
      className="skill-card"
      initial={reducedMotion ? false : { opacity: 0, y: 22, scale: 0.96 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      whileHover={reducedMotion ? undefined : { y: -6, scale: 1.015 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        delay: reducedMotion ? 0 : index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="skill-icon"
        aria-hidden="true"
        animate={reducedMotion ? undefined : { y: [0, -3, 0] }}
        transition={reducedMotion ? undefined : { duration: 3.2, delay: index * 0.12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon size={22} strokeWidth={1.8} />
      </motion.div>
      <h3>{name}</h3>
      <p>{description}</p>
    </motion.article>
  )
}

export default SkillCard
