import { FaPython, FaPhp, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from 'react-icons/ri';
import { SiMysql } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})

const Technologies = () => {
  return (
    <div className="container mx-auto px-4 sm:px-4 lg:px-8 pt-20 w-full overflow:hidden">
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100}}
            transition={{ duration: 1.5 }}
            className='font-programming flex flex-col items-center justify-center text-center'>
            <h1 className="text-4xl sm:text-4xl lg:text-5xl text-[#06b6d4] mb-2">
            #technologies
            </h1>
            <hr className="border-t-2 border-[#2563eb] w-1/2 mb-20" />
        </motion.div>
        
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center mx-2 sm:mx-16 lg:mx-64 gap-4"
                >
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-full border-4 border-[#292524] p-2 sm:p-3 lg:p-4 shadow-inner shadow-[#292524]"
                >
                    <FaPython className='text-6xl sm:text-6xl lg:text-7xl text-[#2563eb]' />
                </motion.div>

                <motion.div 
                    variants={iconVariants(3)}
                    initial='initial'
                    animate='animate'
                    className="rounded-full border-4 border-[#292524] p-2 sm:p-3 lg:p-4 shadow-inner shadow-[#292524]"
                >
                    <FaHtml5 className='text-6xl sm:text-6xl lg:text-7xl text-[#f97316]' />
                </motion.div>

                <motion.div 
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-full border-4 border-[#292524] p-2 sm:p-3 lg:p-4 shadow-inner shadow-[#292524]"
                >
                    <FaCss3Alt className='text-6xl sm:text-6xl lg:text-7xl text-blue-400' />
                </motion.div>

                <motion.div 
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-full border-4 border-[#292524] p-2 sm:p-3 lg:p-4 shadow-inner shadow-[#292524]"
                >
                    <RiTailwindCssFill className='text-6xl sm:text-6xl lg:text-7xl text-[#0ea5e9]' />
                </motion.div>

                <motion.div 
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className="rounded-full border-4 border-[#292524] p-2 sm:p-3 lg:p-4 shadow-inner shadow-[#292524]"
                >
                    <RiReactjsLine className='text-6xl sm:text-6xl lg:text-7xl text-[#14b8a6]' />
                </motion.div>

                <motion.div 
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-full border-4 border-[#292524] p-2 sm:p-3 lg:p-4 shadow-inner shadow-[#292524]"
                >
                    <RiJavascriptFill className='text-6xl sm:text-6xl lg:text-7xl text-[#fde047]' />
                </motion.div>

                <motion.div 
                    variants={iconVariants(6)}
                    initial='initial'
                    animate='animate'
                    className="rounded-full border-4 border-[#292524] p-2 sm:p-3 lg:p-4 shadow-inner shadow-[#292524]"
                >
                    <SiMysql className='text-6xl sm:text-6xl lg:text-7xl text-[#f59e0b]' />
                </motion.div>

                <motion.div 
                    variants={iconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className="rounded-full border-4 border-[#292524] p-2 sm:p-3 lg:p-4 shadow-inner shadow-[#292524]"
                >
                    <IoLogoFirebase  className='text-6xl sm:text-6xl lg:text-7xl text-[#ea580c]' />
                </motion.div>

                <motion.div 
                    variants={iconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className="rounded-full border-4 border-[#292524] p-2 sm:p-3 lg:p-4 shadow-inner shadow-[#292524]"
                >
                    <FaPhp className='text-6xl sm:text-6xl lg:text-7xl text-purple-500' />
                </motion.div>

                <motion.div 
                    variants={iconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className="rounded-full border-4 border-[#292524] p-2 sm:p-3 lg:p-4 shadow-inner shadow-[#292524]"
                >
                    <FaJava className='text-6xl sm:text-6xl lg:text-7xl text-[#dc2626]' />
                </motion.div>
            </motion.div>

    </div>
  );
};

export default Technologies;