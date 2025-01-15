import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB.',
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com/zoubairskiredj/ecommerce-platform',
    live: 'https://ecommerce-platform-demo.vercel.app',
  },
  {
    title: 'Task Management App',
    description: 'A Trello-like task management application using Vue.js and Firebase.',
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com/zoubairskiredj/task-management-app',
    live: 'https://task-app-demo.vercel.app',
  },
  {
    title: 'Portfolio Website',
    description: 'A minimalist portfolio website built with Next.js and Tailwind CSS.',
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com/zoubairskiredj/portfolio',
    live: 'https://zoubair-skiredj.vercel.app',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="group relative overflow-hidden rounded-lg">
            <Image src={project.image} alt={project.title} width={600} height={400} className="w-full transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4 text-center">{project.description}</p>
              <div className="flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                  <Github className="w-6 h-6" />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

