interface ButtonDetail {
    title: string;
}
const ButtonHover = ({title} : ButtonDetail) => {
  return (
        <button
            className="
                relative z-10 
                px-7 py-2 text-lg font-semibold rounded
                border border-[#58E6C9]
                bg-[#0A192F] text-[#58E6C9]
                transition-all duration-300
                flex items-center justify-center

                /* กล่องด้านหลัง */
                after:content-[''] after:absolute after:top-0 after:left-0
                after:w-full after:h-full after:rounded
                after:border after:border-[#58E6C9] 
                after:bg-transparent after:z-[-1] 
                after:transition-all after:duration-300
                after:pointer-events-none

                /* hover */
                hover:bg-transparent hover:text-[#0A192F]
                hover:after:bg-[#58E6C9]
                hover:after:-translate-x-2 hover:after:-translate-y-2
            "
            >
            {title}
        </button>


  )
}

export default ButtonHover