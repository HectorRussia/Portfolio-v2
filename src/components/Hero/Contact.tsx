import React from 'react'
import ButtonHover from '../Button/ButtonHover'

const MYMAIL = "Ponkrit.wo@hotmail.com"
const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-md text-[#58E6C9] font-medium">05. What's Next?</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-[#CCD6F6]">Get In Touch</h2>

          <p className="mt-6 text-center text-[#8892B0] max-w-2xl mx-auto leading-relaxed">
            Feel free to reach out anytime — whether you have a question, a collaboration idea, or just want to say hello. I’ll do my best to get back to you as soon as possible.
            For meaningful conversations, please include some context about why you’re reaching out.
          </p>

          <div className="mt-10">
            <a
              href={"mailto:MYMAIL".replace("MYMAIL", MYMAIL)}
                //className="inline-block border border-[#58E6C9] text-[#58E6C9] px-6 py-3 rounded-md hover:bg-[#58E6C9]/10 transition-colors duration-200"
            >
                <ButtonHover title={"Say Hello"}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
