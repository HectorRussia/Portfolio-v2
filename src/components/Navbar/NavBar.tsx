
import BurgerFramer from "../Burger/Burger";
import ButtonHover from "../Button/ButtonHover";
import Logo from "../logo/Logo";
import { motion } from 'framer-motion'

// eslint-disable-next-line react-refresh/only-export-components
export const detailsNavbar = [
{
    id: 1,
    num : "01.",
    title: "About",
},
{
    id: 2,
    num : "02.",
    title: "Experience",
},
{
    id: 3,
    num : "03.",
    title: "Work",
},
{
    id: 4,
    num : "04.",
    title: "Project",
},
{
    id: 5, 
    num : "05.",
    title: "Contact",
},
{
    id: 6,
    title: "Resume",
}       
];
const Navbar = () => {
    return (
        <div className=" bg-[#0A192F] fixed lg:sticky top-0 left-0 right-0 z-50 ">
                <div className="hidden lg:flex items-center justify-between gap-8 px-10">
                    <Logo/>
                    <motion.div
                        className="flex items-center justify-center gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } }
                        }}
                    >
                        {detailsNavbar.map((detail)=> {
                            const itemVariants: any = {
                                hidden: { y: -20, opacity: 0 },
                                visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 500, damping: 30 } }
                            }
                            return (
                                <motion.a
                                key={detail.id}
                                href={`#${detail.title.toLowerCase()}`}
                                variants={itemVariants}
                                className="m-6 mx-2 hidden lg:block text-md cursor-pointer"
                                >
                                    {detail.id !== 6 
                                    ?
                                        <>
                                            <span className=" text-[#58E6C9]">{detail.num} </span>
                                            <span className=" text-[#8D99B5] font-medium">{detail.title}</span>
                                        </>
                                    :   <>
                                            <ButtonHover title={detail.title}/>
                                        </>
                                    }
                                </motion.a>
                            )
                        })}
                    </motion.div>
                </div>
                <div 
                    className= 'lg:hidden h-25 flex items-center justify-between px-5 text-white cursor-pointer'>
                    <Logo/>
                    <BurgerFramer/>
                </div>
            
        </div>
    )
}

export default Navbar
