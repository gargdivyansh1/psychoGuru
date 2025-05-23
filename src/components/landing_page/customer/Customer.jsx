import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Customer() {
  const sliderRef = useRef(null);
  const [tx, setTx] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "An excellent job has been done by the PsychoGuru, from providing therapies to customer support. I used their addiction treatment service which really helped me in getting on the right path and saving my future life.",
      author: "Rahul Sharma",
      role: "Addiction Recovery Patient"
    },
    {
      id: 2,
      text: "Their career guidance resources are unmatched. PsychoGuru made it easier for me to navigate my professional goals with confidence.",
      author: "Priya Patel",
      role: "Psychology Student"
    },
    {
      id: 3,
      text: "Amazing platform! The therapy and insurance integration saved me so much time and hassle.",
      author: "Arjun Mehta",
      role: "Client"
    },
    {
      id: 4,
      text: "Their workshops and collaboration with institutions were the most effective I've experienced. Highly recommended!",
      author: "Dr. Neha Gupta",
      role: "Therapist Partner"
    },
    {
      id: 5,
      text: "The marketplace has unique resources you can't find elsewhere. The mental health courses transformed my practice.",
      author: "Sanjay Kapoor",
      role: "Counselor"
    }
  ];

  const slideForward = () => {
    if (currentSlide < testimonials.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setTx(tx - 100);
    }
  };

  const slideBackward = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setTx(tx + 100);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${tx}%)`;
    }
  }, [tx]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === testimonials.length - 1) {
        setCurrentSlide(0);
        setTx(0);
      } else {
        slideForward();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-2 sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6 md:mb-0"
          >
            Hear From Our <br className="hidden sm:block" />Valued Customers
          </motion.h2>
          
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={slideBackward}
              disabled={currentSlide === 0}
              className={`p-3 rounded-full ${currentSlide === 0 ? 'bg-gray-800 text-gray-600' : 'bg-purple-600 text-white hover:bg-purple-700'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={slideForward}
              disabled={currentSlide === testimonials.length - 1}
              className={`p-3 rounded-full ${currentSlide === testimonials.length - 1 ? 'bg-gray-800 text-gray-600' : 'bg-purple-600 text-white hover:bg-purple-700'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        <div className="relative overflow-hidden h-96 sm:h-80">
          <div 
            ref={sliderRef} 
            className="absolute top-0 left-0 w-full h-full flex transition-transform duration-500 ease-in-out"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: currentSlide === index ? 1 : 0.5, scale: currentSlide === index ? 1 : 0.9 }}
                transition={{ duration: 0.5 }}
                className={`flex-shrink-0 w-full h-full px-4 ${currentSlide === index ? 'z-10' : 'z-0'}`}
              >
                <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col justify-center border ${currentSlide === index ? 'border-purple-500/30' : 'border-gray-700'}`}>
                  <p className="text-lg sm:text-xl text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-medium text-purple-400">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setTx(-index * 100);
              }}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-purple-500 w-6' : 'bg-gray-600'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Customer;