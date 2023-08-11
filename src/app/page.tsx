import Projects from '@/components/projects'
import Css from '@/components/svg/css'
import Express from '@/components/svg/express'
import Figma from '@/components/svg/figma'
import Git from '@/components/svg/git'
import Github from '@/components/svg/github'
import Html from '@/components/svg/html'
import Javascript from '@/components/svg/javascript'
import Mysql from '@/components/svg/mysql'
import Next from '@/components/svg/next'
import Node from '@/components/svg/node'
import Postgres from '@/components/svg/postgres'
import React from '@/components/svg/react'
import Sass from '@/components/svg/sass'
import Svelte from '@/components/svg/svelte'
import Typescript from '@/components/svg/typescript'
import { ContactForm } from '@/components/contact-form'
import Image from 'next/image'
import photo from '@/assets/8583_PNG.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import SkillsList from '@/components/skills-list'
import SkillListElement from '@/components/skill-list-element'

export default function Home() {
  return (
    <main className="space-y-20">
      <div className="container">
        <figure className="relative mb-12 xs:mb-8">
          <div className="relative mx-auto max-w-xs translate-x-1/3 before:absolute before:inset-0 before:bg-gradient-to-t before:from-background before:to-transparent before:to-30% xs:ml-auto xs:mr-0 xs:max-w-sm">
            <Image src={photo} alt="" priority />
          </div>
          <figcaption className="absolute -bottom-8 max-w-xs xs:bottom-0 xs:max-w-sm">
            <h1>
              Hi! I&apos;m Jeff...
              <br />
              <span className="text-primary">Web Developer</span>, Musician and
              <br />
              Cat Lover.
            </h1>
          </figcaption>
        </figure>

        <div className="space-y-4 xs:space-y-8">
          <p className="text-lg text-muted-foreground">
            I build dynamic web experiences that people love to use. You can
            read a bit more{' '}
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
      </div>

      <section className="container">
        <h2>Skills</h2>
        <div className="space-y-8">
          <SkillsList heading="Languages">
            <SkillListElement name="HTML">
              <Html />
            </SkillListElement>
            <SkillListElement name="CSS">
              <Css />
            </SkillListElement>
            <SkillListElement name="Sass">
              <Sass />
            </SkillListElement>
            <SkillListElement name="JavaScript">
              <Javascript />
            </SkillListElement>
            <SkillListElement name="TypeScript">
              <Typescript />
            </SkillListElement>
          </SkillsList>
          <SkillsList heading="Frameworks">
            <SkillListElement name="React">
              <React />
            </SkillListElement>
            <SkillListElement name="Next">
              <Next />
            </SkillListElement>
            <SkillListElement name="Svelte">
              <Svelte />
            </SkillListElement>
            <SkillListElement name="Express">
              <Express />
            </SkillListElement>
            <SkillListElement name="Node">
              <Node />
            </SkillListElement>
          </SkillsList>
          <SkillsList heading="Tools">
            <SkillListElement name="Git">
              <Git />
            </SkillListElement>
            <SkillListElement name="GitHub">
              <Github />
            </SkillListElement>
            <SkillListElement name="MySQL">
              <Mysql />
            </SkillListElement>
            <SkillListElement name="PostgreSQL">
              <Postgres />
            </SkillListElement>
            <SkillListElement name="Figma">
              <Figma />
            </SkillListElement>
          </SkillsList>
        </div>
      </section>

      <Projects />

      <section id="contact" className="container py-4">
        <h2>Contact</h2>
        <ContactForm />
      </section>
    </main>
  )
}
