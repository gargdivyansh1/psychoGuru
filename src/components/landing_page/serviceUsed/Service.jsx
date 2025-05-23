import React from 'react';
import { motion } from 'framer-motion';

function Service() {
  const services = [
    {
      title: 'Community Engagement',
      points: [
        'Community chatbox for users',
        'Blogs & research articles',
        'Live events & webinars'
      ],
      color: 'from-gray-800/50 to-gray-700/50',
      size: 'md:col-span-2'
    },
    {
      title: 'Mental Health Services',
      points: [
        'Online therapy sessions',
        'Group therapy programs',
        'Addiction treatment',
        'Emotion detection tech',
        'Yoga & relaxation'
      ],
      color: 'from-slate-800 to-slate-700',
      size: 'md:col-span-1'
    },
    {
      title: 'Education Programs',
      points: [
        'Public therapy education',
        'Corporate mental health',
        'Sports psychology'
      ],
      color: 'from-slate-800 to-slate-700',
      size: 'md:col-span-1'
    },
    {
      title: 'Career Opportunities',
      points: [
        'Internships for students',
        'Jobs for professionals'
      ],
      color: 'from-slate-800 to-slate-700',
      size: 'md:col-span-1'
    },
    {
      title: 'Tech Innovation',
      points: [
        'EEG/FMRI integration',
        'AI therapy recommendations'
      ],
      color: 'from-gray-800/50 to-gray-700/50',
      size: 'md:col-span-1'
    },
    {
      title: 'Financial Services',
      points: [
        'Therapy packages',
        'Loan facilities',
        'Corporate tie-ups'
      ],
      color: 'from-gray-800/50 to-gray-700/50',
      size: 'md:col-span-2'
    },
    {
      title: 'Media & Content',
      points: [
        'Psychology YouTube/Podcasts',
        'Self-improvement books'
      ],
      color: 'from-slate-800 to-slate-700',
      size: 'md:col-span-1'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-neutral-950 to-gray-900 text-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="pt-2 sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6 md:mb-0">
            Our Comprehensive Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions tailored to your mental health, education, and professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5 }}
              className={`${service.size} bg-gradient-to-br ${service.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="h-full flex flex-col">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                  {service.title}
                </h3>
                <ul className="space-y-3 flex-grow">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 mt-1 mr-2 flex-shrink-0 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Service;
