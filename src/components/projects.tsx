import Image from 'next/image'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

export default function Projects() {
  let projects = [
    {
      name: 'Entertainment Web App',
      description:
        'A web app that allows users to search for movies, tv shows, and games. Users can also create an account to save their favorite movies, tv shows, and games.',
      technologies: ['React', 'Next', 'Typescript', 'Tailwind'],
      screenshot: '/project_1.png',
      links: {
        github: 'https://github.com/orphandeity/entertainment-web-app.git',
        live: 'https://entertainment-web-app-tan.vercel.app/',
      },
    },
    {
      name: 'Galleria Slideshow Site',
      description:
        'A slideshow site that allows users to upload images and create slideshows.',
      technologies: ['React', 'Next', 'Typescript', 'Tailwind'],
      screenshot: '/project_2.png',
      links: {
        github: 'https://github.com/orphandeity/galleria-slideshow-site.git',
        live: 'https://galleria-slideshow-site-amber.vercel.app/',
      },
    },
    {
      name: 'Planets Fact Site',
      description:
        'A site that displays facts about the planets in our solar system.',
      technologies: ['React', 'Next', 'Typescript', 'Tailwind'],
      screenshot: '/project_3.png',
      links: {
        github: 'https://github.com/orphandeity/planets-fact-site.git',
        live: 'https://planets-fact-site-two.vercel.app/',
      },
    },
  ]

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul className="flex flex-wrap gap-8">
        {projects.map((project) => (
          <li key={project.name}>
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                {/* <CardDescription>{project.description}</CardDescription> */}
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li key={technology}>
                      <Badge variant={'secondary'}>{technology}</Badge>
                    </li>
                  ))}
                </ul>
              </CardHeader>

              <CardContent>
                <Image
                  src={project.screenshot}
                  width={1440}
                  height={886}
                  alt=""
                />
              </CardContent>
              <CardFooter>
                <ul className="flex w-full justify-between">
                  <li>
                    <Button variant={'link'} asChild>
                      <a href={project.links.live} target="_blank">
                        View demo
                      </a>
                    </Button>
                  </li>
                  <li>
                    <Button variant={'link'} asChild>
                      <a href={project.links.github} target="_blank">
                        View code
                      </a>
                    </Button>
                  </li>
                </ul>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}
