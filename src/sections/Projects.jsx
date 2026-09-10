import { motion, useReducedMotion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import projects from '../data/projects'

function Projects() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="projects" className="section">
      <motion.div
        className="section-container"
        initial={reducedMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <SectionTitle label="MY PROJECTS">Featured Projects</SectionTitle>
        <div className="projects-grid" role="list" aria-label="Featured projects">
          {projects.map((project, index) => <ProjectCard key={project.title} {...project} index={index} />)}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
