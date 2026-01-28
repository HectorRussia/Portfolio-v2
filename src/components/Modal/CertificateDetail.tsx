import { motion, AnimatePresence } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'
import type { Certificate } from './Certificates'

interface CertificateDetailProps {
    isOpen: boolean
    onClose: () => void
    certificate: Certificate | null
}

const CertificateDetail = ({ isOpen, onClose, certificate }: CertificateDetailProps) => {
    return (
        <AnimatePresence>
            {isOpen && certificate && (
                <motion.div
                    key="backdrop-detail"
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative bg-[#0A192F] rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 10 }}
                        transition={{
                            type: 'spring',
                            damping: 25,
                            stiffness: 300
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <motion.button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 text-gray-500 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <IoMdClose size={24} />
                        </motion.button>

                        <div className="flex flex-col md:flex-row">
                            {/* Image Section (Full width on mobile, side on desktop if desired, but user specifically asked to show image when clicked) 
                  Let's make it prominent. Top section image, bottom details? Or Split? 
                  "ตัวภาพเอาไว้โชวตอนเราคลิก" -> Show the image.
                  Let's put the image on the left or top larger.
                  Given the user wants to "Show the picture", I will make it the main focus.
                 */}

                            {certificate.imgPath && (
                                <div className="w-full md:w-1/2 bg-black/20 flex items-center justify-center p-4">
                                    <img
                                        src={certificate.imgPath}
                                        alt={certificate.title}
                                        className="w-full h-auto max-h-[70vh] object-contain rounded-md shadow-lg"
                                    />
                                </div>
                            )}

                            <div className={`p-8 ${certificate.imgPath ? 'md:w-1/2' : 'w-full'} flex flex-col justify-center`}>
                                <div className="mb-6">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#CCD6F6] mb-2">{certificate.title}</h2>
                                    <div className="text-xl text-[#58E6C9] font-medium mb-1">{certificate.issuer}</div>
                                    <div className="text-slate-400 text-sm">{certificate.date}</div>
                                </div>

                                <div className="prose prose-invert max-w-none text-[#8892B0] mb-8">
                                    <p className="leading-relaxed">
                                        {certificate.description}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-3">Skills & Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {certificate.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="text-sm bg-[#58E6C9]/10 text-[#58E6C9] px-3 py-1.5 rounded-full border border-[#58E6C9]/20"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CertificateDetail
