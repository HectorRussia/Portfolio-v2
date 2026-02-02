import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMdClose, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface ImageGalleryModalProps {
    isOpen: boolean
    onClose: () => void
    images: string[]
    initialIndex?: number
}

const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({ isOpen, onClose, images, initialIndex = 0 }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)

    // Reset index when modal opens with a new initialIndex
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex)
        }
    }, [isOpen, initialIndex])

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation()
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation()
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return
            if (e.key === 'ArrowRight') nextImage()
            if (e.key === 'ArrowLeft') prevImage()
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="backdrop"
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-4">

                        {/* Close Button */}
                        <motion.button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-20 p-2 text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <IoMdClose size={30} />
                        </motion.button>

                        {/* Navigation Buttons */}
                        {images.length > 1 && (
                            <>
                                <motion.button
                                    onClick={prevImage}
                                    className="absolute left-4 md:left-8 z-20 p-3 text-white bg-black/30 hover:bg-black/60 rounded-full backdrop-blur-md transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <IoIosArrowBack size={30} />
                                </motion.button>

                                <motion.button
                                    onClick={nextImage}
                                    className="absolute right-4 md:right-8 z-20 p-3 text-white bg-black/30 hover:bg-black/60 rounded-full backdrop-blur-md transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <IoIosArrowForward size={30} />
                                </motion.button>
                            </>
                        )}

                        {/* Image Container */}
                        <motion.div
                            key={currentIndex}
                            className="relative max-w-7xl max-h-[85vh] w-full flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images[currentIndex]}
                                alt={`Gallery image ${currentIndex + 1}`}
                                className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>

                        {/* Dots/Counter */}
                        {images.length > 1 && (
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/30 px-4 py-2 rounded-full backdrop-blur-md">
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setCurrentIndex(idx)
                                        }}
                                        className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-[#58E6C9] w-4' : 'bg-white/50 hover:bg-white/80'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ImageGalleryModal
