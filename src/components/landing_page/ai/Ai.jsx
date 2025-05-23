import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function EmotionAISection() {
  return (
    <section className="bg-neutral-950 text-gray-100 py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left - Textual Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Emotion.AI
            </span>{' '}
            – Decode Emotions.
            <br />
            Elevate Mental Wellness.
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6">
            Emotion.AI is a real-time emotion analysis tool that leverages artificial intelligence to understand human emotions from video input. Whether it's therapy enhancement, personal insight, or mood tracking, Emotion.AI provides deep emotional analysis with intuitive visualizations.
          </p>

          <ul className="space-y-3 text-gray-400 text-base list-disc list-inside">
            <li>Live emotion detection via webcam or uploaded videos.</li>
            <li>Dynamic graphs to visualize mood shifts and emotional patterns.</li>
            <li>Session history to track emotional growth over time.</li>
            <li>Insights that aid therapists in personalized care planning.</li>
            <li>AI-driven suggestions based on emotional behavior.</li>
          </ul>

          <div className="mt-8">
            <Link
              to="/emotion-ai"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium text-sm transition transform hover:scale-105"
            >
              Explore Emotion.AI →
            </Link>
          </div>
        </motion.div>

        {/* Right - Stacked Images with Hover Effect */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-full"
        >
          {/* Bottom Image */}
          <motion.img
            src="src/assets/Screenshot 2025-05-18 210118.png"
            alt="EmotionAI Interface 1"
            className="absolute rounded-xl shadow-2xl w-[65%] sm:w-[60%] md:w-[55%] border-2 border-purple-900/30 hover:border-purple-500/50 transition-all duration-300"
            style={{
              bottom: '0%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1
            }}
            whileHover={{ y: -10, scale: 1.02 }}
          />

          {/* Middle Image */}
          <motion.img
            src="src/assets/Screenshot 2025-05-18 210005.png"
            alt="EmotionAI Interface 2"
            className="absolute rounded-xl shadow-2xl w-[55%] sm:w-[70%] md:w-[65%] border-2 border-purple-900/30 hover:border-purple-500/50 transition-all duration-300"
            style={{
              bottom: '45%',
              left: '30%',
              transform: 'translateX(-30%)',
              zIndex: 2
            }}
            whileHover={{ y: -10, scale: 1.02 }}
          />

          {/* Top Image */}
          <motion.img
            src="src/assets/Screenshot 2025-05-18 205943.png"
            alt="EmotionAI Interface 3"
            className="absolute rounded-xl shadow-2xl w-[85%] sm:w-[80%] md:w-[75%] border-2 border-purple-900/30 hover:border-purple-500/50 transition-all duration-300"
            style={{
              bottom: '35%',
              left: '10%',
              transform: 'translateX(-10%)',
              zIndex: 3
            }}
            whileHover={{ y: -10, scale: 1.02 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default EmotionAISection;