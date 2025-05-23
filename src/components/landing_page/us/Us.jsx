import React from 'react';
import { motion } from 'framer-motion';

function Us() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-black pt-5 pb-16 px-4 sm:px-6 lg:px-8 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">We Are</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed"
          >
            <p className="mb-6">
              We are a community-driven platform dedicated to improving mental health and emotional well-being. Our mission is to connect individuals with psychologists and psychiatrists, provide accessible therapies, and foster a supportive environment through innovative tools.
            </p>
            <p>
              From live sessions to mood tracking, playful activities, and educational programs, we aim to make mental health care approachable and personalized for everyone.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Our Mission",
              content: "To democratize mental health care through technology and human connection.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            {
              title: "Our Approach",
              content: "Combining evidence-based therapies with innovative digital solutions.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            },
            {
              title: "Our Community",
              content: "A supportive network of professionals and individuals growing together.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto bg-gray-700 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
              <p className="text-gray-300 text-center">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Us;
