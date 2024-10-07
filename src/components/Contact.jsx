import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="font-programming container mx-auto px-4 sm:px-8 lg:px-16 pt-20 w-full overflow-hidden">

        <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-center justify-center text-center'>
            <h1 className="text-4xl sm:text-4xl lg:text-5xl text-[#a78bfa] mb-2">
                #contact
            </h1>
            <hr className="border-t-2 border-[#7c3aed] w-1/2 mb-24" />
        </motion.h1>

        <div
            className="text-center tracking-tighter">
            <motion.p 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="my-4">{CONTACT.address}
            </motion.p>

            <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="my-4">{CONTACT.phoneNo}
            </motion.p>
            
            <a href='#'className="border-b">{CONTACT.email}</a>
        </div>

    </div>
  );
};

export default Contact;