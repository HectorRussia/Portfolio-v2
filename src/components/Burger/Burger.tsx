import { useState } from 'react'
import { MenuToggle } from './MenuToggle';
import { useMenuAnimation } from '../../hooks/useMenuAnimation';
import "./styles.css";
import { detailsNavbar } from '../Navbar/NavBar';
import ButtonHover from '../Button/ButtonHover';

const BurgerFramer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);
    return (
        <div ref={scope} >
            <nav className="menu w-90 h-screen md:text-1xl bg-[#112240] rounded-l-lg">
                <ul className='flex flex-col items-center gap-2'>
                    {detailsNavbar.map((detail) => (
                        <>
                            {
                                detail.id !== 6 
                                ?
                                    <>
                                        <li key={detail.id} >
                                            <div className="text-[#58E6C9] text-[1rem]">{detail.num}</div>
                                        </li>
                                        <div className="text-[#8D99B5] font-medium text-[1.2rem]">{detail.title}</div>  
                                    </>
                                :
                                    <li key={detail.id}>
                                        <ButtonHover title={detail.title}/>
                                    </li>
                            }
                        </>
                    ))}
                </ul>
            </nav>
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
  )
}

export default BurgerFramer