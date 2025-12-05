import ButtonHover from '../Button/ButtonHover'
import { motion } from 'framer-motion'

const Introl = () => {
  return (
   <section className="flex justify-center px-4 py-12 mb-10 ">
      <motion.div
        className="w-full max-w-5xl p-6 md:p-10 py-10 rounded-lg mt-10 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      >
        <h2 className="text-xl text-[#58E6C9] font-bold ">Hi, my name is</h2>
        <h1 className="text-[2rem] sm:text-[4rem] md:text-[4rem] text-[#CCD6f6] font-bold">Ponkrit Woramalee.</h1>
        <h3 className="text-[2rem] sm:text-[4rem] md:text-[4rem] text-[#8892B0] font-bold">Builder and writer of un-intimidating AI guides</h3>
        <p className="mt-4 text-base sm:text-lg text-[#8D99B5] max-w-prose leading-relaxed">
          I creating software solution 
          I enjoy working on both front-end and back-end development and 
          I’m constantly building my skills to improve my projects. 
          Looking forward to growing and 
          collaborating with others to create useful and efficient applications.
          Now i working at <span className="text-[#58E6C9]">global wireless co.ltd</span>. I'm also an interesting in developing with llm
          In my free time
        </p>
        <div className="mt-6">
          <ButtonHover title="Check out my work!" />
        </div>
      </motion.div>
    </section>
  )
}

export default Introl