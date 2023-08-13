import Link from 'next/link'
import Image from 'next/image'
import photo from '@/assets/8583_PNG.png'

import { Button } from '@/components/ui/button'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="space-y-20 overflow-x-hidden">
      <div className="container relative max-w-xl">
        <div className="absolute right-0 -z-20 w-1/2 -translate-y-28 translate-x-16 -rotate-[65deg] opacity-75 before:absolute before:inset-0 before:bg-gradient-to-t before:from-background before:to-transparent before:to-20% xs:translate-x-20 sm:translate-x-32">
          <Image src={photo} alt="" priority />
        </div>
        <h1 className="mt-28">
          Hi! I&apos;m Jeff...
          <br />
          <span className="text-primary">Web Developer</span>,<br />
          Musician and <br />
          Cat Lover.
        </h1>

        <p className="my-12 text-xl text-muted-foreground">
          I build dynamic web experiences that people love to use. You can read
          a bit more{' '}
          <Link
            href={'about-me'}
            className="underline decoration-primary decoration-2 underline-offset-4 transition-colors focus-visible:text-primary focus-visible:outline-none"
          >
            about me
          </Link>{' '}
          or check out some things I&apos;ve made.
        </p>
        <div className="flex justify-between gap-4 xs:gap-8">
          <Button className="w-full" asChild>
            <Link href={'#projects'}>Projects</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href={'#contact'}>Contact</Link>
          </Button>
        </div>
      </div>

      <Skills />

      <Projects />

      <Contact />
    </main>
  )
}
