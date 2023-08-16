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
    <section className="bg-primary text-primary-foreground" id="projects">
      <svg
        id="visual"
        viewBox="0 0 900 150"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <rect x="0" y="0" className="fill-primary"></rect>
        <path
          d="M0 84L37.5 73.5C75 63 150 42 225 37.5C300 33 375 45 450 54.5C525 64 600 71 675 71C750 71 825 64 862.5 60.5L900 57L900 0L862.5 0C825 0 750 0 675 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z"
          className="fill-background"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      </svg>
      <div className="container">
        <h2>Projects</h2>
        <p className="mb-8 lg:mb-12">
          Here are some of the projects I&apos;ve worked on recently. Click on a
          project to view more info.
        </p>
        <ul className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <li key={project.name}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
      <svg
        id="visual"
        viewBox="0 0 900 150"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <path
          d="M0 132L37.5 123.8C75 115.7 150 99.3 225 91C300 82.7 375 82.3 450 87.3C525 92.3 600 102.7 675 107C750 111.3 825 109.7 862.5 108.8L900 108L900 151L862.5 151C825 151 750 151 675 151C600 151 525 151 450 151C375 151 300 151 225 151C150 151 75 151 37.5 151L0 151Z"
          className="fill-background"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      </svg>
    </section>
  )
}
