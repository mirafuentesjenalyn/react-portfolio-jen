import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import logo from '../assets/jm.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-5 bg-[#041523] border-b-8 border-[#39275c]">
      {/* Mobile view */}
      <div className='md:hidden flex items-center justify-between w-full'>
        <button 
          onClick={toggleMenu} 
          className='text-2xl text-neutral-300 hover:text-cyan-300'>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <Link to='/'>
          <div className="flex items-center">
            <img className='w-10' src={logo} alt='Logo' />
            <h1 className='ml-2 font-programming'>jen</h1>
          </div>
        </Link>
      </div>

      {/* Website view */}
      <div className='hidden md:flex items-center justify-between w-full mx-auto max-w-screen-2xl'>
        <Link to='/'>
          <div className='flex items-center'>
            <img className='w-10' src={logo} alt='Logo' />
            <h1 className='ml-2 font-programming'>jen</h1>
          </div>
        </Link>

        <div className='flex gap-10'>
          <h1 className='text-custom flex items-center'>
            <span className='mr-1'>#</span>
            <Link to="/" className="text-neutral-300 hover:text-cyan-300 font-programming" onClick={() => handleScrollToSection('home')}>home</Link>
          </h1>
          <h1 className='text-custom flex items-center'>
            <span className='mr-1'>#</span>
            <Link to="/" className="text-neutral-300 hover:text-cyan-300 font-programming" onClick={() => handleScrollToSection('about-me')}>about-me</Link>
          </h1>
          <h1 className='text-custom flex items-center'>
            <span className='mr-1'>#</span>
            <Link to="/" className="text-neutral-300 hover:text-cyan-300 font-programming" onClick={() => handleScrollToSection('projects')}>projects</Link>
          </h1>
          <h1 className='text-custom flex items-center'>
            <span className='mr-1'>#</span>
            <Link to="/" className="text-neutral-300 hover:text-cyan-300 font-programming" onClick={() => handleScrollToSection('contact')}>contact</Link>
          </h1>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative top-3 left-0 w-full flex flex-col items-start gap-4 p-4 md:hidden">
            <h1 className='text-custom flex items-center'>
              <span className='mr-1'>#</span>
              <Link to="/" className="text-neutral-300 hover:text-cyan-300 font-programming" onClick={() => handleScrollToSection('home')}>home</Link>
            </h1>
            <h1 className='text-custom flex items-center'>
              <span className='mr-1'>#</span>
              <Link to="/" className="text-neutral-300 hover:text-cyan-300 font-programming" onClick={() => handleScrollToSection('about-me')}>about-me</Link>
            </h1>
            <h1 className='text-custom flex items-center'>
              <span className='mr-1'>#</span>
              <Link to="/" className="text-neutral-300 hover:text-cyan-300 font-programming" onClick={() => handleScrollToSection('projects')}>projects</Link>
            </h1>
            <h1 className='text-custom flex items-center'>
              <span className='mr-1'>#</span>
              <Link to="/" className="text-neutral-300 hover:text-cyan-300 font-programming" onClick={() => handleScrollToSection('contact')}>contact</Link>
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
