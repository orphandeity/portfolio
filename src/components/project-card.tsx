import Image from 'next/image'
import type { ProjectType } from './projects'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface ProjectCardProps {
  project: ProjectType
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, technologies, screenshot, links } = project

  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <ul className="flex items-center gap-2">
          {technologies.map((technology) => (
            <li key={technology}>
              <Badge variant={'outline'}>{technology}</Badge>
            </li>
          ))}
        </ul>
      </CardHeader>
      <CardContent>
        <Image src={screenshot} alt="" width={1440} height={886} />
      </CardContent>
      <CardFooter className="gap-6">
        <Button variant={'secondary'} asChild>
          <a href={links.live}>View demo</a>
        </Button>
        <Button variant={'secondary'} asChild>
          <a href={links.github}>View code</a>
        </Button>
      </CardFooter>
    </Card>
  )
}
