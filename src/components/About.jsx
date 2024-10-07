import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-4 pt-20 w-full h-full">
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center">

            <div className="font-programming flex flex-col items-center justify-center text-center px-4 sm:px-8 lg:px-16">
                <h2 className='text-2xl sm:text-2xl lg:text-4xl text-[#FF914D] mb-2'>
                    #about-me
                </h2>
                <hr className="border-t-2 border-[#8C52FF] w-1/2 mb-20 " />
                    <p className='text-md sm:text-base lg:text-2xl text-[#ffc8c5] mb-36'>
                        {ABOUT_TEXT}
                    </p>
                    <p className='italic text-xs sm:text-base lg:text-xl text-[#8C52FF] mb-24'>
                        Want to know more of me? <span className="text-[#FF914D] cursor-pointer">Click here</span>
                    </p>
            </div>
        </motion.div>
    </div>
  )
}

export default About;