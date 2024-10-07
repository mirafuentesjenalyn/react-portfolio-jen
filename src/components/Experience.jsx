import { EXPERIENCES } from "../constants";
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="font-programming container mx-auto pt-24 w-full overflow:hidden px-4 sm:px-8 lg:px-16">
        <motion.h1 
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100}}
            transition={{ duration: 0.5 }}
            className='font-programming flex flex-col items-center justify-center text-center'>
            <h1 className="text-4xl sm:text-4xl lg:text-5xl text-[#ffc8c5] mb-2">
            #experience
            </h1>
            <hr className="border-t-2 border-[#ef4444] w-1/2 mb-20" />
        </motion.h1>

        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-20 flex flex-wrap sm:justify-center lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4">
                        <p className="mb-2 text-xl sm:xl lg:2xl text-sm text-[#0369a1]">{experience.year}</p>
                    </motion.div>

                    <motion.div 
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 text-base sm:text-lg lg:text-2xl font-semibold text-[#ef4444]">
                            {experience.role} - 
                            <span className="text-xs sm:text-sm lg:text-base text-[#ffc8c5] opacity-70">
                                {experience.company}
                            </span>
                        </h6>
                        <p className="mb-4 text-sm sm:text-base lg:text-md text-[#85A58E]">{experience.description}</p>
                        {experience.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 mt-4 rounded bg-[#171717] px-2 py-1 text-sm font-medium text-[#a78bfa] opacity-70">{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Experience;