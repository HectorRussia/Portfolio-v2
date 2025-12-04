import ButtonHover from "../Button/ButtonHover"

const Main = () => {
  return (
    <section className="min-h-screen flex justify-center px-4 py-12">
      <div className="w-full max-w-3xl p-6 md:p-10 py-10 rounded-lg mt-10 ">
        <h2 className="text-xl  text-[#58E6C9] font-bold mb-2">Hi, my name is</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#CCD6f6] font-bold mb-2">Ponkrit Woramalee.</h1>
        <h3 className="text-3xl sm:text-5xl md:text-5xl text-[#8892B0] font-bold mb-4">Builder and writer of un-intimidating AI guides</h3>
        <p className="mt-4 text-base sm:text-lg text-[#8D99B5] max-w-prose leading-relaxed">
          I'm passionate about learning how AI works and breaking 
          it down into hands-on, practical guides that make complex 
          ideas accessible to everyone. Currently, I'm an Information Developer 
          at <span className="text-[#58E6C9]">IBM</span>. I'm also a Coursera Instructor, teaching courses on generative 
          AI. In my free time,
          I write and publish articles on <span className="text-[#58E6C9]">Towards Data Science.</span>
        </p>
        <div className="mt-6">
          <ButtonHover title="Check out my work!" />
        </div>
      </div>
    </section>
  )
}

export default Main