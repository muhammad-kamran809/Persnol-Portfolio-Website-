import { motion, useReducedMotion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import SocialLinks from '../components/SocialLinks'

function Contact() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="contact" className="section contact-section">
      <motion.div
        className="section-container"
        initial={reducedMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <SectionTitle label="GET IN TOUCH">Let's Work Together</SectionTitle>
        <p className="section-text">I'm open to new opportunities, collaborations and exciting projects.</p>

        <SocialLinks />
      </motion.div>
    </section>
  )
}

export default Contact
