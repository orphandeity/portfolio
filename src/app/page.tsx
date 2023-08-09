import { ContactForm } from '@/components/ui/contact-form'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Hi there! I&apos;m Jeff. Web Developer, Musician and Cat Lover.</h1>
      <p className="text-xl text-muted-foreground">
        I build dynamic web experiences that people love to use. You can read a
        bit more{' '}
        <Link
          href={'about-me'}
          className="decoration-42 underline decoration-primary underline-offset-4"
        >
          about me
        </Link>{' '}
        or check out some things I&apos;ve made.
      </p>
      <h2>Skills</h2>
      <h3>Languages</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Sass</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
      </ul>
      <h3>Frameworks</h3>
      <ul>
        <li>React</li>
        <li>Next</li>
        <li>Svelte</li>
        <li>Express</li>
        <li>Node</li>
      </ul>
      <h3>Tools</h3>
      <ul>
        <li>Git</li>
        <li>GitHub</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>Figma</li>
      </ul>
      <h2>Projects</h2>
      <h3>Entertainment Web App</h3>
      <h3>Galleria Slideshow Site</h3>
      <h3>Planets Fact Site</h3>
      <h2>Contact</h2>
      <ContactForm />
    </main>
  )
}
