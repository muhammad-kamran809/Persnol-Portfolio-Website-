import { motion, useReducedMotion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import skills from '../data/skills'

function Skills() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="skills" className="section">
      <motion.div
        className="section-container"
        initial={reducedMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <SectionTitle label="MY SKILLS">Technical Skills</SectionTitle>
        <div className="skills-grid" role="list" aria-label="Technical skills">
          {skills.map((skill, index) => (
            <div key={skill.name} role="listitem">
              <SkillCard {...skill} index={index} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
