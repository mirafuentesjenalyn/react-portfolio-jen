import { useState } from 'react';
import logo from '../assets/jm.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';


const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="relative mb-20 flex flex-col items-center justify-between py-6">

      {/* mobile view */}
      <div className='mt-8 md:hidden flex items-center justify-between w-full'>
        <button 
          onClick={toggleMenu} 
          className='text-2xl text-neutral-300 hover:text-cyan-300'>
          {isOpen ? <FaTimes  /> : <FaBars />}
        </button>
        <a href='#home'>
          <div className="flex items-center">
            <img className='w-10' src={logo} alt='Logo' />
            <h1 className='ml-2'>jen</h1>
          </div>
        </a>
      </div>

      {/* website view */}
      <div className='mt-8 hidden md:flex items-center justify-between w-full'>
        <a href='#home'>
          <div className='flex items-center'>
            <img className='w-10' src={logo} alt='Logo' />
            <h1 className='ml-2'>jen</h1>
          </div>
        </a>

        <div className='flex gap-10'>
          <h1 className='text-custom flex items-center'>
            <span className='mr-1'>#</span>
            <a href="#home" className="text-neutral-300 hover:text-cyan-300">home</a>
          </h1>
          <h1 className='text-custom flex items-center'>
            <span className='mr-1'>#</span>
            <a href="#about-me" className="text-neutral-300 hover:text-cyan-300">about-me</a>
          </h1>
          <h1 className='text-custom flex items-center'>
            <span className='mr-1'>#</span>
            <a href="#projects" className="text-neutral-300 hover:text-cyan-300">projects</a>
          </h1>
          <h1 className='text-custom flex items-center'>
            <span className='mr-1'>#</span>
            <a href="#contact" className="text-neutral-300 hover:text-cyan-300">contact</a>
          </h1>
        </div>
      </div>

      {/* mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20}}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative top-3 left-0 w-full flex flex-col items-start gap-4 p-4 md:hidden">
            <h1 className='text-custom flex items-center'>
                <span className='mr-1'>#</span>
                  <a href="#home" className="text-neutral-300 hover:text-cyan-300 mr-4">home</a>
              </h1>

              <h1 className='text-custom flex items-center'>
                <span className='mr-1'>#</span>
                  <a href="#about-me" className="text-neutral-300 hover:text-cyan-300 mr-4">about-me</a>
              </h1>

              <h1 className='text-custom flex items-center'>
                <span className='mr-1'>#</span>
                  <a href="#projects" className="text-neutral-300 hover:text-cyan-300 mr-4">projects</a>
              </h1>

              <h1 className='text-custom flex items-center'>
                <span className='mr-1'>#</span>
                  <a href="#contact" className="text-neutral-300 hover:text-cyan-300 mr-4">contact</a>
              </h1>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>

  );
};

export default Navbar; 