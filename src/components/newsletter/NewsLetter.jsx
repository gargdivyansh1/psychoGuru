import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaTag, FaCalendarAlt, FaBookmark, FaSearch, FaArrowRight, FaDownload } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const contentSections = [
  {
    type: 'Blogs',
    description: 'Personal stories and professional insights on mental health journeys',
    entries: [
      {
        id: 1,
        title: 'How Therapy Transformed My Life',
        date: 'June 1, 2025',
        excerpt: 'A deeply personal account of my 3-year journey overcoming severe anxiety through cognitive behavioral therapy and mindfulness techniques.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula...',
        tags: ['Healing', 'Therapy', 'Personal Growth'],
        author: 'Dr. Priya Sharma',
        readTime: '8 min read',
        featured: true,
        downloads: [
          { name: 'PDF Version', url: '#' },
          { name: 'Audio Version', url: '#' }
        ]
      },
      {
        id: 2,
        title: 'Breaking the Stigma: Men and Mental Health',
        date: 'May 22, 2025',
        excerpt: 'Exploring why men are less likely to seek help and how we can change this narrative.',
        tags: ['Men\'s Health', 'Stigma'],
        author: 'Dr. Arjun Patel',
        readTime: '6 min read'
      },
      {
        id: 3,
        title: 'Breaking the Stigma: Men and Mental Health',
        date: 'May 22, 2025',
        excerpt: 'Exploring why men are less likely to seek help and how we can change this narrative.',
        tags: ['Men\'s Health', 'Stigma'],
        author: 'Dr. Arjun Patel',
        readTime: '6 min read'
      },
      {
        id: 4,
        title: 'Breaking the Stigma: Men and Mental Health',
        date: 'May 22, 2025',
        excerpt: 'Exploring why men are less likely to seek help and how we can change this narrative.',
        tags: ['Men\'s Health', 'Stigma'],
        author: 'Dr. Arjun Patel',
        readTime: '6 min read'
      },
      {
        id: 5,
        title: 'Breaking the Stigma: Men and Mental Health',
        date: 'May 22, 2025',
        excerpt: 'Exploring why men are less likely to seek help and how we can change this narrative.',
        tags: ['Men\'s Health', 'Stigma'],
        author: 'Dr. Arjun Patel',
        readTime: '6 min read'
      },
      {
        id: 6,
        title: 'Breaking the Stigma: Men and Mental Health',
        date: 'May 22, 2025',
        excerpt: 'Exploring why men are less likely to seek help and how we can change this narrative.',
        tags: ['Men\'s Health', 'Stigma'],
        author: 'Dr. Arjun Patel',
        readTime: '6 min read'
      }
    ],
  },
  {
    type: 'Articles',
    description: 'Expert-written pieces on psychological concepts and therapies',
    entries: [
      {
        id: 7,
        title: 'Understanding Cognitive Behavioral Therapy',
        date: 'May 15, 2025',
        excerpt: 'A comprehensive guide to CBT techniques and their application in treating depression and anxiety disorders.',
        tags: ['CBT', 'Psychology', 'Treatment'],
        author: 'Dr. Neha Gupta',
        readTime: '10 min read',
        featured: true,
        references: 12
      },
      {
        id: 8,
        title: 'The Neuroscience of Meditation',
        date: 'April 28, 2025',
        excerpt: 'How regular meditation practice physically changes your brain structure and function.',
        tags: ['Neuroscience', 'Meditation'],
        author: 'Dr. Rajiv Menon',
        readTime: '7 min read'
      }, {
        id: 9,
        title: 'The Neuroscience of Meditation',
        date: 'April 28, 2025',
        excerpt: 'How regular meditation practice physically changes your brain structure and function.',
        tags: ['Neuroscience', 'Meditation'],
        author: 'Dr. Rajiv Menon',
        readTime: '7 min read'
      }, {
        id: 10,
        title: 'The Neuroscience of Meditation',
        date: 'April 28, 2025',
        excerpt: 'How regular meditation practice physically changes your brain structure and function.',
        tags: ['Neuroscience', 'Meditation'],
        author: 'Dr. Rajiv Menon',
        readTime: '7 min read'
      }, {
        id: 11,
        title: 'The Neuroscience of Meditation',
        date: 'April 28, 2025',
        excerpt: 'How regular meditation practice physically changes your brain structure and function.',
        tags: ['Neuroscience', 'Meditation'],
        author: 'Dr. Rajiv Menon',
        readTime: '7 min read'
      }, {
        id: 12,
        title: 'The Neuroscience of Meditation',
        date: 'April 28, 2025',
        excerpt: 'How regular meditation practice physically changes your brain structure and function.',
        tags: ['Neuroscience', 'Meditation'],
        author: 'Dr. Rajiv Menon',
        readTime: '7 min read'
      }
    ],
  },
  {
    type: 'White Papers',
    description: 'In-depth reports on psychological approaches and methodologies',
    entries: [
      {
        id: 13,
        title: 'Integrated Indian Psychology in Clinical Practice',
        date: 'April 20, 2025',
        excerpt: 'A 40-page analysis of blending ancient Indian wisdom with contemporary therapeutic practices.',
        tags: ['Indian Psychology', 'Clinical', 'Holistic'],
        author: 'Dr. Ananya Iyer',
        readTime: '30 min read',
        downloads: [
          { name: 'Full White Paper', url: '#' },
          { name: 'Executive Summary', url: '#' }
        ]
      }, {
        id: 14,
        title: 'Integrated Indian Psychology in Clinical Practice',
        date: 'April 20, 2025',
        excerpt: 'A 40-page analysis of blending ancient Indian wisdom with contemporary therapeutic practices.',
        tags: ['Indian Psychology', 'Clinical', 'Holistic'],
        author: 'Dr. Ananya Iyer',
        readTime: '30 min read',
        downloads: [
          { name: 'Full White Paper', url: '#' },
          { name: 'Executive Summary', url: '#' }
        ]
      }, {
        id: 15,
        title: 'Integrated Indian Psychology in Clinical Practice',
        date: 'April 20, 2025',
        excerpt: 'A 40-page analysis of blending ancient Indian wisdom with contemporary therapeutic practices.',
        tags: ['Indian Psychology', 'Clinical', 'Holistic'],
        author: 'Dr. Ananya Iyer',
        readTime: '30 min read',
        downloads: [
          { name: 'Full White Paper', url: '#' },
          { name: 'Executive Summary', url: '#' }
        ]
      }, {
        id: 16,
        title: 'Integrated Indian Psychology in Clinical Practice',
        date: 'April 20, 2025',
        excerpt: 'A 40-page analysis of blending ancient Indian wisdom with contemporary therapeutic practices.',
        tags: ['Indian Psychology', 'Clinical', 'Holistic'],
        author: 'Dr. Ananya Iyer',
        readTime: '30 min read',
        downloads: [
          { name: 'Full White Paper', url: '#' },
          { name: 'Executive Summary', url: '#' }
        ]
      }, {
        id: 17,
        title: 'Integrated Indian Psychology in Clinical Practice',
        date: 'April 20, 2025',
        excerpt: 'A 40-page analysis of blending ancient Indian wisdom with contemporary therapeutic practices.',
        tags: ['Indian Psychology', 'Clinical', 'Holistic'],
        author: 'Dr. Ananya Iyer',
        readTime: '30 min read',
        downloads: [
          { name: 'Full White Paper', url: '#' },
          { name: 'Executive Summary', url: '#' }
        ]
      }, {
        id: 18,
        title: 'Integrated Indian Psychology in Clinical Practice',
        date: 'April 20, 2025',
        excerpt: 'A 40-page analysis of blending ancient Indian wisdom with contemporary therapeutic practices.',
        tags: ['Indian Psychology', 'Clinical', 'Holistic'],
        author: 'Dr. Ananya Iyer',
        readTime: '30 min read',
        downloads: [
          { name: 'Full White Paper', url: '#' },
          { name: 'Executive Summary', url: '#' }
        ]
      },
    ],
  },
  {
    type: 'Research Papers',
    description: 'Peer-reviewed academic research and findings',
    entries: [
      {
        id: 19,
        title: 'AI and Mental Health Monitoring: A 2025 Review',
        date: 'March 11, 2025',
        excerpt: 'Meta-analysis of 127 studies on machine learning applications in mood disorder diagnosis.',
        tags: ['AI', 'Research', 'Technology'],
        author: 'Dr. Sanjay Verma',
        readTime: '15 min read',
        journal: 'Journal of Psychological Technology',
        citations: 42
      },
      {
        id: 20,
        title: 'Effects of Social Media on Adolescent Self-Esteem',
        date: 'February 18, 2025',
        excerpt: 'Longitudinal study tracking 500 teenagers over 3 years with surprising results.',
        tags: ['Social Media', 'Adolescence'],
        author: 'Dr. Meera Krishnan',
        readTime: '12 min read'
      },
    ],
  },
  {
    type: 'Case Studies',
    description: 'Real-world examples of therapeutic interventions and outcomes',
    entries: [
      {
        id: 21,
        title: 'Youth Depression Recovery Program Results',
        date: 'February 10, 2025',
        excerpt: 'Analysis of our school outreach program showing 78% improvement in symptoms after 6 months.',
        tags: ['Youth', 'Recovery', 'Intervention'],
        author: 'Dr. Vikram Joshi',
        readTime: '9 min read',
        participants: 120,
        successRate: '78%'
      },
      {
        id: 22,
        title: 'Trauma-Informed Care in Urban Communities',
        date: 'January 5, 2025',
        excerpt: 'How adapting therapy approaches increased engagement by 65% in high-stress neighborhoods.',
        tags: ['Trauma', 'Community Health'],
        author: 'Dr. Nandini Rao',
        readTime: '11 min read'
      },
      {
        id: 23,
        title: 'Trauma-Informed Care in Urban Communities',
        date: 'January 5, 2025',
        excerpt: 'How adapting therapy approaches increased engagement by 65% in high-stress neighborhoods.',
        tags: ['Trauma', 'Community Health'],
        author: 'Dr. Nandini Rao',
        readTime: '11 min read'
      },
      {
        id: 24,
        title: 'Trauma-Informed Care in Urban Communities',
        date: 'January 5, 2025',
        excerpt: 'How adapting therapy approaches increased engagement by 65% in high-stress neighborhoods.',
        tags: ['Trauma', 'Community Health'],
        author: 'Dr. Nandini Rao',
        readTime: '11 min read'
      },
      {
        id: 25,
        title: 'Trauma-Informed Care in Urban Communities',
        date: 'January 5, 2025',
        excerpt: 'How adapting therapy approaches increased engagement by 65% in high-stress neighborhoods.',
        tags: ['Trauma', 'Community Health'],
        author: 'Dr. Nandini Rao',
        readTime: '11 min read'
      },
      {
        id: 26,
        title: 'Trauma-Informed Care in Urban Communities',
        date: 'January 5, 2025',
        excerpt: 'How adapting therapy approaches increased engagement by 65% in high-stress neighborhoods.',
        tags: ['Trauma', 'Community Health'],
        author: 'Dr. Nandini Rao',
        readTime: '11 min read'
      },
      {
        id: 27,
        title: 'Trauma-Informed Care in Urban Communities',
        date: 'January 5, 2025',
        excerpt: 'How adapting therapy approaches increased engagement by 65% in high-stress neighborhoods.',
        tags: ['Trauma', 'Community Health'],
        author: 'Dr. Nandini Rao',
        readTime: '11 min read'
      }
    ],
  },
];

const NewsLetter = () => {

  const [selectedType, setSelectedType] = useState('All');
  const [amount, setAmount] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const filteredSections = selectedType === 'All'
    ? contentSections
    : contentSections.filter(s => s.type === selectedType);

  const searchedContent = searchQuery
    ? filteredSections.map(section => ({
      ...section,
      entries: section.entries.filter(entry =>
        entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    })).filter(section => section.entries.length > 0)
    : filteredSections;

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const closeModal = () => {
    setSelectedEntry(null);
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 py-10 md:px-16 lg:px-24">

      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-neutral-700 transition"
      >
        ← Back
      </button>

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-900 pb-3">
          PsychoGuru Knowledge Hub
        </h1>
        <p className="mt-4 text-gray-300 max-w-1xl mx-auto text-lg">
          Access our curated collection of psychological resources - from personal growth blogs to cutting-edge research papers.
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        className="max-w-2xl mx-auto mb-12 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search articles, tags, authors..."
            className="w-full bg-neutral-800 border border-gray-700 rounded-full py-3 pl-12 pr-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
            >
              <MdClose />
            </button>
          )}
        </div>
      </motion.div>

      {/* Section Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {['All', ...contentSections.map(s => s.type)].map(type => (
          <motion.button
            key={type}
            onClick={() => {
              setSelectedType(type);
              setAmount(3)
            }
            }
            className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all flex items-center ${selectedType === type
              ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-900/30'
              : 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBookmark className="inline mr-2 mb-0.5" />
            {type}
          </motion.button>
        ))}
      </div>

      {/* Content Display */}
      <div className="space-y-16">
        {searchedContent.length > 0 ? (
          searchedContent.map((section, i) => (
            <motion.section
              key={section.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-20"
              id={section.type.toLowerCase().replace(' ', '-')}
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-purple-400">{section.type}</h2>
                  <p className="text-gray-500 mt-1">{section.description}</p>
                </div>
                <span className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  {section.entries.length}
                  {/* {section.entries.length === 1 ? 'entry' : 'entries'} */}
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.entries.slice(0, amount).map(entry => (
                  <motion.div
                    key={entry.id}
                    className="bg-neutral-950 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-600 transition cursor-pointer group"
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedEntry(entry)}
                  >
                    {entry.featured && (
                      <span className="bg-pink-600 text-white text-xs px-2 py-1 rounded-full absolute -top-2 -right-2">
                        Featured
                      </span>
                    )}
                    <h3 className="text-xl font-semibold mb-2 text-pink-400 group-hover:text-purple-300 transition">
                      {entry.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <FaCalendarAlt className="mr-2" />
                      <span>{entry.date}</span>
                      <span className="mx-2">•</span>
                      <span>{entry.readTime}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{entry.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map(tag => (
                          <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-purple-400 hover:text-purple-300 transition">
                        <FaArrowRight />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 flex justify-center items-center mb-6">
                <button
                    className="ml-5 text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                    onClick={(e) => {
                      setSelectedType(section.type);
                      setAmount(section.entries.length)
                    }
                    }
                  >
                    Display All
                  </button>
              </div>
            </motion.section>
          ))
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-2xl text-gray-400 mb-4">No results found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Try a different search term or browse all categories
            </p>
          </motion.div>
        )}
      </div>

      {/* Subscription Section */}
      <motion.section
        className="bg-gradient-to-r from-purple-900/80 to-pink-900/80 rounded-2xl p-10 max-w-4xl mx-auto mt-20 text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Join Our Knowledge Community</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed">
            Get monthly curated resources, exclusive content, and early access to our research findings delivered straight to your inbox.
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-900/50 text-green-200 inline-block px-6 py-4 rounded-lg"
            >
              <FaEnvelope className="inline mr-2 text-xl" />
              Thank you for subscribing! Check your email for confirmation.
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Your professional email"
                className="px-4 py-3 w-full rounded-lg bg-white/90 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-black text-white font-medium px-6 py-3 rounded-lg hover:bg-neutral-900 transition min-w-[160px] flex items-center justify-center"
              >
                {isLoading ? (
                  'Sending...'
                ) : (
                  <>
                    <FaEnvelope className="inline mr-2 mb-0.5" />
                    Subscribe
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-gray-400 text-xs mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </motion.section>

      {/* Entry Detail Modal */}
      <AnimatePresence>
        {selectedEntry && (
          <motion.div
            className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-neutral-950 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-white text-2xl"
              >
                <MdClose />
              </button>

              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs">
                        {contentSections.find(s => s.entries.some(e => e.id === selectedEntry.id))?.type}
                      </span>
                      <span className="mx-3">•</span>
                      <FaCalendarAlt className="mr-1" />
                      <span>{selectedEntry.date}</span>
                      <span className="mx-3">•</span>
                      <span>{selectedEntry.readTime}</span>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4">{selectedEntry.title}</h2>

                    {selectedEntry.author && (
                      <div className="flex items-center mb-6">
                        <div className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center text-white mr-3">
                          {selectedEntry.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-white font-medium">{selectedEntry.author}</p>
                          <p className="text-gray-500 text-sm">PsychoGuru Contributor</p>
                        </div>
                      </div>
                    )}

                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 text-lg mb-6">{selectedEntry.excerpt}</p>
                      <p className="text-gray-300 mb-6">{selectedEntry.content || "This is a detailed preview of the content. In a real implementation, this would be the full article text, properly formatted with headings, paragraphs, and other rich content."}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedEntry.tags.map(tag => (
                        <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:w-1/3">
                    <div className="bg-neutral-900 p-6 rounded-xl sticky top-4">
                      <h4 className="font-bold text-white mb-4">Details</h4>

                      {selectedEntry.journal && (
                        <div className="mb-4">
                          <p className="text-gray-400 text-sm">Published in</p>
                          <p className="text-white">{selectedEntry.journal}</p>
                        </div>
                      )}

                      {selectedEntry.citations && (
                        <div className="mb-4">
                          <p className="text-gray-400 text-sm">Citations</p>
                          <p className="text-white">{selectedEntry.citations}</p>
                        </div>
                      )}

                      {selectedEntry.participants && (
                        <div className="mb-4">
                          <p className="text-gray-400 text-sm">Study Participants</p>
                          <p className="text-white">{selectedEntry.participants}</p>
                        </div>
                      )}

                      {selectedEntry.successRate && (
                        <div className="mb-4">
                          <p className="text-gray-400 text-sm">Success Rate</p>
                          <p className="text-white">{selectedEntry.successRate}</p>
                        </div>
                      )}

                      {selectedEntry.downloads && (
                        <div className="mt-6">
                          <h5 className="font-bold text-white mb-3">Downloads</h5>
                          <div className="space-y-2">
                            {selectedEntry.downloads.map((download, i) => (
                              <a
                                key={i}
                                href={download.url}
                                className="flex items-center justify-between bg-neutral-700 hover:bg-neutral-600 px-4 py-2 rounded-lg transition"
                              >
                                <span>{download.name}</span>
                                <FaDownload className="text-gray-400" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsLetter;