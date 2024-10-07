import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaGitlab } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="font-programming container mt-4 mx-auto px-4 sm:px-8 lg:px-16 flex flex-col items-center">

        {/* Center Section - Company Name and Copyright */}
        <div className="text-center mb-4">
          <h6 className="text-lg text-xl">Jenalyn Mirafuentes</h6>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/mirafuentesjenalyn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/jenalyn-mirafuentes-9136b7285/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://www.facebook.com/jenalyn.mirafuentes.08/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <FaFacebook size={24} />
          </a>

          <a
            href="https://gitlab.com/mirafuentesjenalyn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <FaGitlab size={24} />
          </a>
        </div>
        <p className="text-sm opacity-70 mb-4">© 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
