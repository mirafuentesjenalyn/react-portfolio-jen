import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../constants';

const Certificates = () => {
  const imageAnimation = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 0.9, y: -10, transition: { type: "spring", stiffness: 300, damping: 10 } },
  };

  const fadeInAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const [visibleIndex, setVisibleIndex] = useState(null);

  const handleToggleClick = useCallback(
    (index) => {
      setVisibleIndex((current) => (current === index ? null : index));
    },
    []
  );

  return (
    <section className="py-10 bg-[#0f1726] min-h-screen flex flex-col items-center text-neutral-300 w-full">
      <h2 className="text-3xl font-programming mt-20 text-center mb-10">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={index}
            id={`cert-${index}`}
            className="relative bg-[#1f1f1f] rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleToggleClick(index)} // For mobile and desktop click
            whileHover={{ scale: 1.05 }} // For desktop hover effect
          >
            <motion.img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
              initial="initial"
              whileHover="hover"
              variants={imageAnimation}
              onError={(e) => {
                e.target.src = 'path/to/placeholder-image.png';
              }}
            />
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 text-white p-4"
              initial="hidden"
              animate={visibleIndex === index ? "visible" : "hidden"}
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
