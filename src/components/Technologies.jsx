import { FaPython, FaPhp, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
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
    <div className="container mx-auto px-4 pt-20 w-full overflow:hidden">
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100}}
            transition={{ duration: 1.5 }}
            className='font-programming flex flex-col items-center justify-center text-center'>
            <h1 className="text-2xl sm:text-2xl lg:text-4xl text-cyan-500 mb-2">
            #technologies
            </h1>
            <hr className="border-t-2 border-cyan-800 w-1/2 mb-20" />
        </motion.div>

            <motion.div
                whileInView={{ opacity: 1, x:0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className='text-7xl text-[#2563eb]' />
                </motion.div>
                
                
                <motion.div 
                    variants={iconVariants(3)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className='text-7xl text-orange-500' />
                </motion.div>
                
                
                <motion.div
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate' 
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className='text-7xl text-blue-400' />
                </motion.div>
                
                <motion.div
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate' 
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill  className='text-7xl text-[#0ea5e9]' />
                </motion.div>

                <motion.div 
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-[#14b8a6]' />
                </motion.div>


                <motion.div
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate' 
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript  className='text-7xl text-[#fde047]' />
                </motion.div>

                <motion.div 
                    variants={iconVariants(6)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className='text-7xl text-[#f59e0b]' />
                </motion.div>

                <motion.div 
                    variants={iconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPhp className='text-7xl text-purple-500' />
                </motion.div>

                <motion.div 
                    variants={iconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className='text-7xl text-[#dc2626]' />
                </motion.div>
            </motion.div>

    </div>
  );
};

export default Technologies;