import { useState } from 'react'
import { motion } from 'framer-motion'
import ButtonHover from '../Button/ButtonHover'
import Certificates from '../Modal/Certificates'
import CertificateDetail from '../Modal/CertificateDetail'
import { certificates } from '../../data/certificates'
import type { Certificate } from '../Modal/Certificates'

const Learning = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="learning" className="py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-5xl backdrop-blur-md rounded-2xl p-6 md:p-10">
          {/* Header */}
          <div className="flex items-center gap-5 w-full mb-8">
            <h1 className="text-xl text-[#58E6C9] font-semibold">04.</h1>
            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-[#CCD6F6]">
              Learning & Certifications
            </h1>
            <div className="divider w-50 md:w-70 lg:w-70"></div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#8D99B5] leading-relaxed max-w-prose mb-8">
            I'm passionate about continuous learning and staying up-to-date with the latest technologies.
            Here are some certifications and courses that have shaped my development journey.
          </p>

          {/* Certificates Grid */}
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {certificates.slice(0, 4).map((cert) => (
              <motion.div
                key={cert.id}
                layoutId={`cert-${cert.id}`}
                onClick={() => setSelectedCert(cert)}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
                }}
                className="group relative p-6 bg-white/5 backdrop-blur border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer h-full border-l-4 border-l-transparent hover:border-l-[#58E6C9]"
              >
                {/* Icon Indicator for Certificate (Top Right) */}
                <div className="absolute top-4 right-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${cert.imgPath ? 'bg-[#58E6C9]/20 text-[#58E6C9]' : 'bg-white/5 text-slate-400 group-hover:text-[#58E6C9]'}`}>
                    {cert.imgPath ? (
                      // Image Icon
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    ) : (
                      // Check/Cert Icon
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="pr-12">
                  <h3 className="text-lg font-semibold text-[#CCD6F6] mb-2 group-hover:text-[#58E6C9] transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-[#58E6C9] mb-3">
                    <span>{cert.issuer}</span>
                    <span className="text-[#8D99B5]">•</span>
                    <span className="text-[#8D99B5]">{cert.date}</span>
                  </div>

                  <p className="text-sm text-[#8D99B5] leading-relaxed mb-4 line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs bg-[#58E6C9]/10 text-[#58E6C9] px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <div className="mt-8 flex justify-center">
            <div role="button" onClick={() => setOpenModal(true)} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setOpenModal(true)}>
              <ButtonHover title="View All Certificates" />
            </div>
          </div>
        </div>
      </div>

      {/* View All Modal */}
      <Certificates isOpen={openModal} onClose={() => setOpenModal(false)} certificates={certificates} />

      {/* Single Detail Modal */}
      <CertificateDetail isOpen={!!selectedCert} onClose={() => setSelectedCert(null)} certificate={selectedCert} />
    </section>
  )
}

export default Learning