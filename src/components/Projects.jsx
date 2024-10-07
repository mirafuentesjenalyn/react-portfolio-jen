import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';


const Projects = () => {
  return ( 
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 pt-20 w-full overflow-hidden">
        <motion.h1 
            whileInView={ { opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className='font-programming flex flex-col items-center justify-center text-center'>
            <h1 className="text-2xl sm:text-2xl lg:text-4xl text-[#a78bfa] mb-2">
            #projects
            </h1>
            <hr className="border-t-2 border-[#7c3aed] w-1/2 mb-24" />
        </motion.h1>

        <div>
            {PROJECTS.map((project, index) => (
            <div key={index} className='font-programming mb-20 flex flex-wrap sm:justify-center lg:justiy-center'>
                
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-1/2'>
                    <img 
                        className='mb-6 rounded'
                        src={project.image} 
                        alt={project.title} />
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 sm:text-lg lg:text-2xl text-[#e879f9] font-semibold opacity-70'>{project.title}</h6>
                    <p className='mb-4 text-sm sm:text-base lg:text-md text-[#85A58E]'>{project.description}</p>
                    {project.technologies.map((tech, index) => (
                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Projects;