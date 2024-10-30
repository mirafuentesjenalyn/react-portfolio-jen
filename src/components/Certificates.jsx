import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../constants';

const Certificates = () => {
  // Animation for images (zoom out on hover)
  const imageAnimation = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 0.9, y: -10, transition: { type: "spring", stiffness: 300, damping: 10 } },
  };

  // Fade-in animation for the title and description
  const fadeInAnimation = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly down
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Fully visible and in place
  };

  return (
    <section className="py-10 bg-[#0f1726] min-h-screen flex flex-col items-center text-neutral-300 w-full">
      <h2 className="text-3xl font-programming mt-20 text-center mb-10">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={index}
            id={`cert-${index}`}
            className="relative bg-[#1f1f1f] rounded-lg overflow-hidden shadow-lg cursor-pointer" // Add cursor-pointer class
            whileHover={{ scale: 1.05 }} // Optional: Slightly scale up the entire card on hover
          >
            <motion.img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
              initial="initial"
              whileHover="hover"
              variants={imageAnimation}
              onError={(e) => {
                e.target.src = 'path/to/placeholder-image.png'; // Adjust the placeholder path as necessary
              }}
            />
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-95 text-white p-4"
              initial="hidden"
              whileHover="visible"
              variants={fadeInAnimation}
            >
              <motion.h3
                className="text-xl font-bold font-programming"
                variants={fadeInAnimation}
              >
                {cert.title}
              </motion.h3>
              <motion.p
                className="mt-2 text-xs font-programming"
                variants={fadeInAnimation}
              >
                {cert.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
