import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Experiences from '../components/Experiences'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'

export default function Home(){
  return (
    <Layout>
      <Hero />
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </Layout>
  )
}
