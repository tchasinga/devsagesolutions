'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  FiTool, 
  FiMessageCircle, 
  FiSettings, 
  FiClock, 
  FiShield, 
  FiDollarSign, 
  FiZap, 
  FiUsers 
} from 'react-icons/fi'
import { 
  HiOutlineLightBulb,
  HiOutlineChatAlt2,
  HiOutlineCog,
  HiOutlineClock,
  HiOutlineLockClosed,
  HiOutlineCurrencyDollar,
  HiOutlineLightningBolt,
  HiOutlineUserGroup
} from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger)

const advantages = [
  {
    id: 1,
    title: 'Reliable Long-Term Support & Maintenance',
    description: 'Provide continuous updates, bug fixes, and technical assistance even after project delivery. Clients love knowing they are not abandoned once the project is done.',
    icon: FiTool,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Transparent Communication',
    description: 'Keep clients informed about every stage — from planning, development, testing to deployment. Regular progress reports, open feedback channels, and quick responses build deep trust.',
    icon: FiMessageCircle,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Customized Solutions',
    description: 'Offer tailored software that fits the client unique goals and workflow instead of one-size-fits-all products. Personalization shows you understand and care about their business success.',
    icon: FiSettings,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    title: 'On-Time Delivery',
    description: 'Respecting deadlines and keeping promises demonstrates professionalism. Clients stay loyal to companies that are dependable and meet agreed timelines.',
    icon: FiClock,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    title: 'Quality and Security Assurance',
    description: 'Follow best coding practices, perform thorough testing, and prioritize data security. Clients stay loyal when they feel their system is stable, secure, and future-proof.',
    icon: FiShield,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 6,
    title: 'Competitive and Fair Pricing',
    description: 'Provide clear, honest pricing with good value for the quality delivered. Transparent pricing builds trust and long-term relationships.',
    icon: FiDollarSign,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 7,
    title: 'Innovative Ideas & Continuous Improvement',
    description: 'Offer fresh ideas, suggest improvements, and stay updated with the latest technologies. Clients appreciate a partner who helps them grow and stay ahead of competitors.',
    icon: FiZap,
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    id: 8,
    title: 'Building a Partnership, Not Just a Contract',
    description: 'Treat clients as collaborators — understand their business vision, goals, and challenges. A relationship-focused approach makes them feel valued and keeps them coming back.',
    icon: FiUsers,
    gradient: 'from-rose-500 to-pink-500'
  }
]

export default function Advantages() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef(null)

  // Animate title on mount
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          delay: 0.2
        }
      )
    }
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          delay: 0.4
        }
      )
    }
  }, [])

  // Animate cards on scroll
  useEffect(() => {
    const cards = cardsRef.current?.children
    if (!cards) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none none'
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div 
      ref={containerRef}
      className='bg-gradient-to-br from-[#0a0a0b] via-[#1a1b1f] to-[#0f1013] relative min-h-screen w-full py-20 md:py-28 flex flex-col items-center overflow-hidden'
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 
            ref={titleRef}
            className='text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 tracking-tight mb-4'
          >
            Why Choose Us
          </h2>
          <p 
            ref={subtitleRef}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-4 leading-relaxed"
          >
            We don&apos;t just deliver projects — we build lasting partnerships that drive your success
          </p>
        </div>

        {/* Advantages Grid */}
        <div 
          ref={cardsRef}
          className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <div
                key={advantage.id}
                className="max-w-screen-2xl mx-auto group relative"
              >
                <div className={`
                  relative h-full p-6 md:p-8 rounded-2xl 
                  bg-gradient-to-br from-white/5 to-white/0
                  border border-white/10
                  transform max-w-screen-2xl mx-auto transition-all duration-300
                  hover:scale-105 hover:shadow-2xl
                  hover:border-white/20
                  backdrop-blur-sm
                  overflow-hidden
                `}>
                  {/* Gradient overlay on hover */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${advantage.gradient} 
                    opacity-0 group-hover:opacity-10 
                    transition-opacity duration-300
                  `}></div>
                  
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex items-center mb-4">
                      <div className={`
                        w-14 h-14 rounded-xl bg-gradient-to-br ${advantage.gradient}
                        flex items-center justify-center
                        shadow-lg group-hover:shadow-2xl
                        transition-all duration-300
                        group-hover:scale-110 group-hover:rotate-3
                      `}>
                        <IconComponent className="text-2xl text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-light text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                      {advantage.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {advantage.description}
                    </p>

                    {/* Decorative line */}
                    <div className={`
                      mt-4 h-0.5 w-0 group-hover:w-full
                      bg-gradient-to-r ${advantage.gradient}
                      transition-all duration-500 ease-out
                    `}></div>
                  </div>

                  {/* Corner accent */}
                  <div className={`
                    absolute top-0 right-0 w-20 h-20 
                    bg-gradient-to-br ${advantage.gradient}
                    opacity-0 group-hover:opacity-20
                    blur-2xl rounded-full
                    transition-opacity duration-300
                  `}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
       
      </div>
    </div>
  )
}
