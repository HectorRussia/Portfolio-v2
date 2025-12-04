
import './App.css'
import Main from './components/Main/Main';
import Navbar from './components/Navbar/NavBar';
import './index.css'
function App() {

  return (
    <>
       <div className='bg-[#0A192F] h-screen flex flex-col gap-4 '>
        <Navbar />
        <Main/>
       </div>
    </>
  )
}

export default App
