import Nav from './components/Nav'
import Hero from './components/Hero'
import GhostDivider from './components/GhostDivider'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <GhostDivider />
        <About />
        <Experience />
        <Work />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
