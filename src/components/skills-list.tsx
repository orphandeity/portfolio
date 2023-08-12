interface SkillsListProps {
  heading: string
  children: React.ReactNode
}

export default function SkillsList({ heading, children }: SkillsListProps) {
  return (
    <div className="">
      <h3>{heading}</h3>
      <ul className="flex max-w-lg justify-between text-muted-foreground">
        {children}
      </ul>
    </div>
  )
}
