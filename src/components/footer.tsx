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

         

          {/* Made with love section */}
          <motion.div 
            className="text-white/80 text-2xl font-over-the-rainbow flex items-center justify-center flex-wrap gap-1"
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
              href="https://github.com/soham-khedkar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6c63ff] hover:text-[#ff6584] transition-all duration-300"
            >
              Soham Khedkar
            </a>
            <span>&</span>
            <a 
              href="https://github.com/pixalator" 
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