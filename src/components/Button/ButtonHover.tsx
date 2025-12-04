interface ButtonDetail {
    title: string;
}
const ButtonHover = ({title} : ButtonDetail) => {
    return (
                <button
                        className={
                            `relative inline-flex items-center justify-center px-6 py-2 text-md font-semibold rounded-md
                             transition-all duration-300 select-none
                             bg-transparent text-[#58E6C9] border border-[#58E6C9]
                             z-10

                             /* outline element (offset) — hidden by default */
                             after:content-[''] after:absolute after:inset-0 after:rounded-md
                             after:border after:border-[#58E6C9] after:bg-transparent
                               after:translate-x-0 after:translate-y-0 after:opacity-0 after:z-[-1]
                               after:transition-all after:duration-300 after:pointer-events-none

                             /* hover: fill button and reveal offset outline */
                             hover:bg-[#58E6C9] hover:text-[#0A192F]
                             hover:after:translate-x-2 hover:after:translate-y-2 hover:after:opacity-100
                            `
                        }
                >
                        {title}
                </button>
    )
}

export default ButtonHover