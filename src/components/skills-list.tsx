interface SkillsListProps {
  heading: string
  children: React.ReactNode
}

export default function SkillsList({ heading, children }: SkillsListProps) {
  return (
    <div>
      <h3 className="text-muted-foreground">{heading}</h3>
      <ul className="flex justify-between rounded-sm bg-muted p-4 text-muted-foreground shadow-inner">
        {children}
      </ul>
    </div>
  )
}
