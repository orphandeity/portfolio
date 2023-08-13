import SkillListElement from './skill-list-element'
import SkillsList from './skills-list'

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

export default function Skills() {
  return (
    <section className="container max-w-xl">
      <h2>Skills</h2>
      <div className="space-y-16">
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
          <SkillListElement name="Figma">
            <Figma />
          </SkillListElement>
          <SkillListElement name="MySQL">
            <Mysql />
          </SkillListElement>
          <SkillListElement name="PostgreSQL">
            <Postgres />
          </SkillListElement>
        </SkillsList>
      </div>
    </section>
  )
}
