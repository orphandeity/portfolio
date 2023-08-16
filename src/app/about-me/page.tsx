import Transition from '@/components/transition'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutMe() {
  return (
    <Transition>
      <main className="container">
        <h1 className="mb-4 mt-8">About me</h1>
        <div className="space-y-4 text-lg lg:columns-2">
          <p>
            Hi there! I&apos;m Jeff. I&apos;m an electronic musician who loves
            building things with code.
          </p>
          <p>
            I first discovered programming through computer music. For over ten
            years, I&apos;ve used visual programming languages like Max and Pure
            Data to make custom instruments and audio effects. Learning to use
            these tools was a challenging but rewarding experience that helped
            me grow as an artist. They taught me to approach problem-solving
            programmatically and inspired me to explore innovative ways to
            combine different mediums and technologies.
          </p>
          <p>
            Several years ago, I shifted my focus toward web technologies. I
            found myself intrigued by hypermedia and was eager to experiment
            with the platform&apos;s capabilities. I started learning about
            HTML, CSS, and JavaScript and gradually built my skills in web
            development. It wasn&apos;t easy initially, but I enjoyed creating
            websites and applications that people could access worldwide.
          </p>
          <p>
            Since then, I&apos;ve been honing my skills and learning JavaScript.
            I completed the Frontend Engineering Career Path certification
            program at Codecademy and participated in a comprehensive series of
            React workshops from Frontend Masters. I am always working on
            personal projects to refine my skills and am determined to stay
            current within a quickly changing industry.
          </p>
          <p>
            Currently, I am seeking a full-time role where I can help a company
            achieve its goals and grow as a valued team member. If you are
            looking to hire a developer, please feel free to reach out. I would
            love to hear from you!
          </p>
          <Button size={'lg'} asChild>
            <Link href={'/#contact'}>Contact me</Link>
          </Button>
        </div>
      </main>
    </Transition>
  )
}
