'use client'
import React, { useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import ImageCarousel from '@/components/animata/image-carousel'
import { 
  ArrowRight, 
  HeartPulse, 
  Sun
} from 'lucide-react'
import MovingGradient from "@/components/animata/background/moving-gradient"
import { cn } from "@/lib/utils"
import Link from 'next/link'
import { useRef } from 'react'
import Footer from '@/components/footer'

// BentoCard component from eight.tsx
// function BentoCard({
//   title,
//   icon,
//   description,
//   children,
//   gradient,
//   className,
// }: {
//   children?: React.ReactNode;
//   title: React.ReactNode;
//   icon: React.ReactNode;
//   gradient?: string;
//   description: React.ReactNode;
//   className?: string;
// }) {
//   return (
//     <MovingGradient
//       animated={false}
//       className={cn("rounded-md", className)}
//       gradientClassName={cn("opacity-10", gradient)}
//     >
//       <section className="flex h-full flex-col gap-2 p-4">
//         <header>
//           <div className="mb-2 flex items-center gap-2">
//             {icon}
//             <p className="text-md line-clamp-1 font-bold">{title}</p>
//           </div>
//         </header>
//         <div className="flex-1 text-sm font-medium text-opacity-80">{description}</div>
//         {children}
//       </section>
//     </MovingGradient>
//   );
// }

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
    { id: 1, title: "Prototype 1.0", image: "/gallery/one.webp" },
    { id: 2, title: "Coding Session", image: "/gallery/two.webp" },
    { id: 3, title: "Team Collaboration", image: "/gallery/three.webp" },
    { id: 4, title: "Presentation", image: "/gallery/four.webp" },
    { id: 5, title: "Winners", image: "/gallery/five.webp" },
    { id: 6, title: "Mentorship", image: "/gallery/six.webp" },
    { id: 7, title: "Workshops", image: "/gallery/seven.webp" },
    { id: 8, title: "Networking", image: "/gallery/eight.webp" },
    { id: 9, title: "Prize Ceremony", image: "/gallery/nine.webp" },
    { id: 10, title: "Team Building", image: "/gallery/ten.webp" },
    { id: 11, title: "Brainstorming", image: "/gallery/eleven.webp" },
    { id: 12, title: "Demo Day", image: "/gallery/twelve.webp" },
    { id: 13, title: "Ideation", image: "/gallery/thirteen.webp" },
    { id: 14, title: "Development", image: "/gallery/fourteen.webp" },
    { id: 15, title: "Closing Ceremony", image: "/gallery/fifteen.webp" },
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
          className="relative overflow-hidden rounded-3xl p-1 mb-24"
          style={{
            background: "linear-gradient(135deg, #ff6584 0%, #43e97b 100%)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          
          <div className="bg-[#030014]/80 backdrop-blur-lg rounded-2xl overflow-hidden relative z-10">
            <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12 lg:p-16">
              {/* Left Content - About Text */}
              <motion.div 
                ref={textRef}
                className="flex flex-col justify-center space-y-8"
                initial="hidden"
                animate={textControls}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
                }}
              >
                <motion.div
                  className="inline-block px-4 py-1.5 mb-2 text-sm md:text-base font-medium rounded-full bg-white/5 border border-white/10 text-[#ff6584] w-fit"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  April 16th, 2025
                </motion.div>
                
                <motion.h3 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
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
                  className="space-y-6 text-white/80 text-xl md:text-2xl leading-relaxed"
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
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <span className="text-[#43e97b] font-semibold">Prototype 2.0</span> is our flagship hackathon where participants build a working MVP based on a given problem statement in just 8 hours.
                  </motion.p>
                  
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    Each team will receive mentorship from industry experts, access to cutting-edge tools and APIs, and the opportunity to showcase their creation to a panel of judges.
                  </motion.p>
                  
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    The best solutions will win from our prize pool of <span className="font-semibold gradient-text">₹10,000</span> along with exclusive internship opportunities and tech goodies.
                  </motion.p>
                  
                  <motion.h4 
                    className="font-semibold text-2xl mt-8"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    What to expect:
                  </motion.h4>
                  
                  <motion.ul 
                    className="list-disc pl-6 space-y-3 text-xl"
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
                      Challenging problem statements based on real-world issues
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      Networking with like-minded tech enthusiasts
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      Technical workshops and lightning talks
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      Swag kits and refreshments throughout the event
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      Certificate of participation for all attendees
                    </motion.li>
                  </motion.ul>
                </motion.div>
                
                <motion.button 
                  className="bg-gradient-to-r from-[#ff6584] to-[#43e97b] px-10 py-4 rounded-lg font-medium text-white text-lg
                  hover:shadow-lg hover:shadow-[#ff6584]/20 transition-all scale-100 hover:scale-105 duration-300
                  border border-white/10 mt-6 w-fit"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ 
                    boxShadow: "0 0 20px 0 rgba(255, 101, 132, 0.5)",
                  }}
                >
                  Register Now
                </motion.button>
              </motion.div>
              
              {/* Right Content - Image Carousel */}
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-72 h-72 rounded-full bg-[#43e97b]/20 blur-3xl -top-10 -right-10"></div>
                  <div className="absolute w-52 h-52 rounded-full bg-[#ff6584]/20 blur-3xl -bottom-10 -left-10"></div>
                  
                  <div className="relative z-10 w-full max-w-md mx-auto">
                    <ImageCarousel items={carouselItems} />
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
                      Transformative Experience
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
                      Prototype 2.0 isn&apos;t just a hackathon; it&apos;s an <span className="text-[#ff6584] font-semibold">immersive journey</span> where you&apos;ll push your limits, discover new capabilities, and forge lasting connections.
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
                          <h5 className="text-xl md:text-2xl font-semibold">Skill Development</h5>
                        </div>
                        <p className="text-lg md:text-xl text-white/70">
                          Sharpen your technical and soft skills under pressure, a valuable asset for your future career.
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
                          <h5 className="text-xl md:text-2xl font-semibold">Creative Problem Solving</h5>
                        </div>
                        <p className="text-lg md:text-xl text-white/70">
                          Tackle real challenges with innovative approaches that can make a genuine impact.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6 mt-6 justify-center">
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
          
          {/* Bento Grid Component from eight.tsx */}
          {/* <motion.div 
            ref={bentoGridRef}
            className="mt-16"
            initial="hidden"
            animate={bentoGridControls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Why Participate
            </motion.h3>
            
            <div className="grid grid-cols-1 gap-4 text-white sm:grid-cols-3 lg:grid-cols-3">
              <BentoCard
                title="Career Growth"
                icon={<BarChart size={24} className="text-[#ff6584]" />}
                description={<span>Showcase your skills to potential employers and add a valuable achievement to your resume.</span>}
                className="sm:col-span-1 sm:row-span-2"
                gradient="from-purple-900 via-60% via-pink-600 to-red-600"
              >
                <div className="group relative flex cursor-pointer flex-col justify-end rounded-md bg-zinc-950/50 p-2 text-xl tracking-tight text-gray-100 md:text-2xl mt-2">
                  <div className="font-light">Build Your</div>
                  <div className="-mt-1 font-bold">Portfolio</div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border bg-white/90 transition-all duration-700 group-hover:rotate-[360deg] md:h-7 md:w-7">
                    <ArrowRight size={14} className="text-[#ff6584]" />
                  </div>
                </div>
              </BentoCard>

              <BentoCard
                title="Network with Peers"
                icon={<GitBranch size={24} className="text-[#43e97b]" />}
                description="Connect with fellow tech enthusiasts, mentors, and industry leaders."
                gradient="from-green-400 via-60% via-emerald-300 to-teal-200"
                className="group sm:col-span-1"
              >
                <div className="h-3 w-full rounded-sm bg-gray-100/30 group-hover:animate-pulse mt-2" />
                <div className="h-3 w-1/2 rounded-sm bg-gray-100/30 group-hover:animate-pulse mt-1" />
              </BentoCard>

              <BentoCard
                title="Learn New Technologies"
                icon={<LineChart size={24} className="text-[#6c63ff]" />}
                description="Gain hands-on experience with cutting-edge tools and frameworks."
                gradient="from-blue-300 via-60% via-indigo-200 to-purple-200"
                className="group sm:col-span-1"
              >
                <div className="flex w-full flex-row justify-end gap-2 rounded border-blue-900/20 bg-blue-900/10 p-2 mt-2">
                  <HeartPulse
                    size={16}
                    className="text-white/70 delay-150 duration-75 group-hover:animate-in group-hover:slide-in-from-right-full"
                  />
                  <Sun
                    size={16}
                    className="text-white/70 delay-75 duration-75 group-hover:animate-in group-hover:slide-in-from-right-full"
                  />
                  <BookPlus
                    size={16}
                    className="text-white/70 duration-75 group-hover:animate-in group-hover:slide-in-from-right-full"
                  />
                </div>
              </BentoCard>

              <BentoCard
                title="Win Exciting Prizes"
                icon={<TypeIcon size={24} className="text-yellow-400" />}
                description="Compete for cash prizes, tech gadgets, and exclusive internship opportunities."
                gradient="from-yellow-300 via-60% via-amber-200 to-orange-200"
                className="sm:col-span-2"
              />
            </div>
          </motion.div> */}
        </motion.div>
      </motion.div>
    </div>
    <Footer/>
    </>
  )
}