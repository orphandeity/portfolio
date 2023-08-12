import { ThemeProvider } from '@/components/theme-provider'
import './tailwind.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ModeToggle } from '@/components/ui/mode-toggle'
import Link from 'next/link'
import { Toaster } from '@/components/ui/toaster'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jeff Williams | Web Developer',
  description: 'portfolio of jeff williams, fullstack web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="container mt-2 flex max-w-lg items-center justify-between">
            <Link
              href={'/'}
              className="transition-colors focus-visible:text-primary focus-visible:outline-none"
            >
              <strong className="text-xl tracking-tight">jeffwilliams</strong>
            </Link>
            <ModeToggle />
          </header>
          {children}
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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
