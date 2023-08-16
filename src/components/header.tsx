import Link from 'next/link'
import { ModeToggle } from './ui/mode-toggle'

export default function Header() {
  return (
    <header className="container mt-2 flex items-center justify-between">
      <Link
        href={'/'}
        className="transition-colors focus-visible:text-primary focus-visible:outline-none"
      >
        <strong className="text-xl tracking-tight">jeffwilliams</strong>
      </Link>
      <ModeToggle />
    </header>
  )
}
