'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-12 relative overflow-hidden w-full">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[#030014]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(108, 99, 255, 0.05) 1px, transparent 1px), 
                          linear-gradient(90deg, rgba(108, 99, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          opacity: 0.3
        }}></div>
      </div>

      {/* Footer Content */}
      <motion.div 
        className="w-full px-4 sm:px-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center">
          {/* Logo/Name */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold">
              <span className="gradient-text">Prototype</span> <span className="text-[#ff6584]">2.0</span>
            </h3>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            className="flex space-x-6 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="https://github.com/prototypeorg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 
                group-hover:border-[#6c63ff]/50 group-hover:shadow-[0_0_15px_rgba(108,99,255,0.5)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
            </a>

            <a 
              href="https://twitter.com/prototype_hackathon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 
                group-hover:border-[#6c63ff]/50 group-hover:shadow-[0_0_15px_rgba(108,99,255,0.5)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </div>
            </a>

            <a 
              href="https://linkedin.com/company/prototype-hackathon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 
                group-hover:border-[#6c63ff]/50 group-hover:shadow-[0_0_15px_rgba(108,99,255,0.5)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
            </a>

            <a 
              href="https://instagram.com/prototype_hackathon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 
                group-hover:border-[#6c63ff]/50 group-hover:shadow-[0_0_15px_rgba(108,99,255,0.5)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </a>
          </motion.div>

          {/* Made with love section */}
          <motion.div 
            className="text-white/80 text-lg font-over-the-rainbow flex items-center justify-center flex-wrap gap-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span>Made with</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff6584]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>by</span>
            <a 
              href="https://github.com/sohamkhedkar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6c63ff] hover:text-[#ff6584] transition-all duration-300"
            >
              Soham Khedkar
            </a>
            <span>&</span>
            <a 
              href="https://github.com/harshsamarth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6c63ff] hover:text-[#ff6584] transition-all duration-300"
            >
              Harsh Samarth
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="mt-6 text-white/40 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            &copy; {new Date().getFullYear()} Prototype 2.0. All rights reserved.
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer