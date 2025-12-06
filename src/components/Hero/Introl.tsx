import { useState } from 'react'
import ButtonHover from '../Button/ButtonHover'
import { motion } from 'framer-motion'
import Personality from '../Modal/Personality';
import personalityImage from '../../public/ENFJT.png';
const Introl = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

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
        <h3 className="text-[2rem] sm:text-[4rem] md:text-[4rem] text-[#8892B0] font-bold"> Builder of Web Applications & LLM-Integrated Products</h3>
        <p className="mt-4 text-base sm:text-lg text-[#8D99B5] max-w-prose leading-relaxed">
            I build software solutions that combine modern web development with 
            practical AI integration. I enjoy working across both front-end and back-end stacks, 
            creating scalable applications and exploring how LLMs can enhance real-world products. 
            I’m experienced in designing RAG pipelines, working with vector databases, 
            and developing smooth AI-powered features using modern web technologies.
              <br /><br />
            I’m passionate about building useful, high-quality applications and collaborating with others 
            to turn ideas into real products. Currently, I’m working at <span className="text-[#58E6C9]">Global Wireless Co., Ltd.</span> as a Full-Stack & AI Developer, where I focus on transforming concepts into production-ready 
            systems. In my free time, I continue experimenting, learning, and creating new tools.
          </p>
        <div className="mt-6" onClick={handleOpenModal}>
          <ButtonHover title="Personality Profile" />
        </div>
      </motion.div>
        {/* Personality Modal */}
      <Personality isOpen={isModalOpen} onClose={handleCloseModal} imagePath={personalityImage} />
    </section>
  )
}

export default Introl