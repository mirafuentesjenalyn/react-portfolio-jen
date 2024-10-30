import { EXPERIENCES } from "../constants";
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="font-programming container mx-auto pt-24 w-full overflow-hidden px-4 sm:px-8 lg:px-16">
      {/* Header Section */}
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col items-center justify-center text-center mb-16'
      >
        <h1 className="text-4xl sm:text-4xl lg:text-5xl text-[#ffc8c5] mb-2">
          #experience
        </h1>
        <hr className="border-t-2 border-[#ef4444] w-1/2 mb-8" />
      </motion.h1>

      {/* Experience Cards Section */}
      <div className="flex flex-wrap justify-center">
        {EXPERIENCES.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience }) => {
    return (
      <div className="font-programming mb-10 flex flex-col items-center justify-center lg:w-1/3 mx-4 cursor-pointer"> {/* Added cursor-pointer here */}
        <div className="bg-[#1f2937] rounded-lg shadow-md p-6 flex flex-col h-full min-h-[400px] border border-[#0c0a09] transition-transform duration-300 hover:scale-105">
          <div className="mb-4 flex-grow">
            <p className="mb-1 text-xl text-[#fbbf24] font-semibold">{experience.year}</p>
            <h6 className="mb-2 text-2xl text-[#ef4444] font-bold">
              {experience.role}
            </h6>
            <span className="text-xl text-[#e5e7eb] opacity-90">
              {experience.company}
            </span>
          </div>
          <p className="mb-4 text-sm text-[#d1fae5] border-t border-[#ef4444] pt-4 overflow-hidden flex-grow">
            {experience.description}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start mt-auto">
            {experience.technologies.map((tech, index) => (
              <span key={index} className="mr-2 mb-2 rounded bg-[#374151] px-2 py-1 text-sm font-medium text-[#a78bfa] opacity-80">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default Experience;
