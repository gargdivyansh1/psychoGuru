import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Send, Clock,
  MessageSquare, User, HelpCircle, AlertCircle
} from 'lucide-react';

function Contact_test() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name, value) => {
    let error = '';
    if (!value.trim()) {
      error = 'This field is required';
    } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email';
    } else if (name === 'name' && value.length < 2) {
      error = 'Name must be at least 2 characters';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach(key => {
      newErrors[key] = validateField(key, formData[key]);
    });
    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen py-16 px-6 md:px-20 lg:px-32 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="src\components\contact\Screenshot 2025-06-09 092721.png" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-900 pb-2">
            Connect With PsychoGuru
          </h1>
          <p className="mt-4 text-black max-w-3xl mx-auto text-lg">
            We're here to support your mental wellness journey. Reach out for inquiries, support, or to schedule a consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="bg-black/80 transparent p-8 rounded-2xl shadow-lg border border-gray-800"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-semibold text-purple-400">Send Us a Message</h2>
            </div>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-900/50 text-green-300 rounded-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-400 flex items-center gap-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-neutral-800/50 text-white pl-10 pr-4 py-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 ${
                      errors.name ? 'focus:ring-red-500 border-red-500/50' : 'focus:ring-purple-600 border-transparent'
                    } border`}
                    required
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-400 flex items-center gap-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-neutral-800/50 text-white pl-10 pr-4 py-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 ${
                      errors.email ? 'focus:ring-red-500 border-red-500/50' : 'focus:ring-purple-600 border-transparent'
                    } border`}
                    required
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400 flex items-center gap-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <HelpCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-neutral-800/50 text-white pl-10 pr-4 py-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 ${
                      errors.subject ? 'focus:ring-red-500 border-red-500/50' : 'focus:ring-purple-600 border-transparent'
                    } border`}
                    required
                  />
                </div>
                {errors.subject && (
                  <p className="text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 flex items-center gap-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-neutral-800/50 text-white px-4 py-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 ${
                    errors.message ? 'focus:ring-red-500 border-red-500/50' : 'focus:ring-purple-600 border-transparent'
                  } border resize-none`}
                  required
                />
                {errors.message && (
                  <p className="text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full transition text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 justify-center ${
                    isSubmitting 
                      ? 'bg-purple-800 cursor-not-allowed' 
                      : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Contact Information Card */}
          <div className="bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-semibold text-purple-400">Contact Details</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-900/30 rounded-full">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm font-medium">Phone</h3>
                  <div className="flex flex-col">
                    <a href="tel:+919876543210" className="text-white hover:text-purple-400 transition">+91 98765 43210</a>
                    <a href="tel:+911140404040" className="text-white hover:text-purple-400 transition">+91 11404 04040</a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-900/30 rounded-full">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm font-medium">Email</h3>
                  <div className="flex flex-col">
                    <a href="mailto:support@psychoguru.in" className="text-white hover:text-purple-400 transition">support@psychoguru.in</a>
                    <a href="mailto:consultations@psychoguru.in" className="text-white hover:text-purple-400 transition">consultations@psychoguru.in</a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-900/30 rounded-full">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm font-medium">Address</h3>
                  <p className="text-white">
                    MindCare Complex, 3rd Floor<br />
                    Wellness District, New Delhi 110001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-900/30 rounded-full">
                  <Clock className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm font-medium">Working Hours</h3>
                  <p className="text-white">
                    Monday-Friday: 9am - 7pm<br />
                    Saturday: 10am - 4pm<br />
                    Sunday: Emergency only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact Card */}
          <div className="bg-gradient-to-r from-purple-900/80 to-pink-900/80 p-6 rounded-2xl shadow-lg border border-purple-900/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-full">
                <Phone className="w-5 h-5 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Emergency Support</h3>
            </div>
            <p className="text-white mb-4">
              If you or someone you know is in crisis, please contact our 24/7 helpline immediately.
            </p>
            <a 
              href="tel:+9118602662345" 
              className="inline-block bg-white text-purple-900 font-bold px-6 py-3 rounded-md hover:bg-gray-200 transition"
            >
              Call Now: +91 1860 266 2345
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-800">
            <iframe
              title="PsychoGuru Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.456789012345!2d77.2090293150826!3d28.62890198243093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sMindCare%20Complex!5e0!3m2!1sen!2sin!4v1685000000000"
              width="100%"
              height="300"
              loading="lazy"
              className="w-full border-none"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact_test;
