import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion';

const collaborators = [
    { name: "MindHeal", logo: "🧠" },
    { name: "TranquilCare", logo: "🌿" },
    { name: "NeuroPath", logo: "⚡" },
    { name: "Serenity", logo: "☁️" },
    { name: "PsycheHub", logo: "🔮" },
    { name: "TheraLink", logo: "🔗" },
    { name: "CogniWell", logo: "💡" },
    { name: "Emotiona", logo: "❤️" },
    { name: "MindSpace", logo: "🚀" },
    { name: "InnerPeace", logo: "🕊️" }
];

function Footer() {
    return (
        <div className='container_footer'>
            <div className="w-full bg-gray-900 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="pt-2 text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-12"
                >
                    Meet Our Collaborators
                </motion.h2>

                <div className="relative max-w-7xl mx-auto">
                    <div className="relative h-40 overflow-hidden">
                        <div
                            className="absolute flex items-center space-x-8 whitespace-nowrap"
                            style={{
                                animation: 'scroll 30s linear infinite',
                                width: 'max-content'
                            }}
                        >
                            {[...collaborators, ...collaborators].map((company, index) => (
                                <motion.div
                                    key={`first-${index}`}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex flex-col items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 w-32 h-32 border border-gray-700 hover:border-purple-500 transition-all"
                                >
                                    <span className="text-4xl mb-2">{company.logo}</span>
                                    <span className="text-lg font-medium text-gray-300">{company.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient fades */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

                    {/* Animation keyframes inline */}
                    <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
                </div>
            </div>

            {/* <div className="zero_bottom_footer">
                <img src="src\components\footer\Screenshot 2025-01-30 000002.png" alt="" className="footer_image" />
            </div> */}

            <div className="text-gray-300">
                {/* First Bottom Footer - Contact Form Section */}
                <div className="bg-gradient-to-b from-gray-900 to-neutral-950 max-w-8xl mx-auto px-6 py-16 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto border rounded-xl p-8">
                        {/* Left Content */}
                        <div className="flex flex-col justify-center space-y-6">
                            <h2 className="text-3xl font-bold text-white">We need to hear from you..</h2>
                            <p className="text-lg text-gray-400">
                                Tell us your stories by filling this form and we will definitely show interest to your problem.
                                <br /><br />
                                Whether you are a health organization looking to expand your telepsychiatry services or a prospective clinician who wants to join the team, we'd love to talk!
                            </p>
                        </div>

                        {/* Right Form */}
                        <div className="bg-gray-900 rounded-xl p-8 shadow-2xl border border-gray-800">
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* First Column */}
                                    <div className="space-y-4">
                                        <input
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                                            type="text"
                                            placeholder="First Name"
                                            required
                                        />
                                        <input
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                        <input
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                                            type="email"
                                            placeholder="Email"
                                            required
                                        />
                                        <input
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                                            type="tel"
                                            placeholder="Telephone"
                                            required
                                        />
                                    </div>

                                    {/* Second Column */}
                                    <div className="space-y-4">
                                        <input
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                                            type="text"
                                            placeholder="Company Name"
                                        />
                                        <input
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                                            type="text"
                                            placeholder="Comments"
                                        />
                                        <input
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                                            type="text"
                                            placeholder="How Do You Know Us"
                                        />
                                        <input
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                                            type="text"
                                            placeholder="New or existing user"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <button
                                        type="submit"
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-purple-500/20"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Second Bottom Footer - Links Section */}
                <div className="bg-black border-t border-gray-800">
                    <div className="max-w-7xl mx-auto px-6 py-12 md:px-8 lg:px-12">
                        {/* Upper Footer */}
                        <div className="p-2 flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                            <div className="p-2 text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">PsychoGuru</div>
                            <div className="flex flex-col sm:flex-row gap-4 cursor-pointer">
                                <Link
                                    to="/playstore"
                                    className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg transition border border-gray-800"
                                >
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.3,11.6l3.6,3.3l-3.6,3.3C2.8,18,2.5,17.5,2.5,17v-6C2.5,10.5,2.8,10,3.3,11.6z M20.2,12.1l-2.9-1.6l-3.3,3l3.3,3 l2.9-1.6c0.8-0.5,0.8-1.5,0-2L20.2,12.1z M13.3,12.5l-3.8-3.8L4.9,11c-0.6,0.3-1,0.9-1,1.5s0.4,1.2,1,1.5l4.6,2.3L13.3,12.5z"/>
                                    </svg>
                                    <span>Play Store</span>
                                </Link>
                                <Link
                                    to="/applestore"
                                    className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg transition border border-gray-800"
                                >
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <span>Apple Store</span>
                                </Link>
                            </div>
                        </div>

                        {/* Bottom Footer Links */}
                        <div className="cursor-pointer grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-12">
                            {/* Methodology Column */}
                            <div className="space-y-3">
                                <Link to="/NavBar" className="block text-white font-semibold mb-2">Methodology</Link>
                                {['Care Options', 'For Health Plans', 'For Members', 'For Providers', 'Our Network'].map((item) => (
                                    <Link key={item} to="/NavBar" className="block text-gray-400 hover:text-white transition">{item}</Link>
                                ))}
                            </div>

                            {/* Why Us Column */}
                            <div className="space-y-3">
                                <Link to="/NavBar" className="block text-white font-semibold mb-2">Why Us</Link>
                                {['Our Impact', 'Our Customers', 'Our Care Network', 'AI Coaching', 'Partnerships'].map((item) => (
                                    <Link key={item} to={item === 'AI Coaching' ? '/coaching' : '/NavBar'} className="block text-gray-400 hover:text-white transition">{item}</Link>
                                ))}
                            </div>

                            {/* Our Solutions Column */}
                            <div className="space-y-3">
                                <Link to="/NavBar" className="block text-white font-semibold mb-2">Our Solutions</Link>
                                {['PsychoGuru', 'Hospitals & Health Systems', 'Help Center', 'Therapies', 'Overview'].map((item) => (
                                    <Link key={item} to="/NavBar" className="block text-gray-400 hover:text-white transition">{item}</Link>
                                ))}
                            </div>

                            {/* Who We Are Column */}
                            <div className="space-y-3">
                                <Link to="/NavBar" className="block text-white font-semibold mb-2">Who We Are</Link>
                                {['Workplace Wellness', 'Case Studies', 'Trust And Security'].map((item) => (
                                    <Link key={item} to="/NavBar" className="block text-gray-400 hover:text-white transition">{item}</Link>
                                ))}
                            </div>

                            {/* Resources Column */}
                            <div className="space-y-3">
                                <Link to="/NavBar" className="block text-white font-semibold mb-2">Resources</Link>
                                {['Methodology', 'What we do?', 'Feedbacks', 'Career', 'Clinical Research'].map((item) => (
                                    <Link key={item} to="/NavBar" className="block text-gray-400 hover:text-white transition">{item}</Link>
                                ))}
                            </div>

                            {/* Newsletter Column */}
                            <div className="space-y-3">
                                <Link to="/news" className="block text-white font-semibold mb-2">NewsLetter</Link>
                                {['Blogs', 'Research Paper', 'White Papers', 'Articles', 'Case Studies'].map((item) => (
                                    <Link key={item} to="/NavBar" className="block text-gray-400 hover:text-white transition">{item}</Link>
                                ))}
                            </div>
                        </div>

                        {/* Last Footer - Copyright and Social */}
                        <div className="border-t border-gray-800 pt-8">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="flex gap-4">
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="text-gray-400 text-sm text-center md:text-right">
                                    ©2025 PsychoGuru, Inc. The professional mental health services made available through Psycho Guru, Inc. are provided by licensed clinicians affiliated with independently owned and operated professional practices. PsychoGuru, Inc. provides administrative, technology, and other related services to the professional practices it supports.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer