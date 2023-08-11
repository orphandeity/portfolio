import { ThemeProvider } from '@/components/theme-provider'
import './tailwind.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ModeToggle } from '@/components/ui/mode-toggle'
import Link from 'next/link'
import { Toaster } from '@/components/ui/toaster'

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
          <header className="container mt-2 flex items-center justify-between">
            <Link
              href={'/'}
              className="transition-colors focus-visible:text-primary focus-visible:outline-none"
            >
              <strong className="text-xl tracking-tight">jeffwilliams</strong>
            </Link>
            <ModeToggle />
          </header>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
