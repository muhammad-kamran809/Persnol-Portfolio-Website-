import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleSection) setActiveSection(visibleSection.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.1, 0.35, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      className="navbar"
      initial={reducedMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={() => handleNavClick('home')}>
          <span className="logo-mark">K</span>
          <span className="logo-text">
            <strong>Muhammad Kamran</strong>
            <small>Full Stack Developer</small>
          </span>
        </a>

        <AnimatePresence initial={false}>
          <motion.nav
            id="primary-navigation"
            className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}
            aria-label="Primary navigation"
            initial={false}
            animate={reducedMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                aria-current={activeSection === id ? 'page' : undefined}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </a>
            ))}
          </motion.nav>
        </AnimatePresence>

        <button
          className="cv-button"
          type="button"
          onClick={() => window.dispatchEvent(new Event('open-cv'))}
        >
          <span aria-hidden="true">↓</span>
          Open CV
        </button>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </motion.header>
  )
}

export default Navbar
