import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Therapies() {
  const [activeTab, setActiveTab] = useState('western');
  const [selectedTherapy, setSelectedTherapy] = useState(null);

  const westernTherapies = [
    {
      id: 1,
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Restructures negative thought patterns to change behaviors and emotions.",
      detailedDescription: "CBT is a highly effective treatment for anxiety, depression, and trauma. Through structured sessions, patients learn to identify distorted thinking patterns and develop healthier coping mechanisms. Techniques include thought records, behavioral experiments, and exposure therapy.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      duration: "12-20 sessions",
      bestFor: ["Depression", "Anxiety", "OCD", "PTSD"],
      category: "Psychotherapy"
    },
    {
      id: 2,
      title: "Dialectical Behavior Therapy (DBT)",
      description: "Teaches emotional regulation through mindfulness and distress tolerance.",
      detailedDescription: "DBT combines cognitive-behavioral techniques with mindfulness practices. It focuses on teaching skills in four key areas: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. Originally developed for borderline personality disorder, it's now used for various conditions involving emotional dysregulation.",
      image: "https://images.unsplash.com/photo-1593810450967-f9c42742e326",
      duration: "6-12 months",
      bestFor: ["Borderline PD", "Self-harm", "Eating disorders"],
      category: "Psychotherapy"
    },
    // Add 10 more Western therapies...
    {
      id: 3,
      title: "EMDR",
      description: "Processes trauma through bilateral stimulation.",
      detailedDescription: "EMDR (Eye Movement Desensitization and Reprocessing) is a specialized therapy for trauma. It involves the patient recalling distressing memories while receiving bilateral stimulation, typically through guided eye movements. This process helps reprocess traumatic memories, reducing their emotional charge and allowing for healthier coping.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
      duration: "8-12 sessions",
      bestFor: ["PTSD", "Trauma"],
      category: "Trauma Therapy"
    },
    {
      id: 4,
      title: "Acceptance and Commitment Therapy (ACT)",
      description: "Uses mindfulness to accept difficult thoughts and feelings.",
      detailedDescription: "ACT focuses on accepting thoughts and feelings rather than fighting them. It encourages individuals to commit to actions aligned with their values, even in the presence of discomfort. Techniques include mindfulness exercises, cognitive defusion, and values clarification.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      duration: "10-16 sessions",
      bestFor: ["Chronic pain", "Anxiety"],
      category: "Mindfulness-Based"
    },
    {
      id: 5,
      title: "Neurofeedback",
      description: "Trains brainwave patterns for optimal functioning.",
      detailedDescription: "Neurofeedback is a biofeedback technique that trains individuals to self-regulate brain function. By providing real-time feedback on brainwave activity, patients learn to enhance desirable brain patterns and reduce unwanted ones. It's often used for ADHD, anxiety, and epilepsy.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      duration: "20-40 sessions",
      bestFor: ["ADHD", "Epilepsy"],
      category: "Biofeedback"
    },
    {
      id: 6,
      title: "Psychodynamic Therapy",
      description: "Explores unconscious patterns from childhood.",
      detailedDescription: "Psychodynamic therapy delves into the unconscious mind and how past experiences shape current behavior. It emphasizes the therapeutic relationship as a tool for understanding and resolving internal conflicts. Techniques include free association, dream analysis, and exploring transference.",
      image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968",
      duration: "1+ years",
      bestFor: ["Personality disorders"],
      category: "Psychotherapy"
    },
    {
      id: 7,
      title: "Art Therapy",
      description: "Uses creative expression for emotional healing.",
      detailedDescription: "Art therapy combines psychotherapy with creative expression. It allows individuals to explore emotions, reduce anxiety, and improve self-esteem through various art forms. The process can involve drawing, painting, sculpting, or other artistic mediums, providing a non-verbal outlet for feelings.",
      image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968",
      duration: "Varies",
      bestFor: ["Trauma", "Children"],
      category: "Expressive"
    },
    {
      id: 8,
      title: "Family Systems Therapy",
      description: "Addresses family dynamics and relationships.",
      detailedDescription: "Family Systems Therapy views the family as an emotional unit. It explores how family dynamics influence individual behavior and mental health. Techniques include genograms, role-playing, and communication exercises to improve relationships and resolve conflicts within the family system.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      duration: "12-16 sessions",
      bestFor: ["Family conflict"],
      category: "Family Therapy"
    },
    {
      id: 9,
      title: "Internal Family Systems (IFS)",
      description: "Works with internal sub-personalities.",
      detailedDescription: "IFS is a therapeutic model that views the mind as made up of different 'parts' or sub-personalities. Each part has its own perspective, memories, and roles. The goal of IFS is to help individuals understand and harmonize these parts, leading to greater self-awareness and emotional healing.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      duration: "16-24 sessions",
      bestFor: ["Complex trauma"],
      category: "Psychotherapy"
    },
    {
      id: 10,
      title: "Transcranial Magnetic Stimulation (TMS)",
      description: "Non-invasive brain stimulation for depression.",
      detailedDescription: "TMS is a non-invasive procedure that uses magnetic fields to stimulate nerve cells in the brain. It's primarily used for treatment-resistant depression. During the procedure, a magnetic coil is placed on the scalp, delivering short pulses of magnetic energy to targeted areas of the brain, promoting neuroplasticity and mood regulation.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      duration: "36 sessions",
      bestFor: ["Treatment-resistant depression"],
      category: "Neuromodulation"
    },
    {
      id: 11,
      title: "Exposure Therapy",
      description: "Gradual exposure to feared stimuli.",
      detailedDescription: "Exposure therapy is a behavioral treatment for anxiety disorders. It involves gradual exposure to feared situations or stimuli in a controlled environment. The goal is to reduce fear and avoidance behaviors through desensitization. Techniques include in vivo exposure, imaginal exposure, and virtual reality exposure.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
      duration: "8-12 sessions",
      bestFor: ["Phobias", "PTSD"],
      category: "Behavioral"
    },
    {
      id: 12,
      title: "Interpersonal Therapy (IPT)",
      description: "Focuses on improving relationships.",
      detailedDescription: "IPT is a time-limited therapy that focuses on interpersonal relationships and social functioning. It helps individuals understand how their relationships impact their mental health and vice versa. Techniques include role-playing, communication skills training, and exploring relationship patterns.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      duration: "12-16 weeks",
      bestFor: ["Depression"],
      category: "Psychotherapy"
    }
  ];

  const indianTherapies = [
    {
      id: 13,
      title: "Yoga Therapy",
      description: "Integrates postures, breathwork and meditation.",
      detailedDescription: "Customized yoga protocols address specific health conditions by balancing the doshas (body constitutions). Includes asana (postures), pranayama (breathwork), dhyana (meditation) and yoga nidra (psychic sleep). Shown to reduce stress, improve flexibility and enhance mental clarity.",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e",
      duration: "Ongoing practice",
      bestFor: ["Stress", "Chronic pain"],
      category: "Mind-Body"
    },
    {
      id: 14,
      title: "Ayurvedic Counseling",
      description: "Balances doshas through lifestyle and herbs.",
      detailedDescription: "Ayurvedic counseling involves assessing an individual's dosha (body constitution) and recommending personalized lifestyle changes, dietary adjustments, and herbal remedies. It aims to restore balance and promote overall well-being. Common practices include detoxification (panchakarma), dietary modifications, and herbal supplementation.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
      duration: "Varies",
      bestFor: ["Digestive issues"],
      category: "Holistic"
    },
    // Add 10 more Indian therapies...
    {
      id: 15,
      title: "Pranic Healing",
      description: "Energy healing through prana manipulation.",
      detailedDescription: "Pranic Healing is a no-touch energy healing technique that uses the body's energy field to promote physical and emotional healing. Practitioners cleanse and energize the aura and chakras, facilitating the body's natural healing processes. It's effective for stress relief, pain management, and emotional balance.",
      image: "https://images.unsplash.com/photo-1593810450967-f9c42742e326",
      duration: "4-8 sessions",
      bestFor: ["Energy blockages"],
      category: "Energy"
    },
    {
      id: 16,
      title: "Marma Therapy",
      description: "Stimulates vital energy points.",
      detailedDescription: "Marma therapy is an ancient Indian healing technique that focuses on stimulating specific energy points (marmas) in the body. These points are believed to be gateways to the body's vital energy (prana). By applying pressure or using oils, practitioners aim to restore balance and promote healing in physical and emotional aspects.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      duration: "6-10 sessions",
      bestFor: ["Pain management"],
      category: "Bodywork"
    },
    {
      id: 17,
      title: "Nadi Pariksha (Pulse Diagnosis)",
      description: "Detects imbalances through pulse reading.",
      detailedDescription: "Nadi Pariksha is an ancient Ayurvedic diagnostic technique that involves reading the pulse to assess the body's dosha balance and identify health issues. Practitioners analyze the pulse's quality, rhythm, and strength to determine imbalances in the body and recommend personalized treatments.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
      duration: "1-2 hrs",
      bestFor: ["Early detection"],
      category: "Diagnostic"
    },
    {
      id: 18,
      title: "Panchakarma",
      description: "Ayurvedic detoxification program.",
      detailedDescription: "Panchakarma is a comprehensive Ayurvedic detoxification and rejuvenation program. It involves five therapeutic procedures designed to cleanse the body of toxins (ama) and restore balance. The process includes oil massages, steam therapy, herbal enemas, and nasal cleansing. It's effective for chronic conditions, stress relief, and overall wellness.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      duration: "7-21 days",
      bestFor: ["Toxins removal"],
      category: "Detox"
    },
    {
      id: 19,
      title: "Sound Therapy (Nada Yoga)",
      description: "Uses mantras and singing bowls.",
      detailedDescription: "Nada Yoga, or sound therapy, utilizes sound vibrations to promote healing and relaxation. It involves the use of mantras, singing bowls, and other instruments to balance energy centers (chakras) in the body. This practice enhances mental clarity, emotional stability, and overall well-being.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      duration: "8-12 sessions",
      bestFor: ["Anxiety"],
      category: "Vibrational"
    },
    {
      id: 20,
      title: "Jyotish Counseling (Vedic Astrology)",
      description: "Guidance through planetary analysis.",
      detailedDescription: "Jyotish counseling uses Vedic astrology to analyze an individual's birth chart and planetary influences. Practitioners provide insights into personality traits, life challenges, and potential paths based on astrological alignments. This guidance can help individuals make informed decisions and navigate life's complexities.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      duration: "1-2 hrs",
      bestFor: ["Life purpose"],
      category: "Spiritual"
    },
    {
      id: 21,
      title: "Siddha Medicine",
      description: "Ancient Tamil healing system.",
      detailedDescription: "Siddha medicine is a traditional healing system from Tamil Nadu, India. It emphasizes the balance of body, mind, and spirit through herbal remedies, dietary changes, and lifestyle modifications. Siddha practitioners use a holistic approach to treat various ailments, focusing on the root cause rather than just symptoms.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
      duration: "Varies",
      bestFor: ["Chronic conditions"],
      category: "Traditional"
    },
    {
      id: 22,
      title: "Kalaripayattu Therapy",
      description: "Martial arts for physical and mental health.",
      detailedDescription: "Kalaripayattu is an ancient Indian martial art that combines physical training with therapeutic practices. It emphasizes flexibility, strength, and coordination through dynamic movements. The practice includes self-defense techniques, weapon training, and healing practices like massage and herbal remedies to promote overall well-being.",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e",
      duration: "3-6 months",
      bestFor: ["Discipline"],
      category: "Movement"
    },
    {
      id: 23,
      title: "Vipassana Meditation",
      description: "Silent meditation for insight.",
      detailedDescription: "Vipassana meditation is an ancient practice that focuses on self-observation and mindfulness. It involves observing thoughts, sensations, and emotions without attachment or aversion. This technique promotes deep insight into the nature of reality, leading to greater awareness and emotional balance. Vipassana retreats typically last 10 days, during which participants practice silence and meditation.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      duration: "10-day courses",
      bestFor: ["Self-awareness"],
      category: "Meditation"
    },
    {
      id: 24,
      title: "Tantric Healing",
      description: "Works with energy and consciousness.",
      detailedDescription: "Tantric healing is a spiritual practice that focuses on the integration of body, mind, and spirit. It involves techniques such as breathwork, meditation, and energy work to awaken and balance the body's energy centers (chakras). Tantric practices aim to enhance self-awareness, emotional healing, and spiritual growth.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      duration: "Varies",
      bestFor: ["Sexual trauma"],
      category: "Energy"
    }
  ];

  const toggleTherapy = (therapy) => {
    setSelectedTherapy(selectedTherapy?.id === therapy.id ? null : therapy);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <div className='therapy_container bg-black text-gray-100 min-h-screen py-16 px-4 sm:px-8 relative overflow-hidden'>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre-v2.png')] opacity-5"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-900/20 rounded-full filter blur-3xl"></div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl pb-3 md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Healing Pathways
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover comprehensive therapeutic approaches blending modern psychology and ancient wisdom for holistic well-being.
          </p>
        </motion.div>

        {/* Modern Toggle Switch */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative inline-flex bg-[#0f0f0f] rounded-full p-1 border border-gray-700 shadow-inner overflow-hidden">

            {/* Sliding background indicator */}
            <div
              className={`absolute top-1 bottom-1 left-1 w-1/2 bg-gray-800 rounded-full shadow-lg transition-transform duration-300 ease-in-out 
        ${activeTab === 'indian' ? 'translate-x-full' : 'translate-x-0'}`}
            ></div>

            {/* Western Button */}
            <button
              onClick={() => setActiveTab('western')}
              className={`relative z-10 w-40 py-2 px-6 rounded-full font-semibold transition-colors duration-200 
        ${activeTab === 'western' ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Western
              </span>
            </button>

            {/* Indian Button */}
            <button
              onClick={() => setActiveTab('indian')}
              className={`relative z-10 w-40 py-2 px-6 rounded-full font-semibold transition-colors duration-200 
        ${activeTab === 'indian' ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7a4 4 0 016.573 3.364M8 7V4m0 3H4m4 3a4 4 0 01-1.273 3.364M8 7c0 2.21 1.343 4 3 4m4-5a4 4 0 016.573 3.364M15 7V4m0 3h4m-4 3a4 4 0 01-1.273 3.364M15 7c0 2.21 1.343 4 3 4m-8 0h2m2 0a2 2 0 002-2m0-4h2m2 0a2 2 0 012 2v6a2 2 0 01-2 2h-2.5M7 10H5m2 0a2 2 0 01-2 2v4a2 2 0 002 2h2.5" />
                </svg>
                Indian
              </span>
            </button>
          </div>
        </motion.div>

        {/* Therapy Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {(activeTab === 'western' ? westernTherapies : indianTherapies).map((therapy) => (
            <motion.div
              key={therapy.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 cursor-pointer"
              onClick={() => toggleTherapy(therapy)}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={`${therapy.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80`}
                  alt={therapy.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{therapy.title}</h3>
                  <p className="text-sm text-gray-300 mt-1 line-clamp-2">{therapy.description}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {therapy.bestFor.map((item, idx) => (
                    <span key={idx} className="bg-gray-800 text-purple-300 text-xs px-2 py-1 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full-screen Therapy Modal */}
        <AnimatePresence>
          {selectedTherapy && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50"
                onClick={() => setSelectedTherapy(null)}
              />

              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 m-auto w-full max-w-4xl h-[70vh] bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden z-50 flex flex-col"
              >
                <div className="relative h-64 flex-shrink-0">
                  <img
                    src={`${selectedTherapy.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80`}
                    alt={selectedTherapy.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Improved Close Button */}
                  <button
                    className="absolute top-4 rounded-full p-2 text-gray-300 hover:text-white transition-colors bg-gray-900/50 hover:bg-gray-800/80 backdrop-blur-sm border border-gray-700"
                    onClick={() => setSelectedTherapy(null)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-3xl font-bold text-white">{selectedTherapy.title}</h2>
                    <div className="flex items-center mt-2">
                      <span className="bg-gray-800 text-purple-400 text-sm px-3 py-1 rounded-full">
                        {activeTab === 'western' ? 'Western Therapy' : 'Indian Therapy'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 overflow-y-auto flex-grow">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold mb-4 text-purple-400">About This Therapy</h3>
                      <p className="text-gray-300 mb-6">{selectedTherapy.detailedDescription}</p>

                      <h3 className="text-xl font-semibold mb-4 text-purple-400">How It Works</h3>
                      <ul className="space-y-3 mb-6">
                        {[
                          "Initial assessment to understand your needs",
                          "Personalized treatment plan development",
                          "Regular sessions with a qualified practitioner",
                          "Progress tracking and adjustments"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                      <h3 className="text-xl font-semibold mb-4 text-purple-400">Therapy Details</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="text-gray-300">{selectedTherapy.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Best For</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {selectedTherapy.bestFor.map((item, idx) => (
                              <span key={idx} className="bg-gray-700 text-purple-300 text-xs px-2 py-1 rounded">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Success Rate</p>
                          <div className="mt-1">
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">85% reported improvement</p>
                          </div>
                        </div>
                      </div>

                      <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-purple-500/30">
                        Book This Therapy
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800 mb-20"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Integrative Healing Approach
                </h2>
                <p className="text-gray-300 mb-6 text-lg">
                  We combine the precision of Western therapies with the holistic wisdom of Indian traditions for comprehensive care.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Evidence-based protocols meet ancient wellness practices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Personalized treatment plans combining multiple modalities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Cultural sensitivity and tradition-informed care</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Which approach is right for me?</h3>
                <p className="text-gray-400 mb-6">Take our 2-minute assessment to discover the most suitable therapies for your needs.</p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-purple-500/30 flex items-center justify-center">
                  Start Assessment
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Healing Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The combination of CBT and Yoga Therapy transformed my approach to anxiety. I've never felt more in control.",
                  author: "Priya M., 34",
                  therapy: "CBT + Yoga Therapy"
                },
                {
                  quote: "After years of medication, Ayurvedic counseling helped address the root causes of my depression.",
                  author: "Rahul S., 41",
                  therapy: "Ayurvedic Counseling"
                },
                {
                  quote: "EMDR helped me process trauma in ways traditional talk therapy never could. Life-changing experience.",
                  author: "Ananya K., 28",
                  therapy: "EMDR Therapy"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/30 transition-colors">
                  <div className="text-yellow-400 mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                  <div className="text-sm">
                    <p className="font-medium text-gray-100">{testimonial.author}</p>
                    <p className="text-purple-300">{testimonial.therapy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Healing Journey Today</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Our compassionate therapists are ready to guide you toward lasting well-being.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-purple-500/30">
                Book Initial Consultation
              </button>
              <button className="bg-transparent text-purple-400 px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors border border-gray-700">
                Call Us: +91 98765 43210
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Therapies;