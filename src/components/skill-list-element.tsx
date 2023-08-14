import clsx from 'clsx'

interface SkillListElementProps {
  name: string
  children: React.ReactNode
  className?: string
}

export default function SkillListElement({
  name,
  children,
  className,
}: SkillListElementProps) {
  return (
    <li
      className={clsx(
        className,
        'flex flex-col items-center justify-center gap-2 lg:col-span-2'
      )}
    >
      <small>{name}</small>
      <div className="w-8">{children}</div>
    </li>
  )
}
