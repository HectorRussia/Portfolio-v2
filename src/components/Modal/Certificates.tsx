import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'
import CertificateDetail from './CertificateDetail'

export interface Certificate {
    id: number
    title: string
    issuer: string
    date: string
    description: string
    skills: string[]
    imgPath?: string
}

interface CertificatesModalProps {
    isOpen: boolean
    onClose: () => void
    certificates: Certificate[]
}

const Certificates = ({ isOpen, onClose, certificates }: CertificatesModalProps) => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="backdrop"
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative bg-[#0A192F] rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-auto"
                        initial={{ scale: 0.85, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.88, opacity: 0, y: 30 }}
                        transition={{
                            type: 'spring',
                            damping: 20,
                            stiffness: 300,
                            opacity: { duration: 0.25 }
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <motion.button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 text-gray-500 bg-white rounded-full shadow-md hover:bg-gray-100"
                            whileHover={{ scale: 1.06, rotate: 90 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <IoMdClose size={20} />
                        </motion.button>

                        {/* Modal Content */}
                        <motion.div
                            className="p-6 md:p-10"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ delay: 0.08, duration: 0.28 }}
                        >
                            <h2 className="text-2xl font-bold text-[#58E6C9] mb-2">All Certificates</h2>
                            <p className="text-sm text-[#9fb0c8] mb-8">My continuous learning journey and achievements.</p>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                                {certificates.map((cert) => (
                                    <motion.div
                                        key={cert.id}
                                        onClick={() => setSelectedCert(cert)}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
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
                                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
            {/* Single Detail Modal */}
            <CertificateDetail isOpen={!!selectedCert} onClose={() => setSelectedCert(null)} certificate={selectedCert} />
        </AnimatePresence>
    )
}

export default Certificates
