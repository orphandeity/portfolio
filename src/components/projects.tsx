import ProjectCard from './project-card'

export type ProjectType = {
  name: string
  description: string
  technologies: string[]
  screenshot: string
  links: {
    github: string
    live: string
  }
}

export default function Projects() {
  let projects: ProjectType[] = [
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
    <section
      className="container bg-secondary py-4 text-secondary-foreground"
      id="projects"
    >
      <h2>Projects</h2>
      <ul className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}
