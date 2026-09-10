import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { renderAsync } from 'docx-preview'
import Button from '../components/Button'
import DeveloperScene from '../components/3d/DeveloperScene'
import social from '../data/social'

const cvPath = '/cv/Muhammad%20Kamran%20Full%20stack%20developer.docx'

function Hero() {
  const reducedMotion = useReducedMotion()
  const [isCvOpen, setIsCvOpen] = useState(false)
  const [cvStatus, setCvStatus] = useState('idle')
  const cvDocumentRef = useRef(null)

  const openCv = () => {
    setCvStatus('loading')
    setIsCvOpen(true)
  }

  useEffect(() => {
    if (!isCvOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsCvOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [isCvOpen])

  useEffect(() => {
    const handleOpenCv = () => {
      setCvStatus('loading')
      setIsCvOpen(true)
    }

    window.addEventListener('open-cv', handleOpenCv)

    return () => window.removeEventListener('open-cv', handleOpenCv)
  }, [])

  useEffect(() => {
    if (!isCvOpen) return undefined

    let isCurrent = true
    fetch(cvPath)
      .then((response) => {
        if (!response.ok) throw new Error('CV could not be loaded')
        return response.arrayBuffer()
      })
      .then((arrayBuffer) => renderAsync(arrayBuffer, cvDocumentRef.current, cvDocumentRef.current, {
        className: 'cv-word-document',
        inWrapper: true,
        breakPages: true,
        ignoreWidth: false,
        ignoreHeight: false,
        ignoreFonts: false,
        renderHeaders: true,
        renderFooters: true,
        renderFootnotes: true,
        renderComments: false,
      }))
      .then(() => {
        if (!isCurrent) return
        setCvStatus('ready')
      })
      .catch(() => {
        if (isCurrent) setCvStatus('error')
      })

    return () => {
      isCurrent = false
    }
  }, [isCvOpen])

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={reducedMotion ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <motion.div
            className="hello-badge"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Hello, I'm <span>👋</span>
          </motion.div>

          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.5 }}
          >
            Muhammad <span>Kamran</span>
          </motion.h1>
          <motion.h2
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.5 }}
          >
            PHP / Laravel & React.js Developer
          </motion.h2>
          <motion.p
            className="hero-description"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            I build modern, scalable and user-friendly web applications with 2+ years of experience.
            I specialize in Laravel, React.js, REST APIs, database design and full-stack development.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.5 }}
          >
            <Button href="#projects">View My Projects <span>→</span></Button>
            <Button href="#contact" variant="secondary"><span>✉</span> Contact Me</Button>
            <button className="cv-button hero-cv-button" type="button" onClick={openCv}>
              <span aria-hidden="true">↓</span>
              Open CV
            </button>
          </motion.div>

          <motion.div
            className="contact-info"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="contact-item"><span className="contact-icon">✉</span><span>{social.email}</span></div>
            <div className="contact-item"><span className="contact-icon whatsapp">◉</span><span>{social.phone}</span></div>
            <div className="contact-item"><span className="contact-icon">●</span><span>{social.location}</span></div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-3d"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="glow glow-one" />
          <div className="glow glow-two" />
          <DeveloperScene />
        </motion.div>
      </div>

      {isCvOpen && (
        <div className="cv-modal-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setIsCvOpen(false)
        }}>
          <motion.div
            className="cv-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-modal-title"
            initial={reducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="cv-modal-header">
              <div>
                <p className="cv-modal-eyebrow">Curriculum vitae</p>
                <h2 id="cv-modal-title">Muhammad Kamran</h2>
              </div>
              <button className="cv-modal-close" type="button" aria-label="Close CV modal" onClick={() => setIsCvOpen(false)}>×</button>
            </div>

            <div className="cv-document">
              {cvStatus === 'loading' && <p className="cv-document-message">Loading my CV...</p>}
              {cvStatus === 'error' && <p className="cv-document-message">I could not load the CV right now. Please try again.</p>}
              <div ref={cvDocumentRef} className="cv-document-content" aria-label="CV document" />
            </div>

            <div className="cv-modal-footer">
              <span className="cv-file-name">Muhammad Kamran · Full stack developer</span>
              <a className="secondary-button" href={cvPath} download>
                Download original <span aria-hidden="true">↓</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default Hero
