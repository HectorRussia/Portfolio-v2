import React from 'react'

type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 'docchat',
    title: 'DocChat',
    description:
      'DocChat is an AI-powered Multi-Agent RAG system using Docling for structured document parsing and BM25 + vector search retrievers to return fact-checked answers from PDFs, DOCX and text files.',
    tags: ['LangGraph', 'Docling', 'BM25', 'Vector Search', 'Multi-Agent Systems'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: true,
  },
  {
    id: 'galactic',
    title: 'Galactic Healer',
    description:
      'An AI-based educational game to increase awareness about rare diseases and symptoms — built with React, Supabase and a FastAPI backend.',
    tags: ['ReactJS', 'JavaScript', 'Supabase', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1507878866276-a947ef722fee?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8d0b9e1e1e8b6c3a5f0c1a7d6e6b9a2c',
    featured: true,
  },
  {
    id: 'tooling',
    title: 'Builder Toolkit',
    description: 'Small utility library to scaffold and deploy microservices quickly.',
    tags: ['TypeScript', 'Node', 'CLI'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2f8f6e4e9a2b8c4d6f1a9b8e7c3f5d2e',
  },
]

const FeaturedCard: React.FC<{ project: Project; reverse?: boolean }> = ({ project, reverse }) => {
  return (
    <div id="Project" className={`group flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8`}> 
      <div className="relative w-full lg:w-1/2">
        <a
          href="#"
          className="block relative overflow-hidden rounded-lg shadow-lg"
          aria-label={`Open ${project.title}`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover filter grayscale contrast-90 transition-all duration-500 transform group-hover:grayscale-0 group-hover:scale-105"
          />

          {/* colored overlay that fades on hover */}
          <div className="absolute inset-0 bg-[#64ffda]/14 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-0" />
        </a>

        {/* description card that sits over the image on large screens */}
        <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-8">
          <div className="max-w-md p-6 bg-[#0f2b42]/80 text-[#e6eef8] rounded-md shadow-xl backdrop-blur-md">
            <h4 className="text-sm text-[#58E6C9] font-medium">Featured Project</h4>
            <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
            <p className="mt-3 text-sm text-[#c6d6e8] leading-relaxed">{project.description}</p>
            <div className="mt-4 text-xs text-[#9fb0c8]">
              {project.tags.join(' · ')}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="lg:pl-6">
          <h4 className="text-sm text-[#58E6C9] font-medium">Featured Project</h4>
          <h3 className="text-2xl font-bold text-[#CCD6F6] mt-2">{project.title}</h3>
          <p className="mt-4 text-sm text-[#8892B0] leading-relaxed">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.tags.map((t) => (
              <span key={t} className="text-xs text-[#9fb0c8] bg-transparent">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a href="#" className="text-[#58E6C9] inline-flex items-center gap-2">
              View repo
            </a>
            <a href="#" className="text-[#9fb0c8] inline-flex items-center gap-2">
              Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectSection: React.FC = () => {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-5">
            <span className="text-xl text-[#58E6C9] font-semibold">03.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#CCD6F6]">Some Things I’ve Built</h2>
            <div className="flex-1 border-t border-slate-700 ml-4" />
          </div>

          <div className="mt-8 space-y-20">
            {featured.map((p, i) => (
              <FeaturedCard key={p.id} project={p} reverse={i % 2 === 1} />
            ))}
          </div>

          {/* smaller project grid */}
          <div className="mt-12">
            <h3 className="text-lg text-[#CCD6F6] font-semibold mb-6">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter((p) => !p.featured)
                .map((p) => (
                  <article key={p.id} className="group relative rounded-lg overflow-hidden bg-slate-900 p-4">
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-40 object-cover filter grayscale contrast-90 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 rounded"
                    />
                    <div className="mt-3">
                      <h4 className="text-sm text-[#58E6C9]">{p.title}</h4>
                      <p className="text-sm text-[#9fb0c8] mt-2">{p.description}</p>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection

