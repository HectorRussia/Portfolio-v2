import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const experiences = [
  {
    id: 'GW',
    company: 'GLOBAL WRIELESS co.ltd.',
    title: 'Fullstack Developer',
    when: 'June 2024 — present',
    bullets: [
      'Developing and maintaining web applications using modern frameworks and technologies',
      'Development and maintaining Production-ready LLM-integrated features and applications',
      'Collaborating with engineering teams to ensure accurate and up-to-date technical information',
      'Contributing to the development of educational materials and resources for AI technologies',
    ],
  },
  {
    id: 'EPT',
    company: 'Expert Programing tutor',
    title: 'Bootcamp Online',
    when: 'Jan 2023 — Apr 2025',
    bullets: [
      'Learing JAVA Python PHP',
      'Learning JavaScript, TypeScript, React, Node.js, and other web technologies',
      'Learning advanced web development concepts',
      'Designing Database Schemas and Data Models',
    ],
  },
  {
    id: 'UnionPlastic',
    company: 'Union Plastic Public Company Limited',
    title: 'Process Engineer',
    when: 'Jun 2021 — November 2021',
    bullets: ['Working in the automotive industry, producing spare parts',
      'Improving production processes to enhance efficiency and reduce waste',
      'Collaborating with cross-functional teams to implement process improvements',
      'Ensuring compliance with quality and safety standards'
    ],
  },
]

const Experience: React.FC = () => {
  const [active, setActive] = useState(0)

  const current = experiences[active]


  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="experience" className="py-12 mt-15">
      <div className="container mx-auto px-6 lg:px-8 lg:w-1/2">
        <motion.div className="mx-auto max-w-3xl" variants={containerVariants} initial="visible">
          <motion.div className="flex items-center gap-6 mb-6" variants={itemVariants}>
            <span className="text-xl text-[#58E6C9] font-semibold">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#CCD6F6]">Where I’ve Worked</h2>
            <div className="flex-1 border-t border-slate-700 ml-4" />
          </motion.div>

          <motion.div className="p-6 md:p-8" variants={itemVariants}>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* left timeline / companies */}
              <div className="relative lg:w-1/3">
                <div className="hidden lg:block absolute left-6 top-0 bottom-0 w-px bg-slate-700" />
                <div className="flex flex-col gap-3 pl-12">
                  {experiences.map((exp, idx) => (
                    <button
                      key={exp.id}
                      onClick={() => setActive(idx)}
                      className={`text-left flex items-center gap-3 py-2 pr-4 rounded-r-md transition-colors duration-200 cursor-pointer ${
                        idx === active ? 'text-[#58E6C9] font-medium' : 'text-slate-400'
                      }`}
                    >
                      <span className={`h-6 w-0.5 rounded ${idx === active ? 'bg-[#58E6C9]' : 'bg-transparent'}`} />
                      <span className="text-sm tracking-wider">{exp.company}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* right details */}
              <div className="lg:w-2/3 flex-1">
                <div className="mb-2 ">
                  <h3 className="text-xl sm:text-xl font-semibold text-[#CCD6F6] ">
                    {current.title} <span className="text-[#58E6C9] font-medium">@ {current.company}</span>
                  </h3>
                  <div className="text-sm text-slate-400 mt-2">{current.when}</div>
                </div>

                <ul className="mt-6 space-y-3 list-none">
                  {current.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <span className="text-[#58E6C9] mt-1">▸</span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience