import { motion, AnimatePresence } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'
import { BiLogoTypescript } from "react-icons/bi";
import { FaDatabase, FaDocker, FaGithub, FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaRust } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiFastapi, SiLangchain, SiMantine, SiNestjs, SiShadcnui } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaVuejs } from "react-icons/fa";
import { DiMysql } from 'react-icons/di';
import { SiPrisma } from "react-icons/si";
import { GiBrain } from 'react-icons/gi';
import { FaGitlab } from "react-icons/fa6";
interface SkillModalProps {
  isOpen: boolean
  onClose: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const myStack = [
  {
    id: 1,
    name: "TypeScript",
    icon: <BiLogoTypescript size={20} />,
    color: 'from-sky-500 to-indigo-600',
  },
  {
    id: 2,
    name: "JavaScript",
    icon: <IoLogoJavascript  size={20} />,
    color: 'from-[#F7DF1E] to-[#FFD24C]',
  },
  {
    id: 3,
    name: "Python",
    icon: <FaPython size={20} />,
    // blue -> yellow
    color: 'from-blue-500 to-yellow-400',
  },
  {
    id: 4,
    name: "Golang",
    icon: <FaGolang size={20} />,
    color: 'from-teal-400 to-cyan-500',
  },
  {
    id: 5,
    name: "Rust",
    icon: <FaRust size={20} />,
    // warm orange tones
    color: 'from-orange-400 to-amber-500',
  },
  {
    id: 6,
    name: "HTML5",
    icon: <FaHtml5  size={20} />,
    // HTML5 orange
    color: 'from-orange-400 to-orange-600',
  },
    {
    id: 7,
    name: "CSS3",
    icon: <IoLogoCss3 size={20} />,
    // CSS blue
    color: 'from-blue-400 to-sky-500',
  },
{
    id: 8,
    name: "React",
    icon: <FaReact  size={20} />,
    // React cyan
    color: 'from-cyan-400 to-sky-500',
  },
  {
    id: 9,
    name: "NEXT.js",
    icon: <SiNextdotjs  size={20} />,
    color: 'from-neutral-600 to-neutral-800',
  },
  {
    id: 10,
    name: "VUE.js",
    icon: <FaVuejs  size={20} />,
    color: 'from-[#42B883] to-[#2C9F6B]',
  },
  {
    id: 11,
    name: "Tailwind",
    icon: <RiTailwindCssFill size={20} />,
    color: 'from-teal-400 to-cyan-400',
  },
  {
    id: 12,
    name: "Mantine",
    icon: <SiMantine size={20} />,
    color: 'from-[#00B37E] to-[#4ADE80]',
  },
  {
    id: 13,
    name: "Shadcnui",
    icon: <SiShadcnui size={20} />,
    color: 'from-[#7C3AED] to-[#A78BFA]',
  },
  {
    id: 14,
    name: "Node.js",
    icon: <FaNodeJs  size={20} />,
    // Node green
    color: 'from-green-400 to-green-600',
  },
  {
    id: 15,
    name: "Express.js",
    icon: <SiExpress  size={20} />,
    // Express neutral
    color: 'from-neutral-600 to-neutral-800',
  },
  {
    id: 16,
    name: "Nest.js",
    icon: <SiNestjs   size={20} />,
    // Express neutral
    // NestJS brand red
    color: 'from-[#E0234E] to-[#FF6B6B]',
  },
  {
    id: 17,
    name: "FastAPI",
    icon: <SiFastapi  size={20} />,
    // FastAPI teal-ish
    color: 'from-[#009688] to-[#00E5C4]',
  },
  {
    id: 18,
    name: "MySQL",
    icon: <DiMysql  size={20} />,
    // MySQL blue
    color: 'from-[#00758F] to-[#00A0D2]',
  },
  {
    id: 19,
    name: "Prisma",
    icon: <SiPrisma  size={20} />,
    // Prisma cyan -> violet (brand-like)
    color: 'from-[#00B4D8] to-[#7C3AED]',
  },
  {
    id: 20,
    name: "ChromaDB",
    icon: <FaDatabase  size={20} />,
    // Chroma-style: emphasize orange to avoid clashing with Python
    color: 'from-[#FF6A4D] to-[#FFD166]',
  },
  {
    id: 21,
    name: "QdrantDB",
    icon: <FaDatabase  size={20} />,
    // Qdrant red/pink (logo-like)
    color: 'from-[#E11D48] to-[#FF6B8A]',
  },
  {
    id: 22,
    name: "LangChain",
    icon: <SiLangchain   size={20} />,
    // LangChain blue gradient (brand-like)
    color: 'from-[#0B5E4A] to-[#58E6C9]',
  },
  {
    id: 23,
    name: "LangGraph",
    icon: <GiBrain  size={20} />,
    // LangGraph pink gradient (requested)
    color: 'from-[#FF4D8D] to-[#FF9CCF]',
  },
  {
    id: 24,
    name: "Docker",
    icon: <FaDocker  size={20} />,
    // Docker blue
    color: 'from-[#2496ED] to-[#0DB7ED]',
  },
  {
    id: 25,
    name: "GitLab",
    icon: <FaGitlab   size={20} />,
    // GitLab orange
    color: 'from-[#FC6D26] to-[#FF9A3C]',
  },
  {
    id: 26,
    name: "GitHub",
    icon: <FaGithub    size={20} />,
    // GitHub dark
    color: 'from-[#0D1117] to-[#24292F]',
  }
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