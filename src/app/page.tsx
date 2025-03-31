'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import FaqSection from '@/components/animata/accordion/faq'
import Footer from '@/components/footer'

export default function Home() {
  const faqData = [
    {
      id: 1,
      question: "What is Prototype 2.0?",
      answer: "Prototype 2.0 is an 8-hour hackathon where participants build a working MVP based on given problem statements.",
      icon: "🚀"
    },
    {
      id: 2,
      question: "When and where is it happening?",
      answer: "It's happening on April 16th, 2025, at our campus. Exact venue details will be shared with registered participants.",
      icon: "📍"
    },
    {
      id: 3,
      question: "How do I register for the hackathon?",
      answer: "Click on the 'Register Now' button on our website and fill out the registration form.",
      icon: "✍️"
    },
    {
      id: 4,
      question: "Is there an entry fee?",
      answer: "Yup 300 rupees per team is the entry fee.",
      icon: "💸"
    },
    {
      id: 5,
      question: "How many members can be in a team?",
      answer: "Teams can have 1-4 members. Solo participants are also welcome!",
      icon: "👥"
    },
    {
      id: 6,
      question: "What are the prizes?",
      answer: "The total prize pool is ₹10,000, along with internship opportunities and tech goodies for winners.",
      icon: "🏆"
    }
  ]
  
  return (
    <>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Hero Section - Improved responsiveness */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="flex flex-col items-center justify-center">
          {/* Main Hero Container */}
          <motion.div 
            className="w-full mx-auto rounded-3xl sm:rounded-6xl overflow-hidden gradient-card p-1 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-[#030014]/70 backdrop-blur-lg rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 md:p-12">
                {/* Left Content */}
                <motion.div 
                  className="flex flex-col justify-center space-y-4 sm:space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div>
                    <motion.h3
                      className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium rounded-full bg-white/5 border border-white/10 text-[#6c63ff]"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      April 16 2025
                    </motion.h3>
                    
                    <motion.h1 
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 tracking-tight"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <span className="gradient-text">Prototype</span> <span className="text-[#6c63ff]">2.0</span>
                    </motion.h1>
                    
                    <motion.p 
                      className="text-lg sm:text-xl md:text-2xl text-white/80 mb-4 sm:mb-6"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      It starts with a Prototype might end with a Product!!
                    </motion.p>
                    
                    <motion.p 
                      className="text-lg sm:text-base md:text-2xl mb-6 sm:mb-8 font-over-the-rainbow text-[#ff8ca0]"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                     Oh we back with a bang! Join us for some amazing 8 hours of your daily life vibe coding and fun at Prototype 2.0 Hackathon!
                    </motion.p>
                    
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <button className="
                        bg-gradient-to-r from-[#6c63ff] to-[#ff6584] 
                        px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium text-white 
                        hover:shadow-lg hover:shadow-[#6c63ff]/20 transition-all
                        scale-100 hover:scale-105 duration-300
                        border border-white/10
                        text-sm sm:text-base
                      ">
                        Register Now
                      </button>
                      <Link href="/about" className='w-full sm:w-auto'>
                      <button className="
                        backdrop-blur-sm bg-white/5 
                        border border-white/10
                        px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium text-white 
                        hover:bg-white/10 transition-all
                        flex items-center justify-center gap-2
                        text-sm sm:text-base
                        w-full
                      ">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Learn More
                      </button>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Right Content - Responsive Image */}
                <motion.div 
                  className="relative h-52 sm:h-64 md:h-full min-h-[220px] sm:min-h-[320px] flex items-center justify-center"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Decorative elements */}
                    <div className="w-36 sm:w-48 h-36 sm:h-48 rounded-full bg-[#6c63ff]/20 blur-3xl absolute"></div>
                    <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-[#ff6584]/20 blur-3xl absolute -top-10 -right-10"></div>
                    
                    {/* Main visual element - Replace with your SVG */}
                    <div className="relative z-10 w-full h-full max-w-xs sm:max-w-md flex items-center justify-center">
                      <Image 
                        src="/10259340_4401278.svg"
                        alt="Prototype 2.0 Hackathon Illustration"
                        width={400}
                        height={400}
                        className="w-full h-auto max-w-[200px] sm:max-w-sm"
                        priority
                      />
                      
                      {/* Add floating decorative elements - reduced size on mobile */}
                      <motion.div 
                        className="absolute w-6 sm:w-8 h-6 sm:h-8 rounded-md bg-white/10 backdrop-blur-sm border border-white/20"
                        style={{ top: '20%', left: '10%' }}
                        animate={{ 
                          y: [0, -15, 0],
                          rotate: [0, 10, 0]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                      <motion.div 
                        className="absolute w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/20"
                        style={{ bottom: '15%', right: '15%' }}
                        animate={{ 
                          y: [0, 20, 0],
                          rotate: [0, -15, 0]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: 1
                        }}
                      />
                      <motion.div 
                        className="absolute w-4 sm:w-6 h-4 sm:h-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 rotate-45"
                        style={{ bottom: '30%', left: '20%' }}
                        animate={{ 
                          y: [0, 15, 0],
                          rotate: [45, 90, 45]
                        }}
                        transition={{
                          duration: 7,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: 0.5
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Stats Section - Made more readable on small screens */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 bg-white/5 backdrop-blur-md p-4 sm:p-6 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex flex-col items-center justify-center text-center p-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6c63ff]">8</h3>
                  <p className="text-white/60 text-xs sm:text-sm">Hours of Coding</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center p-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ff6584]">500+</h3>
                  <p className="text-white/60 text-xs sm:text-sm">Participants</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center p-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#43e97b]">10+</h3>
                  <p className="text-white/60 text-xs sm:text-sm">Mentors</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center p-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">10K</h3>
                  <p className="text-white/60 text-xs sm:text-sm">In Prizes</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Sponsors Section - Improved spacing */}
          <motion.div 
            className="mt-12 sm:mt-16 text-center px-4 sm:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3 className="text-lg sm:text-xl font-medium text-white/60 mb-4 sm:mb-6">Proudly Sponsored By</h3>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-16">
              <div className="flex items-center justify-center p-2">
                <Image 
                  src="/supabase-logo-wordmark--dark.svg"
                  alt="Supabase logo"
                  width={160}
                  height={48}
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  priority
                />
              </div>
              <div className="flex items-center justify-center p-2">
                <Image 
                  src="/Microsoft_Azure.svg"
                  alt="Microsoft Azure logo"
                  width={160}
                  height={48}
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Community Partners Marquee - Responsive sizing */}
          <motion.div
            className="mt-16 sm:mt-24 mb-12 sm:mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <h3 className="text-lg sm:text-xl font-medium text-white/60 mb-4 sm:mb-6">Community Partners</h3>
            
            {/* Marquee container with responsive sizing */}
            <div className="relative overflow-hidden w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto py-6 sm:py-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-[#030014] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-[#030014] after:to-transparent">
              <div 
                className="flex animate-marquee items-center gap-10 sm:gap-16 md:gap-20 hover:pause-animation"
                style={{
                  animation: 'scroll 30s linear infinite',
                }}
                onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
                onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
              >
                {/* Duplicate the logos to create a seamless loop */}
                {[...Array(2)].map((_, index) => (
                  <React.Fragment key={index}>
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Image 
                        src="/LDLogo.svg" 
                        alt="Community Partner 1" 
                        width={160} 
                        height={60}
                        className="h-12 sm:h-16 md:h-20 w-auto opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                      />
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Image 
                        src="/nexmeet_black logo.png" 
                        alt="Community Partner 2" 
                        width={160} 
                        height={60}
                        className="h-12 sm:h-16 md:h-20 w-auto opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                      />
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Image 
                        src="/tcblogoremakeblackbg.png" 
                        alt="Community Partner 3" 
                        width={160} 
                        height={60}
                        className="h-12 sm:h-16 md:h-20 w-auto opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                      />
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Image 
                        src="/DevCult_Logo.jpg" 
                        alt="Community Partner 4" 
                        width={160} 
                        height={60}
                        className="h-12 sm:h-16 md:h-20 w-auto opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* About Section - Improved spacing and readability */}
      <section className="py-12 sm:py-16 md:py-20">
        <motion.div
          className="w-full max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-10 tracking-tight text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About <span className="gradient-text">Prototype</span> <span className="text-[#ff6584]">2.0</span>
          </motion.h2>
          
          {/* Condensed About section */}
          <motion.div 
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-1 mb-12"
            style={{
              background: "linear-gradient(135deg, #6c63ff 0%, #ff6584 100%)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
            
            <div className="bg-[#030014]/80 backdrop-blur-lg rounded-xl sm:rounded-2xl overflow-hidden relative z-10">
              <div className="p-6 sm:p-8 md:p-12">
                {/* About Text */}
                <motion.div 
                  className="flex flex-col justify-center space-y-4 sm:space-y-6 max-w-3xl mx-auto text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.div
                    className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-2 text-xs sm:text-sm font-medium rounded-full bg-white/5 border border-white/10 text-[#ff6584] mx-auto"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    8-Hour Challenge
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 font-sans"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Build a Prototype in Just 8 Hours
                  </motion.h3>
                  
                  <motion.div 
                    className="space-y-3 sm:space-y-4 text-white/80 text-base sm:text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <p>
                      <span className="text-[#6c63ff] font-semibold">Prototype 2.0</span> is our flagship hackathon taking place on April 16th, 2025, where participants build a working MVP based on a given problem statement in just 8 hours.
                    </p>
                    
                    <p>
                      The best solutions will win from our prize pool of <span className="font-semibold gradient-text">₹10,000</span> along with exclusive internship opportunities and tech goodies.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="pt-3 sm:pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <Link href="/about">
                      <button 
                        className="bg-gradient-to-r from-[#6c63ff] to-[#ff6584] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium text-white 
                        hover:shadow-lg hover:shadow-[#6c63ff]/20 transition-all scale-100 hover:scale-105 duration-300
                        border border-white/10 text-sm sm:text-base"
                      >
                        Learn More
                      </button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* FAQ Section */}
      <section id="faqs" className="py-12 sm:py-16 md:py-20">
        <motion.div
          className="w-full max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-10 tracking-tight text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          
          {/* FAQ Section without container */}
          <motion.div 
            className="w-full mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <FaqSection data={faqData} />
          </motion.div>
        </motion.div>
      </section>
    </div>
    <Footer/>
    </>
  )
}