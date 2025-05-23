import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking anywhere outside
  const closeMenu = () => setIsOpen(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(124, 58, 237, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-shrink-0 flex items-center">
              <span className="pb-1 text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                PsychoGuru
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Clients', 'Resources', 'Services', 'Careers', 'Contact'].map((item, i) => (
                <motion.div
                  key={item}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="px-3 py-2 rounded-md font-medium hover:bg-gray-800 hover:text-purple-300 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Auth Buttons - Desktop */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="ml-4 flex items-center md:ml-6 space-x-2">
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonHoverVariants}
              >
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium rounded-md text-white hover:text-purple-300 transition-colors duration-300"
                >
                  Login
                </Link>
              </motion.div>
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonHoverVariants}
              >
                <Link
                  to="/register"
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-medium rounded-md text-white hover:bg-purple-700 transition-colors duration-300"
                >
                  Register
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden flex items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md bg-neutral-950 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-neutral-950 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >

            <motion.div
              className="px-5 py-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {['Clients', 'Resources', 'Services', 'Careers', 'Contact'].map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="mb-2"
                >
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-4 py-3 rounded-lg text-lg font-medium text-white hover:bg-gray-800 transition-colors"
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="mt-8 pt-6 border-t border-gray-800"
                variants={itemVariants}
              >
                <motion.div
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="mb-4"
                >
                  <Link
                    to="/login"
                    className="block w-full px-6 py-3 text-center rounded-xl text-white bg-gray-800 hover:bg-gray-700 font-medium"
                    onClick={closeMenu}
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    to="/register"
                    className="block w-full px-6 py-3 text-center rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-600 font-medium"
                    onClick={closeMenu}
                  >
                    Register Now
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;