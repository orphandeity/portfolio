interface SkillListElementProps {
  name: string
  children: React.ReactNode
}

export default function SkillListElement({
  name,
  children,
}: SkillListElementProps) {
  return (
    <li className="flex flex-col items-center justify-center gap-1">
      <small className="">{name}</small>
      <div className="w-8">{children}</div>
    </li>
  )
}
