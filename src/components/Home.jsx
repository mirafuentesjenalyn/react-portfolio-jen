import React, { useState, useEffect } from 'react';
import { HOME_CONTENT } from "../constants";
import profilePic from '../assets/pi.png';
import { motion } from "framer-motion";


const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

// const TypingEffect = ({ text, speed }) => {
//     const [displayedText, setDisplayedText] = useState('');

//     useEffect(() => {
//         let index = 0;
//         const intervalId = setInterval(() => {
//             if (index < text.length) {
//                 setDisplayedText((prev) => prev + text[index]);
//                 index++;
//             } else {
//                 clearInterval(intervalId);
//             }
//         }, speed);

//         return () => clearInterval(intervalId);
//     }, [text, speed]);

//     return (
//         <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//         >
//             {displayedText}
//         </motion.span>
//     );
// }


const Home = () => {
  return (
    <div className="container mx-auto max-w-[90%] pt-48 w-full overflow-hidden">
        <div className="font-programming flex flex-wrap justify-center">
            <motion.img 
                className="block mx-auto rounded-full mb-5 md:hidden shadow-shadblue"
                initial={{ y: -100, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{ duration: 1, delay: 0}}
                src={profilePic}
                width={300} 
                height={300} 
                alt='Jenalyn Mirafuentes' 
            />

            <div className="w-full lg:w-1/2 mt-8 flex flex-col mb-20 lg:flex-row items-center lg:items-start">
                <div className="flex flex-col items-center lg:items-start lg:pl-10">
                    <div className="p-4 sm:p-6 lg:p-0">
                        <motion.p 
                            variants={container(0)}
                            initial="hidden"
                            animate='visible'
                            className="text-xs sm:text-xs lg:text-2xl text-[#408AFF] mb-5"
                        >
                            Hello
                            {/* <TypingEffect text='Hello' speed={100}/> */}
                            <span className="text-[#FFDE59]"> there</span>
                            <span className="text-[#FFB283]">()</span>
                            <span className="text-[#FF914D]"> &#123;</span>
                        </motion.p>
                        
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate='visible'
                            className="text-xs sm:text-xs lg:text-2xl text-[#8C52FF] ml-8 mb-5"
                        >
                            I_am &#40;
                        </motion.h1>

                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate='visible'
                            className="mt-5 text-3xs sm:text-3xl lg:text-4xl text-[#1BBBFF] mb-2 sm:mb-5 lg:mb-3 ml-20"
                        >
                            {/* // className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"> */}
                            Jenalyn Mirafuentes
                        </motion.span>


                        <motion.p 
                            variants={container(0)}
                            initial="hidden"
                            animate='visible'                    
                            className="text-[#85A58E] text-xs sm:text-xs lg:text-xl my-5 sm:mb-3 ml-20 lg:mb-5"
                        >
                            {HOME_CONTENT}
                        </motion.p>
                        
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate='visible'
                            className="text-xs sm:text-xs lg:text-xl text-[#8C52FF] ml-8 mb-5">&#41;
                            <span 
                                className="text-xs sm:text-xs lg:text-xl text-xl text-white">;
                            </span>
                        </motion.h1>

                        <motion.h1 
                            variants={container(0)}
                            initial="hidden"
                            animate='visible'
                            className="text-xs sm:text-xs lg:text-xl text-[#FF914D] mb-5">&#125;
                            <span 
                                className="text-xs sm:text-xs lg:text-xl text-xl text-white">;
                            </span>
                        </motion.h1>

                    </div>

                    <div className="font-programming mt-5 flex flex-wrap gap-4 mb-8">
                        <motion.button
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, transition: { type: "tween", duration: 1, delay: 1} }}
                            whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 10, duration: 0.2 } }}
                            whileTap={{ scale: 0.8, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                            className="py-3 px-8 text-sm sm:text-base font-bold w-full sm:w-auto bg-[#0a192f] text-[#64ffda] hover:bg-[#1BBBFF] hover:text-[#0a192f] border border-[#64ffda] rounded"
                            // className="py-3 px-8 text-sm sm:text-base font-bold w-full sm:w-auto bg-[#1BBBFF] text-[#0a192f] hover:bg-[#0a192f] hover:text-[#64ffda] border border-[#64ffda] rounded"
                            onClick={() => window.open('https://drive.google.com/file/d/12r9fyZrtpljdVfE3NIScBBgJjAW7cLEy/view?usp=sharing', '_blank')}
                        >
                            Resume
                        </motion.button>
                        
                        <motion.button
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1,transition: { type: "tween", duration: 1, delay: 1} }}
                            whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 10} }}
                            whileTap={{ scale: 0.8, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                            className="font-programming py-3 px-8 text-sm sm:text-base font-bold w-full sm:w-auto bg-[#0a192f] text-[#FF914D] hover:bg-[#FF914D] hover:text-[#0a192f] border border-[#FF914D] rounded"
                            // className="py-3 px-8 text-sm sm:text-base font-bold w-full sm:w-auto bg-[#FF914D] text-[#0a192f] hover:bg-[#0a192f] hover:text-[#FF914D] border border-[#FF914D] rounded"
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Connect with me
                        </motion.button>                    
                    </div>

                </div>
            </div>
            <motion.img
                initial={{ x: 100, opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 1, delay: 0.5}}
                src={profilePic}
                alt='Jenalyn Mirafuentes' 
                className="w-80 h-80 hidden rounded-full mt-12 mb-20 ml-40 float right lg:block max-w-xl shadow-shadblue"
            /> 
        </div>
    </div>
  );
};

export default Home;