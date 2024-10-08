import { useEffect, useRef, useState } from 'react';
import logo from '../assets/jm.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Create a reference for the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener
    window.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-5 bg-[#041523] border-b-8 border-[#39275c]">
      {/* mobile view */}
      <div className='md:hidden flex items-center justify-between w-full'>
        <button 
          onClick={toggleMenu} 
          className='text-2xl text-neutral-300 hover:text-cyan-300'>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <a href='#home'>
          <div className="flex items-center">
            <img className='w-10' src={logo} alt='Logo' />
            <h1 className='ml-2 font-programming'>jen</h1>
          </div>
        </a>
      </div>

      {/* website view */}
      <div className='hidden md:flex items-center justify-between w-full mx-auto max-w-screen-2xl'>
        <a href='#home'>
          <div className='flex items-center'>
            <img className='w-10' src={logo} alt='Logo' />
            <h1 className='ml-2 font-programming'>jen</h1>
          </div>
        </a>

        <div className='flex gap-10'>
          <h1 className='text-custom flex items-center'>
            <span className='mr-1'>#</span>
            <a href="#home" className="text-neutral-300 hover:text-cyan-300 font-programming">home</a>
          </h1>
          <h1 className='text-custom flex items-center'>
            <span className='mr-1'>#</span>
            <a href="#about-me" className="text-neutral-300 hover:text-cyan-300 font-programming">about-me</a>
          </h1>
          <h1 className='text-custom flex items-center'>
            <span className='mr-1'>#</span>
            <a href="#projects" className="text-neutral-300 hover:text-cyan-300 font-programming">projects</a>
          </h1>
          <h1 className='text-custom flex items-center'>
            <span className='mr-1'>#</span>
            <a href="#contact" className="text-neutral-300 hover:text-cyan-300 font-programming">contact</a>
          </h1>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            ref={menuRef} // Attach ref to the menu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative top-3 left-0 w-full flex flex-col items-start gap-4 p-4 md:hidden">
            <h1 className='text-custom flex items-center'>
              <span className='mr-1'>#</span>
              <a href="#home" className="text-neutral-300 hover:text-cyan-300 font-programming mr-4">home</a>
            </h1>
            <h1 className='text-custom flex items-center'>
              <span className='mr-1'>#</span>
              <a href="#about-me" className="text-neutral-300 hover:text-cyan-300 font-programming mr-4">about-me</a>
            </h1>
            <h1 className='text-custom flex items-center'>
              <span className='mr-1'>#</span>
              <a href="#projects" className="text-neutral-300 hover:text-cyan-300 font-programming mr-4">projects</a>
            </h1>
            <h1 className='text-custom flex items-center'>
              <span className='mr-1'>#</span>
              <a href="#contact" className="text-neutral-300 hover:text-cyan-300 font-programming mr-4">contact</a>
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
