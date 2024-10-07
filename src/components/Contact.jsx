import { useRef } from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef(null)
    const textareaRef = useRef(null);

    const handleInput = () => {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        const agreementChecked = e.target.agreement.checked;
        if (!agreementChecked) {
            alert('You must agree to the terms to send a message.');
            return;
        }
        emailjs
            .sendForm('service_i48upti', 'template_rxxjdci', form.current, 'rjk-mDIZYfq4wDiSM')
            .then(
                (response) => {
                    console.log('Message sent successfully!', response.status, response.text);
                    alert('Message sent successfully!'); // Show success alert
                    form.current.reset(); // Reset the form after successful submission
                },
                (error) => {
                    console.error('Error sending message:', error);
                    alert('Failed to send message. Please try again later.'); // Show error alert
                }
            );
    };

    return (
        <div className=" font-programming border-b-8 border-t-8 border-[#8c52ff] max-w-3xl mx-auto px-4 sm:px-8 lg:px-16 pt-20 pb-24 w-full overflow-hidden">
        <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center"
        >
            <h1 className="text-4xl sm:text-4xl lg:text-5xl text-[#8c52ff] mb-2">
            #contact
            </h1>
            <hr className="border-t-2 border-[#7c3aed] w-1/2 mb-16" />
        </motion.h1>

        {/* Responsive Layout Container */}
        <div className="flex flex-col lg:flex-row justify-between mb-8">
            {/* Left Section: Get in Touch Form */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 sm:mb-24"
                >
                <h2 className="text-2xl text-[#da5dff] mb-8 font-bold">GET IN TOUCH</h2>
                    <form ref={form} className="space-y-8 mb-8" onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div>
                    <input
                        type="text"
                        name="name"
                        className="w-full bg-transparent text-[#8c52ff] border-b-2 border-[#d8b4fe] focus:outline-none focus:border-[#8c52ff] transition-colors duration-300 placeholder:text-[#a78bfa]"
                        placeholder="Name"
                        autoComplete="off"
                    />
                    </div>
                    
                    {/* Email Field */}
                    <div>
                    <input
                        type="email"
                        name="email"
                        className="w-full bg-transparent text-[#8c52ff] border-b-2 border-[#d8b4fe] focus:outline-none focus:border-[#8c52ff] transition-colors duration-300 placeholder:text-[#a78bfa]"
                        placeholder="Email"
                        autoComplete='off'
                    />
                    </div>
                    
                    {/* Message Field */}
                    <div>
                    <textarea
                        ref={textareaRef}
                        onInput={handleInput}
                        name="message"
                        className="-mt-3 w-full bg-transparent text-[#8c52ff] border-b-2 border-[#d8b4fe] focus:outline-none focus:border-[#8c52ff] transition-colors duration-300 placeholder:text-[#a78bfa] resize-none h-12" // Set a fixed height (adjust as necessary)
                        placeholder="Message"
                        rows={1}
                        style={{ minHeight: '50px', padding: '0.8rem 0', height: 'auto' }}
                        autoComplete='off'
                    />
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="flex items-start">
                    <input 
                        type="checkbox" 
                        name="agreement"
                        id="agreement" 
                        className="mt-1 mr-2 focus:outline-none focus:ring-0" 
                    />
                    <label htmlFor="agreement" className="text-xs font-thin text-sm text-[#d8b4fe]">
                        {CONTACT.agreement}
                    </label>
                    </div>

                    {/* Send Message Button */}
                    <button
                    type="submit"
                    className="bg-[#ad00ff] text-white py-2 px-6 rounded-3xl hover:bg-[#7c3aed] focus:outline-none"
                    >
                    Send Message
                    </button>
                </form>
                </motion.div>


            {/* Right Section: Contact Information */}
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 lg:pl-12 sm:text-left lg:text-left"
            >
            <h2 className="text-2xl text-[#da5dff] mb-8 font-bold">CONTACT INFORMATION</h2>
            <p className="my-4 text-sm text-[#d8b4fe] flex items-center">
                <IoIosCall className="mr-2" /> {CONTACT.phoneNo}</p>
            <p className="my-4 text-sm text-[#d8b4fe] flex items-center">
                <IoLocation className="mr-2" /> {CONTACT.address}</p>
            <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
                target="_blank" // Optional: Open in a new tab
                rel="noopener noreferrer" // Security best practice
                className="block text-sm text-[#d8b4fe] flex items-center underline hover:text-[#7c3aed]"
            >
                < MdEmail className="mr-2" /> {CONTACT.email}
            </a>
            </motion.div>
        </div>
    </div>
    );
};

export default Contact;
