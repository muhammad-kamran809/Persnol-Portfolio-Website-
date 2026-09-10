import { motion, useReducedMotion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

function About() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="about" className="section about-section">
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <SectionTitle label="ABOUT ME">Who I Am</SectionTitle>

        <motion.div
          className="about-card"
          initial={reducedMotion ? false : { opacity: 0, y: 26, scale: 0.98 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          whileHover={reducedMotion ? undefined : { y: -4 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="about-copy"
            initial={reducedMotion ? false : { opacity: 0, x: -24 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: reducedMotion ? 0 : 0.12, duration: 0.55, ease: 'easeOut' }}
          >
            <p className="about-lead">
              I am Muhammad Kamran, a Full Stack Developer focused on building dependable web applications with PHP, Laravel and React.js.
            </p>
            <p className="about-description">
              My work brings together backend development, responsive frontend experiences and practical database solutions. I build CRUD systems, develop REST APIs, and connect authentication and API integrations into clear, maintainable workflows.
            </p>
          </motion.div>

          <motion.div
            className="about-details"
            initial={reducedMotion ? false : { opacity: 0, x: 24 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: reducedMotion ? 0 : 0.22, duration: 0.55, ease: 'easeOut' }}
          >
            <motion.div
              className="about-experience"
              initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: reducedMotion ? 0 : 0.34, type: 'spring', stiffness: 220, damping: 18 }}
            >
              <strong>2+</strong>
              <span>years of experience</span>
            </motion.div>

            <ul className="about-capabilities" aria-label="Development capabilities">
              {[
                'PHP / Laravel backend development',
                'React.js frontend development',
                'REST API and database development',
                'CRUD systems, authentication and API integration',
              ].map((capability, index) => (
                <motion.li
                  key={capability}
                  initial={reducedMotion ? false : { opacity: 0, x: 14 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: reducedMotion ? 0 : 0.38 + index * 0.08, duration: 0.4, ease: 'easeOut' }}
                >
                  {capability}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
