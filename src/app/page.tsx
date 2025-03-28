'use client'
import React  from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="flex flex-col items-center justify-center">
          {/* Main Hero Container */}
          <motion.div 
            className="w-full max-w-8xl mx-auto rounded-6xl overflow-hidden gradient-card p-1 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-[#030014]/70 backdrop-blur-lg rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Left Content */}
                <motion.div 
                  className="flex flex-col justify-center space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div>
                    <motion.h3
                      className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-[#6c63ff]"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      April 16 2025
                    </motion.h3>
                    
                    <motion.h1 
                      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <span className="gradient-text">Prototype</span> <span className="text-[#6c63ff]">2.0</span>
                    </motion.h1>
                    
                    <motion.p 
                      className="text-xl md:text-2xl text-white/80 mb-6"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      Crafting Tomorrow&apos;s Tech Today
                    </motion.p>
                    
                    <motion.p 
                      className="text-base md:text-lg mb-8 font-over-the-rainbow text-[#ff8ca0]"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                     Oh we back with a bang! Join us for some amazing 8 hours of your daily life vibe coding and fun at Prototype 2.0 Hackathon!
                    </motion.p>
                    
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <button className="
                        bg-gradient-to-r from-[#6c63ff] to-[#ff6584] 
                        px-8 py-3 rounded-lg font-medium text-white 
                        hover:shadow-lg hover:shadow-[#6c63ff]/20 transition-all
                        scale-100 hover:scale-105 duration-300
                        border border-white/10
                      ">
                        Register Now
                      </button>
                      
                      <button className="
                        backdrop-blur-sm bg-white/5 
                        border border-white/10
                        px-8 py-3 rounded-lg font-medium text-white 
                        hover:bg-white/10 transition-all
                        flex items-center justify-center gap-2
                      ">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Learn More
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Right Content - Image/Illustration */}
                <motion.div 
                  className="relative h-64 md:h-full min-h-[320px] flex items-center justify-center"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Decorative elements */}
                    <div className="w-48 h-48 rounded-full bg-[#6c63ff]/20 blur-3xl absolute"></div>
                    <div className="w-32 h-32 rounded-full bg-[#ff6584]/20 blur-3xl absolute -top-10 -right-10"></div>
                    
                    {/* Main visual element - Replace with your SVG */}
                    <div className="relative z-10 w-full h-full max-w-md flex items-center justify-center">
                      <Image 
                        src="/10259340_4401278.svg"
                        alt="Prototype 2.0 Hackathon Illustration"
                        width={400}
                        height={400}
                        className="w-full h-auto max-w-sm"
                        priority
                      />
                      
                      {/* Add floating decorative elements */}
                      <motion.div 
                        className="absolute w-8 h-8 rounded-md bg-white/10 backdrop-blur-sm border border-white/20"
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
                        className="absolute w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/20"
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
                        className="absolute w-6 h-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 rotate-45"
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
              
              {/* Stats Section */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/5 backdrop-blur-md p-6 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#6c63ff]">8</h3>
                  <p className="text-white/60">Hours of Coding</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#ff6584]">500+</h3>
                  <p className="text-white/60">Participants</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#43e97b]">10+</h3>
                  <p className="text-white/60">Mentors</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl md:text-3xl font-bold gradient-text">10K</h3>
                  <p className="text-white/60">In Prizes</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Sponsors Section */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3 className="text-xl font-medium text-white/60 mb-6">Proudly Sponsored By</h3>
            <div className="flex flex-row items-center justify-center gap-20 opacity-70">
              {/* Add sponsor logos here */}
              <div className="h-12 w-24 flex items-center justify-center">
                <div className="text-white/50 font-medium">
                <Image 
                        src="/supabase-logo-wordmark--dark.svg"
                        alt="supabase logo"
                        width={400}
                        height={400}
                        className="w-[200px] h-48 max-w-sm"
                        priority
                      />
                </div>
              </div>
              <div className="h-12 w-24 flex items-center justify-center">
                <div className="text-white/50 font-medium">
                <Image 
                        src="/Microsoft_Azure.svg"
                        alt="supabase logo"
                        width={400}
                        height={400}
                        className="w-[200px] h-12 max-w-sm"
                        priority
                      /></div>
              </div>
              {/* <div className="h-12 w-24 bg-white/10 rounded-md flex items-center justify-center">
                <div className="text-white/50 font-medium">Sponsor 3</div>
              </div>
              <div className="h-12 w-24 bg-white/10 rounded-md flex items-center justify-center">
                <div className="text-white/50 font-medium">Sponsor 4</div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>
      {/* About Section on Home page */}
{/* About Section on Home page */}
<section className="py-20">
  <motion.div
    className="w-full max-w-7xl mx-auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <motion.h2 
      className="text-3xl md:text-5xl font-bold mb-10 tracking-tight text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      About <span className="gradient-text">Prototype</span> <span className="text-[#ff6584]">2.0</span>
    </motion.h2>
    
    {/* Condensed About section */}
    <motion.div 
      className="relative overflow-hidden rounded-3xl p-1 mb-12"
      style={{
        background: "linear-gradient(135deg, #6c63ff 0%, #ff6584 100%)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      <div className="bg-[#030014]/80 backdrop-blur-lg rounded-2xl overflow-hidden relative z-10">
        <div className="p-8 md:p-12">
          {/* About Text */}
          <motion.div 
            className="flex flex-col justify-center space-y-6 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="inline-block px-4 py-1.5 mb-2 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-[#ff6584] mx-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              8-Hour Challenge
            </motion.div>
            
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-4 font-sans"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Build a Prototype in Just 8 Hours
            </motion.h3>
            
            <motion.div 
              className="space-y-4 text-white/80 text-lg"
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
              className="pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Link href="/about">
                <button 
                  className="bg-gradient-to-r from-[#6c63ff] to-[#ff6584] px-8 py-3 rounded-lg font-medium text-white 
                  hover:shadow-lg hover:shadow-[#6c63ff]/20 transition-all scale-100 hover:scale-105 duration-300
                  border border-white/10"
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
    </div>
    
  )
}