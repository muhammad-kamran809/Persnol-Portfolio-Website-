import Button from './Button'
import { motion, useReducedMotion } from 'framer-motion'

function ProjectCard({ title, description, tags, image, imageAlt, imageLabel, liveUrl, githubUrl, index = 0 }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.article
      className="project-card"
      role="listitem"
      initial={reducedMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      whileHover={reducedMotion ? undefined : { y: -8, rotateX: 1.5, scale: 1.01 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: reducedMotion ? 0 : index * 0.1,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={`project-image ${image ? 'has-image' : ''}`}>
        {image ? <img src={image} alt={imageAlt || `${title} preview`} /> : <span>{imageLabel}</span>}
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-tags">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        {(liveUrl || githubUrl) && (
          <div className="project-buttons">
            {liveUrl && <Button href={liveUrl} target="_blank" rel="noreferrer">Live Demo</Button>}
            {githubUrl && <Button href={githubUrl} variant="secondary" target="_blank" rel="noreferrer">GitHub</Button>}
          </div>
        )}
      </div>
    </motion.article>
  )
}

export default ProjectCard
