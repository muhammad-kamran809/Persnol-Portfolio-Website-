import './App.css'
import Navbar from './components/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2026 Muhammad Kamran. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
