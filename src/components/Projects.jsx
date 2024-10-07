import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const Projects = () => {
  return ( 
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 pt-20 w-full overflow-hidden">
        <motion.h1 
            whileInView={ { opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className='font-programming flex flex-col items-center justify-center text-center'>
            <h1 className="text-4xl sm:text-4xl lg:text-5xl text-[#a78bfa] mb-2">
            #projects
            </h1>
            <hr className="border-t-2 border-[#7c3aed] w-1/2 mb-24" />
        </motion.h1>

        
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='font-programming mb-20 flex flex-wrap sm:justify-center lg:justify-center'>     
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex ((prevIndex) => (prevIndex + 1) % project.image.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.image.length) % project.image.length);
  };

  return (
    <div 
      className='relative w-full lg:w-1/2'
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className='relative'
      >
        <div className='aspect-[16/9]'>
            <img 
            className='mb-6 rounded max-w-full h-auto object-cover'
            src={project.image[currentImageIndex]} 
            alt={project.title} 
            />
        </div>

        {/* Arrows Container */}
        {isHovered && (
          <div className='absolute inset-0 flex justify-between items-center'>
            <button className='p-2 text-black hover:bg-opacity-70'
                    onClick ={prevImage}>
              <IoIosArrowBack size={30} />
            </button>
            <button className='p-2 text-black hover:bg-opacity-70'
                    onClick={nextImage}>
              <IoIosArrowForward size={30} />
            </button>
          </div>
        )}
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className='mt-4'
      >
        <h6 className='mb-2 sm:text-lg lg:text-2xl text-[#e879f9] font-semibold opacity-70'>{project.title}</h6>
        <p className='mb-4 text-sm sm:text-base lg:text-md text-[#85A58E]'>{project.description}</p>
        {project.technologies.map((tech, index) => (
          <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;