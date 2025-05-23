import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Hero() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-black text-white py-32 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="src\assets\req.png"
          alt="Psychology background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex text-center justify-center z-10 max-w-7xl mx-auto"
      >
        <div className="w-full h-full max-w-3xl mx-auto">
          <motion.h1
            variants={item}
            className="w-full text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Your Hub for Psychology
            </span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Empowering Minds, Changing Lives & Mental Wellness.
          </motion.h2>

          <motion.p
            variants={item}
            className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed"
          >
            Embark on a transformative journey where mental wellness meets innovation. Discover a diverse range of therapies, engage with certified professionals, and unlock new possibilities in your psychology career — all under one roof. Whether you're seeking support or striving to make an impact, we're here to guide you every step of the way.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col justify-center sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Link
                to="/therapies"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-sm font-medium transition"
              >
                Explore Therapies
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Link
                to="/"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg text-sm font-medium transition"
              >
                Take a Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
