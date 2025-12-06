import ButtonHover from "../Button/ButtonHover"
import profile from '../../public/profile.jpg'

const Skills = [{
    id:1,
    name:"TypeScript"
},{
    id:2,
    name:"Python"
},{
    id:3,
    name:"Golang"
},{
    id:4,
    name:"Rust"
}];

const About = () => {
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
                
                <div className="mt-6 flex items-center gap-4 justify-center sm:justify-start">
                 <ButtonHover title="Check out my skill more" />
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {Skills.map((s) => (
                    <span key={s.id} className="inline-block text-xs bg-white/5 text-[#CCD6F6] px-3 py-1 rounded-full">{s.name}</span>
                  ))}
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
                      src={profile}
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
      </section>
  )
}

export default About