'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Timeline", href: "/timeline" },
  { name: "Domains", href: "/domain" },
  { name: "Prizes", href: "/perks" },
  { name: "FAQ", href: "/#faqs" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle closing mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Navbar container animation
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        delay: 0.1
      }
    }
  }

  // Mobile menu animation
  const menuVariants = {
    closed: { 
      opacity: 0,
      scale: 0.95,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  // Link animations
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + (i * 0.1),
        duration: 0.3
      }
    })
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 mx-4 mt-4 sm:mx-6 lg:mx-8"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <nav 
        className={`
          rounded-xl px-4 py-4 sm:px-6 
          backdrop-blur-lg transition-all duration-300
          ${scrolled 
            ? 'bg-[#030014]/70 shadow-lg border border-white/10' 
            : 'bg-[#030014]/40 border border-white/5'}
        `}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-14">
            {/* Logo/Brand */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center">
                <span className="font-bold text-2xl md:text-3xl gradient-text tracking-tight">
                  Prototype <span className="text-[#6c63ff]">2.0</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={linkVariants}
                  >
                    <Link
                      href={link.href}
                      className={`
                        px-3 py-2 text-base font-medium rounded-md transition-colors
                        hover:text-[#6c63ff] relative group
                      `}
                    >
                      {link.name}
                      <span 
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6c63ff] transition-all duration-300
                        group-hover:w-full"
                      ></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Register button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <button className="
                bg-gradient-to-r from-[#6c63ff] to-[#ff6584] 
                px-5 py-2.5 rounded-lg font-medium text-white 
                hover:shadow-lg hover:shadow-[#6c63ff]/20 transition-all
                scale-100 hover:scale-105 duration-300
                border border-white/10
              ">
                Register Now
              </button>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#6c63ff]"
                aria-expanded="false"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-5">
                  <span 
                    className={`
                      absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out
                      ${isOpen ? 'rotate-45 translate-y-2.5' : 'rotate-0 translate-y-0'}
                    `}
                    style={{ top: '0%' }}
                  />
                  <span 
                    className={`
                      absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out
                      ${isOpen ? 'opacity-0' : 'opacity-100'}
                    `}
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <span 
                    className={`
                      absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out
                      ${isOpen ? '-rotate-45 -translate-y-2.5' : 'rotate-0 translate-y-0'}
                    `}
                    style={{ bottom: '0%' }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div 
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 mt-3 bg-[#030014]/70 rounded-lg backdrop-blur-lg border border-white/10">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
                <Link
                  href={link.href}
                  className="
                    block px-3 py-2 rounded-md text-base font-medium text-white
                    hover:bg-[#6c63ff]/20 hover:text-[#6c63ff] transition-colors
                  "
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              custom={navLinks.length}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              className="mt-4 pt-3 border-t border-white/10"
            >
              <button className="
                w-full bg-gradient-to-r from-[#6c63ff] to-[#ff6584] 
                px-4 py-2 rounded-lg font-medium text-white
                hover:shadow-lg hover:shadow-[#6c63ff]/20 transition-all
                border border-white/10
              ">
                Register Now
              </button>
            </motion.div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Navbar