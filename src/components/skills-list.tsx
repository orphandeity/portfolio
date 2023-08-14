interface SkillsListProps {
  heading: string
  children: React.ReactNode
}

export default function SkillsList({ heading, children }: SkillsListProps) {
  return (
    <div className="lg:space-y-8 lg:text-center">
      <h3>{heading}</h3>
      <ul className="flex justify-between lg:mx-auto lg:w-60 lg:flex-wrap lg:justify-center lg:gap-16">
        {children}
      </ul>
    </div>
  )
}
