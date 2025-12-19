
import { useEffect, useState } from 'react';
import './App.css'
import PathDrawing from './components/Drawing/PathDrawing';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/NavBar';
import SideBars from './components/Sidebar/SideBar';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className='bg-[#0A192F]'>
      {showSplash ? (
        <PathDrawing />
      ) : (
        <>
          <Navbar />
          <Main />
          <SideBars/>
        </>
      )}
    </div>
  );
}

export default App
