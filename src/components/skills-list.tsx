'use client'

import { animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface SkillsListProps {
  heading: string
  children: React.ReactNode
}

export default function SkillsList({ heading, children }: SkillsListProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    animate(ref.current, { opacity: [0, 1] }, { duration: 1 })
  }, [isInView])

  return (
    <div ref={ref} className="lg:space-y-8 lg:text-center">
      <h3>{heading}</h3>
      <ul className="flex justify-between lg:mx-auto lg:w-60 lg:flex-wrap lg:justify-center lg:gap-16">
        {children}
      </ul>
    </div>
  )
}
