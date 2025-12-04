import ButtonHover from "../Button/ButtonHover"

const Main = () => {
  return (
    
        <div className="h-150 flex items-center justify-center">
            <div className="w-1/2 h-auto p-10 my-2 ">
                <h1 className="text-lg text-[#58E6C9] font-bold">Hi, my name is </h1>
                <h1 className="py-6 text-5xl font-bold text-[#CCD6F6]">
                    Ponkrit Woramalee
                </h1>
                <h1 className=" text-5xl font-bold text-[#CCD6F6]">
                    Builder and writer of un-intimidating AI guides
                </h1>
                <p className="mt-5">  I creating software solution 
                                I enjoy working on both front-end and back-end development and 
                                I’m constantly building my skills to improve my projects. 
                                Looking forward to growing and 
                                collaborating with others to create useful and efficient applications!</p>
               <div className="mt-5">

                <ButtonHover title="Check out my work" />
               </div>
            </div>
        </div>
    )
}

export default Main