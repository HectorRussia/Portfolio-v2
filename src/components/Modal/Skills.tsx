import { motion, AnimatePresence } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'
import { BiLogoTypescript } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaRust } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
interface SkillModalProps {
  isOpen: boolean
  onClose: () => void
}

export const myStack = [
  {
    id: 1,
    name: "TypeScript",
    icon: <BiLogoTypescript size={20} />,
    color: 'from-sky-500 to-indigo-600',
  },
  {
    id: 2,
    name: "Python",
    icon: <FaPython size={20} />,
    // blue -> yellow
    color: 'from-blue-500 to-yellow-400',
  },
  {
    id: 3,
    name: "Golang",
    icon: <FaGolang size={20} />,
    color: 'from-teal-400 to-cyan-500',
  },
  {
    id: 4,
    name: "Rust",
    icon: <FaRust size={20} />,
    // warm orange tones
    color: 'from-orange-400 to-amber-500',
  },
  {
    id: 5,
    name: "HTML5",
    icon: <FaHtml5  size={20} />,
    // HTML5 orange
    color: 'from-orange-400 to-orange-600',
  },
    {
    id: 6,
    name: "CSS3",
    icon: <IoLogoCss3 size={20} />,
    // CSS blue
    color: 'from-blue-400 to-sky-500',
  },
{
    id: 7,
    name: "React",
    icon: <FaReact  size={20} />,
    // React cyan
    color: 'from-cyan-400 to-sky-500',
  },
  {
    id: 8,
    name: "Node.js",
    icon: <FaNodeJs  size={20} />,
    // Node green
    color: 'from-green-400 to-green-600',
  },
  {
    id: 9,
    name: "Express.js",
    icon: <SiExpress  size={20} />,
    // Express neutral
    color: 'from-neutral-600 to-neutral-800',
  },
   {
    id: 10,
    name: "NEXT.js",
    icon: <SiNextdotjs  size={20} />,
    color: 'from-neutral-600 to-neutral-800',
  },
];

const Skills = ({isOpen, onClose}: SkillModalProps) => {
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
                {/* Language */}
               <h2 className="text-2xl font-bold text-[#58E6C9] mb-2">Tech Stack</h2>
               <p className="text-sm text-[#9fb0c8] mb-4">Tools and languages I work with frequently.</p>

               <div className="mt-4">
                 <motion.div
                   className="grid grid-cols-2 sm:grid-cols-4 gap-3"
                   initial="hidden"
                   animate="show"
                   exit="hidden"
                   variants={{
                     hidden: {},
                     show: { transition: { staggerChildren: 0.06 } }
                   }}
                 >
                    {myStack.map((s) => (
                     <motion.button
                       key={s.id}
                       onClick={() => {}}
                       className={`group w-full flex items-center gap-3 px-3 py-2 
                        rounded-xl text-sm text-white shadow-sm 
                        transform transition-transform duration-200 hover:scale-[1.03] 
                        bg-linear-to-r ${s.color} overflow-hidden`}
                       variants={{
                         hidden: { opacity: 0, y: 6 },
                         show: { opacity: 1, y: 0 }
                       }}
                     >
                       <span className={`inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/6 text-white border border-black/20 shadow-inner transition-transform duration-200 group-hover:scale-105 group-hover:bg-white/10`}> 
                         {s.icon}
                       </span>
                       <div className="flex-1 text-left">
                         <div className="font-semibold">{s.name}</div>
                         <div className="text-xs text-white/60">Experienced</div>
                       </div>
                     </motion.button>
                   ))}
                 </motion.div>
               </div>
  
             </motion.div>
           </motion.div>
         </motion.div>
       )}
     </AnimatePresence>
   )
}

export default Skills