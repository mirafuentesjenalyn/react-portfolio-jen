import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { wrap } from 'popmotion'; // Importing wrap function from Popmotion

// Animation variants for the image transitions
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

// Configurations for swipe transitions
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const Projects = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 pt-20 w-full overflow-hidden">
      {/* Header Section */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="font-programming flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-4xl sm:text-4xl lg:text-5xl text-[#a78bfa] mb-2">
          #projects
        </h1>
        <hr className="border-t-2 border-[#7c3aed] w-1/2 mb-16" />
      </motion.h1>

      {/* Project Cards Section */}
      {PROJECTS.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0); // Separate state for direction

  // Preload images
  useEffect(() => {
    const preloadImages = (images) => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages(project.image); // Make sure project.image is an array
  }, [project.image]);

  const paginate = (newDirection) => {
    setCurrentImageIndex((prevIndex) => wrap(0, project.image.length, prevIndex + newDirection)); // Wrap current index
    setDirection(newDirection);
  };
  return (
    <div className="font-programming mb-20 flex flex-col items-center justify-center lg:flex-row lg:space-x-10">
      {/* Image Carousel Section */}
      <div className="relative w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg" style={{ height: 'auto', aspectRatio: '16 / 9' }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentImageIndex}
            src={project.image[currentImageIndex]} // Ensure this is valid
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="rounded-lg w-full h-full object-fill absolute"
            style={{ top: 0, left: 0 }}
            drag="x" // Allow dragging in the x direction
            dragConstraints={{ left: 0, right: 0 }} // Restrict dragging to the bounds of the parent
            dragElastic={1} // Allow for elastic dragging
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1); // Swipe left
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1); // Swipe right
              }
            }}
          />
        </AnimatePresence>
  
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex justify-between items-center p-4 z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button
            className="p-2 text-white bg-purple-800 rounded-full bg-opacity-70 hover:bg-opacity-90"
            onClick={() => paginate(-1)} // Previous image
          >
            <IoIosArrowBack size={30} />
          </button>
          <button
            className="p-2 text-white bg-purple-800 rounded-full bg-opacity-70 hover:bg-opacity-90"
            onClick={() => paginate(1)} // Next image
          >
            <IoIosArrowForward size={30} />
          </button>
        </div>
      </div>

      {/* Project Details Section */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="mt-4 w-full lg:w-1/2 text-center lg:text-left"
      >
        <h6 className="mb-2 sm:text-lg lg:text-2xl text-[#e879f9] font-semibold">
          {project.title}
        </h6>
        <p className="mb-4 text-sm sm:text-base lg:text-md text-[#85A58E]">
          {project.description}
        </p>
        {/* Technology Badges */}
        <div className="flex flex-wrap justify-center lg:justify-start">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
