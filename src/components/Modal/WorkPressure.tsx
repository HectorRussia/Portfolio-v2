import { motion, AnimatePresence } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'

interface WorkPressureModalProps {
    isOpen: boolean
    onClose: () => void
    imagePath?: string
}

const WorkPressure = ({ isOpen, onClose, imagePath }: WorkPressureModalProps) => {
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
                        className="relative bg-[#0A192F] rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-auto"
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
                            className="p-6"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ delay: 0.08, duration: 0.28 }}
                        >
                            <div className="flex flex-col justify-center items-center">
                                {imagePath ? (
                                    <motion.img
                                        src={imagePath}
                                        alt="Work Under Pressure"
                                        className="max-w-full h-auto sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-lg shadow-lg border border-[#58E6C9]/30"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.99 }}
                                        transition={{ delay: 0.12, duration: 0.36 }}
                                    />
                                ) : (
                                    <p className="text-white">No image available.</p>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default WorkPressure
