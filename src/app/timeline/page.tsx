'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/footer'

export default function Timeline() {
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
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 tracking-tight text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Event <span className="gradient-text">Timeline</span>
        </motion.h2>
        
        {/* Timeline Container with Grid Background */}
        <motion.div 
          className="relative overflow-hidden rounded-3xl p-1"
          style={{
            background: "linear-gradient(135deg, #6c63ff 0%, #43e97b 100%)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          
          <div className="bg-[#030014]/80 backdrop-blur-lg rounded-2xl overflow-hidden relative z-10">
            <div className="p-8 md:p-12">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-12 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Schedule for April 16th, 2025
              </motion.h3>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#6c63ff] to-[#43e97b]"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {[
                    { time: "9:00 AM", title: "Registration & Check In", description: "Check-in and get your seats alloted" },
                    { time: "9:30 AM", title: "Opening Ceremony", description: "Introduction and problem statement reveal" },
                    { time: "10:00 AM", title: "Hacking Begins", description: "Start building your prototype" },
                    { time: "1:00 PM", title: "Lunch Break", description: "Refuel with refreshments!! DW that's on us 😉" },
                    { time: "4:00 PM", title: "Midway Check-in", description: "Quick progress updates and mentorship" },
                    { time: "6:00 PM", title: "Submissions Due", description: "Final code submission deadline. Yup Commits will be checked" },
                    { time: "6:00 PM -7:00 PM", title: "Judging", description: "Demo your prototype to judges" },
                    { time: "7:00 PM", title: "Closing Ceremony", description: "Winners announcement and vote of thanks" },
                    { time: "TBA", title: "Awards Ceremony", description: "Award and Prize money distribution" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      className={`flex flex-col md:flex-row gap-4 items-start relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                    >
                      <div className="md:w-1/2 flex justify-end md:justify-center">
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 w-full max-w-md">
                          <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                          <p className="text-white/70 text-lg">{item.description}</p>
                        </div>
                      </div>
                      
                      <div className="md:w-1/2 flex justify-start md:justify-center items-center">
                        <div className="bg-[#030014] rounded-full px-4 py-1.5 border border-white/10 font-mono text-[#43e97b]">
                          {item.time}
                        </div>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#030014] border-2 border-white/30"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <motion.div 
              className="border-t border-white/10 p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <p className="text-lg text-white/70 mb-6">
                The schedule is subject to minor adjustments. All participants will be notified of any changes.
              </p>
              <Link href="/about">
                <button className="
                  backdrop-blur-sm bg-white/5 
                  border border-white/10
                  px-8 py-3 rounded-lg font-medium text-white 
                  hover:bg-white/10 transition-all
                  flex items-center justify-center gap-2 mx-auto
                ">
                  Back to About
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
    <Footer/>
    </>
  )
}