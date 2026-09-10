import { motion, useReducedMotion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

function Education() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="education" className="section education-section">
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <SectionTitle label="EDUCATION">Academic Journey</SectionTitle>

        <div className="education-timeline">
          <motion.article
            className="education-item education-item-current"
            initial={reducedMotion ? false : { opacity: 0, x: -26 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="education-marker"
              aria-hidden="true"
              initial={reducedMotion ? false : { scale: 0, opacity: 0 }}
              whileInView={reducedMotion ? undefined : { scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: reducedMotion ? 0 : 0.18, type: 'spring', stiffness: 260, damping: 18 }}
            />
            <div className="education-card">
              {/* <span className="education-status">In Progress</span> */}
              <h3>BS Computer Science ( In Progress )</h3>
              <p className="education-institution">Quaid-e-Azam Degree College of Peshawar, KPK</p>
              <p className="education-location">Peshawar, KPK</p>
            </div>
          </motion.article>

          <motion.article
            className="education-item"
            initial={reducedMotion ? false : { opacity: 0, x: -26 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ delay: reducedMotion ? 0 : 0.14, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="education-marker"
              aria-hidden="true"
              initial={reducedMotion ? false : { scale: 0, opacity: 0 }}
              whileInView={reducedMotion ? undefined : { scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: reducedMotion ? 0 : 0.3, type: 'spring', stiffness: 260, damping: 18 }}
            />
            <div className="education-card">
              <span className="education-dates">Aug 2022 - Aug 2023</span>
              <h3>DIT</h3>
              <p className="education-qualification">Diploma in Information Technology</p>
              <p className="education-institution">UK Institute of Computer Science</p>
              <div className="education-facts">
                <span>Marks <strong>1059/1400</strong></span>
                <span>Location <strong>Peshawar, KPK</strong></span>
              </div>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </section>
  )
}

export default Education
