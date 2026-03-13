import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Architecture from "./components/Architecture"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app-container">

      <Navbar />

      <main>

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="architecture">
          <Architecture />
        </section>

      </main>

      <Footer />

    </div>
  )
}

export default App