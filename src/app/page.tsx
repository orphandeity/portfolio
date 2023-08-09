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
import Image from 'next/image'
import photo from '@/assets/8583_PNG.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="space-y-20">
      <div className="container">
        <figure className="relative mb-12 sm:mb-8">
          <div className="relative mx-auto max-w-sm translate-x-1/3 before:absolute before:inset-0 before:bg-gradient-to-t before:from-background before:to-transparent before:to-30% sm:ml-auto sm:mr-0 sm:translate-x-12">
            <Image src={photo} alt="" priority />
          </div>
          <figcaption className="absolute -bottom-8 max-w-xs xs:max-w-sm sm:bottom-0">
            <h1>
              Hi! I&apos;m Jeff...
              <br />
              <span className="text-primary">Web Developer</span>, Musician and
              <br />
              Cat Lover.
            </h1>
          </figcaption>
        </figure>

        <div className="space-y-4 sm:space-y-8">
          <p className="text-lg text-muted-foreground">
            I build dynamic web experiences that people love to use. You can
            read a bit more{' '}
            <Link
              href={'about-me'}
              className="underline decoration-primary decoration-2 underline-offset-4"
            >
              about me
            </Link>{' '}
            or check out some things I&apos;ve made.
          </p>
          <div className="flex justify-between gap-4 sm:gap-8">
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
        <h3 className="text-muted-foreground">Languages</h3>
        <ul className="mb-8 flex justify-between">
          <li className="w-8">
            <Html />
          </li>
          <li className="w-8">
            <Css />
          </li>
          <li className="w-8">
            <Sass />
          </li>
          <li className="w-8">
            <Javascript />
          </li>
          <li className="w-8">
            <Typescript />
          </li>
        </ul>
        <h3 className="text-muted-foreground">Frameworks</h3>
        <ul className="mb-8 flex justify-between">
          <li className="w-8">
            <React />
          </li>
          <li className="w-8">
            <Next />
          </li>
          <li className="w-8">
            <Svelte />
          </li>
          <li className="w-8">
            <Express />
          </li>
          <li className="w-8">
            <Node />
          </li>
        </ul>
        <h3 className="text-muted-foreground">Tools</h3>
        <ul className="flex justify-between">
          <li className="w-8">
            <Git />
          </li>
          <li className="w-8">
            <Github />
          </li>
          <li className="w-8">
            <Mysql />
          </li>
          <li className="w-8">
            <Postgres />
          </li>
          <li className="w-8">
            <Figma />
          </li>
        </ul>
      </section>

      <Projects />

      <section id="contact" className="container">
        <h2>Contact</h2>
        <ContactForm />
      </section>
    </main>
  )
}
