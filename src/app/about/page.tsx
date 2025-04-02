'use client'
import React, { useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import EmblaCarousel from '@/components/EmblaCarousel'
import { 
  ArrowRight, 
  HeartPulse, 
  Sun
} from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import Footer from '@/components/footer'

export default function About() {
  // Refs for scroll animations
  const textRef = useRef(null)
  const bentoRef = useRef(null)
  const bentoGridRef = useRef(null)
  const isTextInView = useInView(textRef, { once: false, amount: 0.3 })
  const isBentoInView = useInView(bentoRef, { once: false, amount: 0.2 })
  const isBentoGridInView = useInView(bentoGridRef, { once: false, amount: 0.2 })
  const textControls = useAnimation()
  const bentoControls = useAnimation()
  const bentoGridControls = useAnimation()
  
  // Control animations when sections come into view
  useEffect(() => {
    if (isTextInView) {
      textControls.start('visible')
    }
    if (isBentoInView) {
      bentoControls.start('visible')
    }
    if (isBentoGridInView) {
      bentoGridControls.start('visible')
    }
  }, [isTextInView, isBentoInView, isBentoGridInView, textControls, bentoControls, bentoGridControls])

  // Past event images for the carousel
  const carouselItems = [
    { id: 1, image: "/gallery/one.webp" },
    { id: 2, image: "/gallery/three.webp" },
    { id: 3, image: "/gallery/two.webp" },
    { id: 4, image: "/gallery/four.webp" },
    { id: 5, image: "/gallery/six.webp" },
    { id: 6, image: "/gallery/six.webp" },
    { id: 7, image: "/gallery/seven.webp" },
    { id: 8, image: "/gallery/eight.webp" },
    { id: 9, image: "/gallery/nine.webp" },
    { id: 10, image: "/gallery/ten.webp" },
    { id: 11, image: "/gallery/eleven.webp" },
    { id: 12, image: "/gallery/twelve.webp" },
    { id: 13, image: "/gallery/thirteen.webp" },
    { id: 14, image: "/gallery/fourteen.webp" },
    { id: 15, image: "/gallery/fifteen.webp" },
  ];

  return (
    <>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div
        className="w-full max-w-8xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 tracking-tight text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About <span className="gradient-text">Prototype</span> <span className="text-[#ff6584]">2.0</span>
        </motion.h2>
        
        {/* About Container with Grid Background */}
        <motion.div 
          className="relative overflow-hidden rounded-3xl p-1 mb-12 sm:mb-24"
          style={{
            background: "linear-gradient(135deg, #ff6584 0%, #43e97b 100%)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          
          <div className="bg-[#030014]/80 backdrop-blur-lg rounded-2xl overflow-hidden relative z-10">
            {/* Changed to flex-col for better content flow */}
            <div className="flex flex-col gap-6 md:gap-10 p-6 sm:p-8 md:p-12 lg:p-16">
              {/* Left Content - Centered Text Content */}
              <motion.div 
                ref={textRef}
                className="flex flex-col items-center text-center justify-center space-y-6 sm:space-y-8 mx-auto max-w-3xl"
                initial="hidden"
                animate={textControls}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                }}
              >
                <motion.div
                  className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-1 sm:mb-2 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-[#ff6584] w-fit"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  April 16th, 2025
                </motion.div>
                
                <motion.h3 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1,
                      transition: { duration: 0.6, delay: 0.4 } 
                    }
                  }}
                >
                  Build the Future in Just 8 Hours
                </motion.h3>
                
                <motion.div 
                  className="space-y-4 sm:space-y-6 text-white/80 text-base sm:text-xl md:text-2xl leading-relaxed"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1,
                      transition: { duration: 0.6, delay: 0.5, staggerChildren: 0.2 } 
                    }
                  }}
                >
                  <motion.p
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 }
                    }}
                  >
                    Prototype 2.0 is GHRCEMN&apos;s premier hackathon where students come together to build innovative solutions to real-world problems in just 8 hours.
                  </motion.p>
                  
                  <motion.p
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 }
                    }}
                  >
                    Whether you&apos;re a coding expert or just starting out, this is your chance to showcase your skills, learn new technologies, and connect with like-minded individuals.
                  </motion.p>
                  
                  <motion.h4 
                    className="font-semibold text-xl sm:text-2xl mt-4 sm:mt-8"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    What to expect:
                  </motion.h4>
                  
                  <motion.ul 
                    className="list-disc space-y-2 sm:space-y-3 text-base sm:text-xl mx-auto text-left pl-4 sm:pl-6"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { 
                        opacity: 1,
                        transition: { staggerChildren: 0.1 } 
                      }
                    }}
                  >
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      An intensive <span className="text-[#ff6584] font-medium">8-hour coding sprint</span> with real-world challenges
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      Expert mentorship from industry professionals throughout the event
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      Networking opportunities with fellow developers and tech companies
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      Cash prizes totaling ₹10,000 and potential internship opportunities
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      A supportive environment that encourages innovation and creativity
                    </motion.li>
                  </motion.ul>
                </motion.div>
                <Link href="https://forms.gle/pSgJvv2jAqij9ZzR7">
                <motion.button 
                  className="bg-gradient-to-r from-[#ff6584] to-[#43e97b] px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-medium text-white text-base sm:text-lg
                  hover:shadow-lg hover:shadow-[#ff6584]/20 transition-all scale-100 hover:scale-105 duration-300
                  border border-white/10 mt-4 sm:mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ 
                    boxShadow: "0 0 20px 0 rgba(255, 101, 132, 0.5)",
                  }}
                >
                  Register Now
                </motion.button>
                </Link>
              </motion.div>
              
              {/* Carousel below the text content - centered design */}
              <motion.div
                className="flex items-center justify-center mt-8 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="relative w-full flex items-center justify-center">
                  {/* Decorative blur elements */}
                  <div className="absolute w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-[#43e97b]/20 blur-3xl -top-10 right-0 sm:-right-10"></div>
                  <div className="absolute w-36 sm:w-52 h-36 sm:h-52 rounded-full bg-[#ff6584]/20 blur-3xl -bottom-10 left-0 sm:-left-10"></div>
                  
                  {/* Carousel container - centered */}
                  <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                    <EmblaCarousel items={carouselItems} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Large Bento Card Section */}
        <motion.div 
          ref={bentoRef}
          className="mt-24"
          initial="hidden"
          animate={bentoControls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 0.8, 
                delay: 0.2,
                when: "beforeChildren",
                staggerChildren: 0.2
              } 
            }
          }}
        >
          <motion.h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Hackathon Experience
          </motion.h3>
          
          <div className="grid grid-cols-1 gap-8">
            {/* One large Bento Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 p-1"
                style={{
                  background: "linear-gradient(to right, #6c63ff, #ff6584)",
                }}
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                
              <div className="relative z-10 bg-[#030014]/90 backdrop-blur-md rounded-xl p-8 md:p-10 lg:p-12">
  <div className="flex flex-col gap-6">
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-xl bg-gradient-to-br from-[#6c63ff] to-[#ff6584]">
        <ArrowRight size={28} className="text-white" />
      </div>
      <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
        Real Success Stories
      </h4>
    </div>
  
    <div className="mt-3 space-y-8">
      <motion.p 
        className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-white/90"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        In our previous hackathon, we had <span className="text-[#ff6584] font-semibold">two winning teams</span> with the first place winner securing an <span className="text-[#43e97b] font-semibold">internship at TARS TECHNOLOGIES Nagpur</span>. Prototype isn&apos;t just an event—it&apos;s a career launchpad.
      </motion.p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          className="space-y-3"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <div className="flex items-center gap-3">
            <HeartPulse className="text-[#43e97b]" size={24} />
            <h5 className="text-xl md:text-2xl font-semibold">Career Opportunities</h5>
          </div>
          <p className="text-lg md:text-xl text-white/70">
            Showcase your skills to potential employers and open doors to internships and job offers.
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-3"
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <div className="flex items-center gap-3">
            <Sun className="text-[#ff6584]" size={24} />
            <h5 className="text-xl md:text-2xl font-semibold">Recognition & Rewards</h5>
          </div>
          <p className="text-lg md:text-xl text-white/70">
            Win prizes and earn recognition for your innovative solutions to real-world problems.
          </p>
        </motion.div>
      </div>
    </div>
    
    <div className="flex flex-col sm:flex-row gap-6 mt-6 justify-center">
      <Link href="https://forms.gle/pSgJvv2jAqij9ZzR7">
      <motion.button 
        className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#6c63ff] to-[#ff6584] text-white font-medium text-lg"
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px 0 rgba(108, 99, 255, 0.5)" }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        Register Now
      </motion.button>
      </Link>
      
      <Link href="/timeline">
        <motion.button 
          className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-lg flex items-center gap-2 group"
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          View Timeline
        </motion.button>
      </Link>
    </div>
  </div>
</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
    <Footer/>
    </>
  )
}