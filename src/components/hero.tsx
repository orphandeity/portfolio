import Link from 'next/link'
import Image from 'next/image'
import photo from '@/assets/8583_PNG.png'

import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="container">
      <figure className="relative lg:flex lg:items-end">
        <div className="absolute right-0 -z-10 mx-auto w-2/3 max-w-xs -translate-y-1/3 translate-x-16 before:absolute before:inset-0 before:bg-gradient-to-t before:from-background before:to-transparent before:to-30% sm:-translate-y-[40%] sm:translate-x-8 lg:relative lg:order-2 lg:max-w-none lg:translate-x-0 lg:translate-y-0">
          <Image src={photo} alt="" priority />
        </div>
        <figcaption className="mt-24 space-y-10 sm:mt-40 lg:mt-0 lg:max-w-md lg:translate-y-20">
          <h1>
            Hi! I&apos;m Jeff.
            <br />
            <span className="text-primary">Web Developer</span>,
            <br />
            Musician,
            <br />
            and Cat Lover.
          </h1>

          <p className="self-end text-xl">
            I build dynamic web experiences that people love to use. You can
            read a bit more{' '}
            <Link
              href={'about-me'}
              className="underline decoration-primary decoration-2 underline-offset-4 transition-colors focus-visible:text-primary focus-visible:outline-none"
            >
              about me
            </Link>{' '}
            or check out some things I&apos;ve made.
          </p>
          <div className="flex gap-4 sm:gap-8">
            <Button size={'lg'} className="col-start-2 w-full" asChild>
              <Link href={'#projects'}>Projects</Link>
            </Button>
            <Button size={'lg'} className="w-full" asChild>
              <Link href={'#contact'}>Contact</Link>
            </Button>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}
