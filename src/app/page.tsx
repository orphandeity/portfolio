import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <main className="space-y-20 overflow-x-hidden">
      <Hero />

      <Skills />

      <Projects />

      <Contact />
    </main>
  )
}
