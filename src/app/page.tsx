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
import { ContactForm } from '@/components/ui/contact-form'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
        <h1>Hi there! I&apos;m Jeff. Web Developer, Musician and Cat Lover.</h1>
        <p className="text-xl text-muted-foreground">
          I build dynamic web experiences that people love to use. You can read
          a bit more{' '}
          <Link
            href={'about-me'}
            className="decoration-42 underline decoration-primary underline-offset-4"
          >
            about me
          </Link>{' '}
          or check out some things I&apos;ve made.
        </p>
      </div>

      <section>
        <h2>Skills</h2>
        <h3>Languages</h3>
        <ul className="flex justify-between">
          <li className="w-12">
            <Html />
          </li>
          <li className="w-12">
            <Css />
          </li>
          <li className="w-12">
            <Sass />
          </li>
          <li className="w-12">
            <Javascript />
          </li>
          <li className="w-12">
            <Typescript />
          </li>
        </ul>
        <h3>Frameworks</h3>
        <ul className="flex justify-between">
          <li className="w-12">
            <React />
          </li>
          <li className="w-12">
            <Next />
          </li>
          <li className="w-12">
            <Svelte />
          </li>
          <li className="w-12">
            <Express />
          </li>
          <li className="w-12">
            <Node />
          </li>
        </ul>
        <h3>Tools</h3>
        <ul className="flex justify-between">
          <li className="w-12">
            <Git />
          </li>
          <li className="w-12">
            <Github />
          </li>
          <li className="w-12">
            <Mysql />
          </li>
          <li className="w-12">
            <Postgres />
          </li>
          <li className="w-12">
            <Figma />
          </li>
        </ul>
      </section>

      <Projects />

      <section>
        <h2>Contact</h2>
        <ContactForm />
      </section>
    </main>
  )
}
