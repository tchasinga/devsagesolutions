'use client'

import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FiInfo, FiAward, FiSettings, FiFileText } from 'react-icons/fi'
import { HiOutlineLightBulb, HiOutlineUsers, HiOutlineChartBar, HiOutlineCode, HiOutlineBadgeCheck } from 'react-icons/hi'

export default function About() {
  const [selectedSection, setSelectedSection] = useState('about')
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const cardsRef = useRef(null)

  const sections = {
    about: {
      title: 'About Us',
      icon: FiInfo,
      content: {
        title: 'About Us',
        description: 'We are a leading digital solutions company dedicated to transforming businesses through innovative technology and creative excellence.',
        features: [
          { icon: HiOutlineUsers, text: 'Expert Team of 50+ Professionals' },
          { icon: HiOutlineChartBar, text: '500+ Successful Projects Delivered' },
          { icon: HiOutlineLightBulb, text: 'Innovation-Driven Approach' },
          { icon: HiOutlineCode, text: 'Cutting-Edge Technology Stack' }
        ]
      }
    },
    why: {
      title: 'Why Choose Us',
      icon: FiAward,
      content: {
        title: 'Why Choose Us',
        description: 'We stand out through our commitment to excellence, client-centric approach, and proven track record of delivering exceptional results.',
        features: [
          { icon: HiOutlineBadgeCheck, text: 'Award-Winning Solutions' },
          { icon: HiOutlineUsers, text: 'Dedicated Support Team' },
          { icon: HiOutlineChartBar, text: 'Proven Track Record' },
          { icon: HiOutlineLightBulb, text: 'Innovative Solutions' }
        ]
      }
    },
    how: {
      title: 'How We Work',
      icon: FiSettings,
      content: {
        title: 'How We Work',
        description: 'Our streamlined process ensures transparency, efficiency, and exceptional results at every stage of your project.',
        features: [
          { icon: HiOutlineCode, text: 'Agile Methodology' },
          { icon: HiOutlineUsers, text: 'Collaborative Approach' },
          { icon: HiOutlineChartBar, text: 'Regular Progress Updates' },
          { icon: HiOutlineLightBulb, text: 'Continuous Improvement' }
        ]
      }
    },
    study: {
      title: 'Study Case',
      icon: FiFileText,
      content: {
        title: 'Study Case',
        description: 'Explore our portfolio of successful projects and see how we\'ve helped businesses achieve their digital transformation goals.',
        features: [
          { icon: HiOutlineChartBar, text: 'Real-World Results' },
          { icon: HiOutlineUsers, text: 'Client Success Stories' },
          { icon: HiOutlineCode, text: 'Technical Excellence' },
          { icon: HiOutlineLightBulb, text: 'Innovative Solutions' }
        ]
      }
    }
  }

  // Animate title change
  useEffect(() => {
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
          gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
          )
        }
      })
    }
  }, [selectedSection])

  // Animate content change
  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.3,
        onComplete: () => {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }
          )
        }
      })
    }
  }, [selectedSection])

  // Initial animation for cards
  useEffect(() => {
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children)
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          delay: 0.2
        }
      )
    }
  }, [])

  const currentSection = sections[selectedSection]
  const IconComponent = currentSection.icon

  return (
    <div className='bg-[#38393D] relative min-h-screen w-full bg-fixed object-fill py-20 flex items-center justify-center'>     
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-center">
          {/* Left Side - Title Section */}
          <div className="space-y-8 flex flex-col items-center lg:items-start">
            <div className="relative text-center lg:text-left">
              <h1 
                ref={titleRef}
                className='text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight border-b-2 border-white/30 pb-4 inline-block'
              >
                {currentSection.title}
              </h1>
            </div>

            {/* Section Selection Cards */}
            <div ref={cardsRef} className="grid grid-cols-2 gap-4 mt-12 w-full max-w-md">
              {Object.entries(sections).map(([key, section]) => {
                const SectionIcon = section.icon
                const isActive = selectedSection === key
                
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedSection(key)}
                    className={`
                      group relative p-6 rounded-2xl border-2 transition-all duration-300
                      ${isActive 
                        ? 'bg-white/10 border-white/50 cursor-pointer' 
                        : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/30 cursor-pointer'
                      }
                      transform hover:scale-105 active:scale-95
                    `}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className={`
                        p-3 rounded-xl transition-all duration-300
                        ${isActive 
                          ? 'bg-blue-400/20 text-blue-400' 
                          : 'bg-white/5 text-white/60 group-hover:text-white group-hover:bg-white/10'
                        }
                      `}>
                        <SectionIcon className="text-2xl md:text-3xl" />
                      </div>
                      <span className={`
                        text-sm md:text-base font-medium transition-colors duration-300
                        ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'}
                      `}>
                        {section.title}
                      </span>
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Side - Content Section */}
          <div 
            ref={contentRef}
            className="lg:sticky lg:top-20 space-y-8 flex items-center justify-center"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl w-full max-w-2xl">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="p-3 bg-blue-400/20 rounded-xl">
                  <IconComponent className="text-3xl text-blue-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white text-center lg:text-left">
                  {currentSection.content.title}
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 text-center lg:text-left">
                {currentSection.content.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentSection.content.features.map((feature, index) => {
                  const FeatureIcon = feature.icon
                  return (
                    <div
                      key={index}
                      className="group flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20"
                    >
                      <div className="p-2 bg-blue-400/20 rounded-lg group-hover:bg-blue-400/30 transition-colors">
                        <FeatureIcon className="text-xl text-blue-400" />
                      </div>
                      <span className="text-white/90 font-medium text-sm md:text-base">
                        {feature.text}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
