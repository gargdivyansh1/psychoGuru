import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'How do I book a therapy session or consultation on your platform?',
    answer:
      'To book a session, navigate to the "Book a Session" page, choose your therapist, and select an available slot. Confirmation details will be sent to your email.',
  },
  {
    question: 'What types of therapies and treatments do you offer?',
    answer: (
      <ul className="list-disc list-inside">
        <li>Cognitive Behavioral Therapy (CBT)</li>
        <li>Mindfulness-Based Stress Reduction (MBSR)</li>
        <li>Addiction Recovery Programs</li>
        <li>Family and Couples Therapy</li>
        <li>Grief Counseling</li>
        <li>Child and Adolescent Therapy</li>
      </ul>
    ),
  },
  {
    question: 'How do you ensure the privacy and confidentiality of user data?',
    answer: (
      <ul className="list-disc list-inside">
        <li>End-to-end encryption of all communications.</li>
        <li>HIPAA and GDPR compliance.</li>
        <li>Secure payment gateways.</li>
        <li>Strict provider confidentiality agreements.</li>
      </ul>
    ),
  },
  {
    question: 'How can service providers collaborate or list their services on your platform?',
    answer: (
      <ul className="list-disc list-inside">
        <li>Register via “Join as a Provider”.</li>
        <li>Complete your profile and qualifications.</li>
        <li>Submit verification documents.</li>
        <li>Start listing services upon approval.</li>
      </ul>
    ),
  },
  {
    question: 'Does your platform provide insurance coverage for therapy and other services?',
    answer: (
      <ul className="list-disc list-inside">
        <li>Visit the "Insurance" section to check eligibility.</li>
        <li>Enter your insurance details for a coverage check.</li>
        <li>Contact support for help.</li>
        <li>Affordable self-pay options are available too.</li>
      </ul>
    ),
  },
  {
    question: 'How does your marketplace work, and what products or services are available?',
    answer: (
      <>
        Our marketplace includes:
        <ul className="list-disc list-inside">
          <li>Self-help books & journals</li>
          <li>Meditation and wellness kits</li>
          <li>Online mental health courses</li>
          <li>Therapist tools and resources</li>
        </ul>
      </>
    ),
  },
  {
    question: 'What career opportunities or resources do you provide for students?',
    answer: (
      <ul className="list-disc list-inside">
        <li>Internships with professionals</li>
        <li>Career counseling</li>
        <li>Access to research materials</li>
        <li>Workshops and webinars</li>
      </ul>
    ),
  },
];

const Body = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="pb-3 text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4 leading-tight">
            Questions about PsychoGuru?
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Get instant answers to all your queries in one place.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                expandedIndex === index ? 'ring-1 ring-purple-500/50' : 'hover:bg-neutral-900/50'
              }`}
            >
              <motion.button
                className="w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center bg-neutral-900/80 backdrop-blur-sm"
                onClick={() => toggleExpand(index)}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-medium text-neutral-200 pr-4">{item.question}</h3>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="px-6 overflow-hidden bg-neutral-900/40"
                  >
                    <div className="pb-6 pt-2 text-neutral-300">
                      {typeof item.answer === 'string' ? (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {item.answer}
                        </motion.p>
                      ) : (
                        item.answer
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Body;