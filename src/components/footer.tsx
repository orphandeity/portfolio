import Link from 'next/link'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

export default function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-center gap-2 bg-muted py-4 text-sm text-muted-foreground">
      <p>designed and built by Jeff Williams</p>
      <menu className="flex items-center gap-8">
        <li>
          <Link
            href="https://github.com/orphandeity"
            target="_blank"
            className="transition-colors hover:opacity-75 focus-visible:text-primary focus-visible:outline-none"
          >
            <GitHubLogoIcon className="h-8 w-8" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/orphandeity"
            target="_blank"
            className="transition-colors hover:opacity-75 focus-visible:text-primary focus-visible:outline-none"
          >
            <LinkedInLogoIcon className="h-8 w-8" />
          </Link>
        </li>
      </menu>
    </footer>
  )
}
