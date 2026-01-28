import ButtonHover from "../Button/ButtonHover"
import Skills from "../Modal/Skills"
import { useState, type KeyboardEvent } from "react";
import Personality from "../Modal/Personality";
import { IoMdArrowDropright } from "react-icons/io";
const technical = [{
  id: 1,
  name: "Full-stack development",
},
{
  id: 2,
  name: "AI-powered features & LLM integration"
},
{
  id: 3,
  name: "RAG (Retrieval-Augmented Generation)"
},
{
  id: 4,
  name: "Backend architecture & database design"
},
{
  id: 5,
  name: "Modern UI development"
}]

const About = () => {

  const [openModal, setOpenModal] = useState<'skills' | 'personality' | null>(null);

  const openSkills = () => setOpenModal('skills');
  const openPersonality = () => setOpenModal('personality');
  const closeModal = () => setOpenModal(null);

  return (
    <section id='about' className="py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-5xl backdrop-blur-md rounded-2xl p-6 md:p-10 ">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Text column */}
            <div className="w-full ">
              <div className="flex items-center gap-5 w-full">
                <h1 className="text-xl text-[#58E6C9] font-semibold">01.</h1>
                <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-[#CCD6F6]">
                  About Me
                </h1>
                <div className="divider w-50 md:w-70 lg:w-70"></div>
              </div>

              <p className="mt-4 text-base sm:text-lg text-[#8D99B5] leading-relaxed max-w-prose">
                I focus on building real, developer-friendly applications that integrate LLMs
                in meaningful ways. I enjoy breaking down complex ideas into something clear
                and useful, and creating tools that help others explore and apply generative AI
                in everyday development.
              </p>

              <div className="mt-6 flex flex-row items-center gap-3 justify-center sm:justify-start">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={openSkills}
                  onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => { if (e.key === 'Enter' || e.key === ' ') openSkills(); }}
                  className="w-1/2 sm:w-auto px-1"
                  aria-label="Open skills modal"
                >
                  <div className="w-full">
                    <ButtonHover title="Check out my skills" />
                  </div>
                </div>

                <div
                  role="button"
                  tabIndex={0}
                  onClick={openPersonality}
                  onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => { if (e.key === 'Enter' || e.key === ' ') openPersonality(); }}
                  className="w-1/2 sm:w-auto px-1"
                  aria-label="Open personality modal"
                >
                  <div className="w-full">
                    <ButtonHover title="Personality Profile" />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="mb-4 text-sm text-[#9fb0c8]">Here are a few technologies I've been working with recently:</p>
                <div className="grid grid-cols-2 gap-4">
                  {technical.slice(0, 7).map((t) => (
                    <div key={t.id} className="flex items-start text-sm text-[#CCD6F6]">
                      <span className="mt-1 inline-flex items-center justify-center w-4 h-4 text-[#58E6C9]">
                        <IoMdArrowDropright />
                      </span>
                      <span className="text-[#9fb0c8] ml-2">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image column */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group">
                {/* Decorative offset frame placed behind and offset to bottom-right */}
                {/* Decorative frame sized to the image container (inset-0) and offset slightly down-right. */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#58E6C9] bg-transparent transform translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6 pointer-events-none" aria-hidden="true" />

                {/* Image with heavy teal overlay that fades on hover */}
                <div className="relative z-10 overflow-hidden rounded-md">
                  <img
                    src={"profile.jpg"}
                    alt="Portrait of Ponkrit Woramalee"
                    className="w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#64ffda]/60 transition-opacity duration-500 group-hover:opacity-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skills Modal */}
      <Skills isOpen={openModal === 'skills'} onClose={closeModal} />
      {/* Personality Modal */}
      <Personality isOpen={openModal === 'personality'} onClose={closeModal} imagePath={"ENFJT.png"} />
    </section>

  )
}

export default About