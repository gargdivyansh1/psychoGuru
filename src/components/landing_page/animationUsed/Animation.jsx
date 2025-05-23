import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Animation() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <motion.div 
      className="w-full bg-gradient-to-b from-black to-gray-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* left part */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 space-y-6"
        >
          <motion.h2
            whileHover={{ scale: 1.02 }}
            className="pb-5 pt-2 text-2xl sm:text-3xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
          >
            Getting tough to find the right thing?
          </motion.h2>
          
          <motion.h4
            whileHover={{ scale: 1.01 }}
            className="text-xl sm:text-2xl text-gray-300 font-medium"
          >
            Let's enjoy the animation.
          </motion.h4>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            Sit back and take a deep breath as you're about to dive into the best animation for the website workflow. 
            <br className="hidden sm:block" />
            Don't forget to rate it in the feedback section.
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Watch Full Demo
          </motion.button>
        </motion.div>

        {/* Right Video */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover" 
              muted 
              loop
              playsInline
              poster="https://via.placeholder.com/800x450/1a1a1a/cccccc?text=PsychoGuru+Animation"
              onClick={togglePlayPause}
            >
              <source src="/23325-334689174_tiny.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play/Pause button overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors cursor-pointer"
                onClick={togglePlayPause}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 flex items-center justify-center bg-purple-600/80 hover:bg-purple-500/90 rounded-full backdrop-blur-sm transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Animation;