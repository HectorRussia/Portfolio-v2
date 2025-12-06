import { motion, AnimatePresence } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'

interface PersonalityModalProps {
  isOpen: boolean
  onClose: () => void
  imagePath?: string
}

const personalitys = [
  {
    id: 1,
    name: 'Extroverted',
    per: '61%',
    color: 'from-teal-400 to-cyan-500'
  },
  {
    id: 2,
    name: 'Intuitive',
    per: '59%',
    color: 'from-amber-400 to-yellow-500'
  },
  {
    id: 3,
    name: 'Feeling-Oriented',
    per: '75%',
    color: 'from-emerald-400 to-green-500'
  },
  {
    id: 4,
    name: 'Strategic Planner',
    per: '61%',
    color: 'from-violet-400 to-fuchsia-500'
  },
  {
    id: 5,
    name: 'Proactive',
    per: '61%',
    color: 'from-rose-400 to-red-500'
  }
];

const Personality = ({ isOpen, onClose, imagePath }: PersonalityModalProps) => {
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
              <h2 className="text-2xl font-bold text-[#58E6C9] mb-4">Personality Profile</h2>
              <div className="flex flex-col justify-center">
                {imagePath && (
                  <>
                    <motion.img
                      src={imagePath}
                      alt="ENFJ-T Personality Profile"
                      className="max-w-full h-auto rounded-lg"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ delay: 0.12, duration: 0.36 }}
                    />

                    <div className="mt-6 flex flex-wrap gap-2">
                      {personalitys.map((p) => (
                        <span
                          key={p.id}
                          className={`inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-linear-to-r ${p.color} text-white shadow-sm transform transition-transform duration-200 hover:scale-105`}
                        >
                          <span className="w-2 h-2 rounded-full bg-white/30 shadow-inner" />
                          <span className="whitespace-nowrap font-bold">{p.name}</span>
                          <span className="ml-2 font-semibold">{p.per}</span>
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Personality