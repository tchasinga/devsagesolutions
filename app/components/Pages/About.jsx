'use client'

import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FiInfo, FiAward, FiSettings, FiFileText } from 'react-icons/fi'
import { HiOutlineLightBulb, HiOutlineUsers, HiOutlineChartBar, HiOutlineCode, HiOutlineBadgeCheck } from 'react-icons/hi'

export default function About() {
  const [selectedSection, setSelectedSection] = useState('about')
  const [isAnimating, setIsAnimating] = useState(false)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const cardsRef = useRef(null)
  const containerRef = useRef(null)

  const sections = {
    about: {
      title: 'About Us',
      icon: FiInfo,
      content: {
        title: 'About Our Company',
        description: 'We are a leading digital solutions company dedicated to transforming businesses through innovative technology and creative excellence. Our team combines technical expertise with creative vision to deliver exceptional results.',
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
        title: 'Why We Stand Out',
        description: 'We stand out through our commitment to excellence, client-centric approach, and proven track record of delivering exceptional results that drive real business growth.',
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
        title: 'Our Process',
        description: 'Our streamlined process ensures transparency, efficiency, and exceptional results at every stage of your project through collaborative partnership.',
        features: [
          { icon: HiOutlineCode, text: 'Agile Methodology' },
          { icon: HiOutlineUsers, text: 'Collaborative Approach' },
          { icon: HiOutlineChartBar, text: 'Regular Progress Updates' },
          { icon: HiOutlineLightBulb, text: 'Continuous Improvement' }
        ]
      }
    },
    study: {
      title: 'Case Studies',
      icon: FiFileText,
      content: {
        title: 'Success Stories',
        description: 'Explore our portfolio of successful projects and see how we\'ve helped businesses achieve their digital transformation goals with measurable results.',
        features: [
          { icon: HiOutlineChartBar, text: 'Real-World Results' },
          { icon: HiOutlineUsers, text: 'Client Success Stories' },
          { icon: HiOutlineCode, text: 'Technical Excellence' },
          { icon: HiOutlineLightBulb, text: 'Innovative Solutions' }
        ]
      }
    }
  }

  const handleSectionChange = (key) => {
    if (isAnimating || selectedSection === key) return
    
    setIsAnimating(true)
    setSelectedSection(key)
    
    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

  // Animate title change
  useEffect(() => {
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 10 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.4, 
              ease: 'power2.out',
              delay: 0.1
            }
          )
        }
      })
    }
  }, [selectedSection])

  // Animate content change with staggered elements
  useEffect(() => {
    if (contentRef.current) {
      const contentElements = contentRef.current.children
      
      gsap.to(contentElements, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in',
        onComplete: () => {
          gsap.fromTo(
            contentElements,
            { opacity: 0, y: 20 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.5, 
              stagger: 0.08,
              ease: 'power2.out',
              delay: 0.1
            }
          )
        }
      })
    }
  }, [selectedSection])

  // Initial animation for cards with more natural timing
  useEffect(() => {
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children)
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.4)',
          delay: 0.3
        }
      )
    }
  }, [])

  const currentSection = sections[selectedSection]
  const IconComponent = currentSection.icon

  return (
    <div 
      id="about"
      ref={containerRef}
      className='bg-gradient-to-br from-gray-800 via-[#38393D] to-gray-900 relative min-h-screen w-full py-16 md:py-20 flex items-center justify-center overflow-hidden'
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-cyan-400 rounded-full blur-2xl"></div>
      </div>
     
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-center">
          {/* Left Side - Navigation */}
          <div className="space-y-10 flex flex-col items-center lg:items-start">
            <div className="relative text-center lg:text-left">
              <h1 
                ref={titleRef}
                className='text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight pb-4 inline-block'
              >
                {currentSection.title}
              </h1>
              <div className="h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 mt-2 w-3/4 mx-auto lg:mx-0"></div>
            </div>

            {/* Section Selection Cards */}
            <div ref={cardsRef} className="grid grid-cols-2 gap-5 w-full max-w-md">
              {Object.entries(sections).map(([key, section]) => {
                const SectionIcon = section.icon
                const isActive = selectedSection === key
                
                return (
                  <button
                    key={key}
                    onClick={() => handleSectionChange(key)}
                    disabled={isAnimating}
                    className={`
                      group relative p-5 rounded-xl border transition-all duration-300
                      transform hover:scale-105 active:scale-98
                      ${isActive 
                        ? 'bg-white/15 border-blue-400/40  cursor-default' 
                        : 'bg-white/8 border-white/15 hover:bg-white/12 hover:border-white/25 cursor-pointer shadow-md hover:shadow-lg'
                      }
                      ${isAnimating ? 'pointer-events-none' : ''}
                    `}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className={`
                        p-3 rounded-lg transition-all duration-300 transform
                        ${isActive 
                          ? 'bg-blue-400/25 text-blue-400 scale-110' 
                          : 'bg-white/10 text-white/70 group-hover:text-white group-hover:bg-white/15 group-hover:scale-105'
                        }
                      `}>
                        <SectionIcon className="text-xl md:text-2xl" />
                      </div>
                      <span className={`
                        text-sm font-medium transition-colors duration-300 text-center leading-tight
                        ${isActive ? 'text-white font-semibold' : 'text-white/80 group-hover:text-white'}
                      `}>
                        {section.title}
                      </span>
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    )}
                    
                    {/* Hover glow effect */}
                    <div className={`
                      absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
                      ${isActive 
                        ? 'opacity-100' 
                        : 'group-hover:opacity-100'
                      }
                      ${isActive 
                        ? 'bg-gradient-to-br from-blue-400/10 to-teal-400/10' 
                        : 'bg-gradient-to-br from-blue-400/5 to-teal-400/5'
                      }
                    `}></div>
                  </button>
                )
              })}
            </div>

            {/* Progress indicator */}
            <div className="flex gap-2 mt-4">
              {Object.keys(sections).map((key, index) => (
                <div
                  key={key}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    selectedSection === key 
                      ? 'bg-blue-400 w-6' 
                      : 'bg-white/20 w-2 hover:w-3 cursor-pointer'
                  }`}
                  onClick={() => handleSectionChange(key)}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Content Section */}
          <div 
            ref={contentRef}
            className="lg:sticky lg:top-20 space-y-8 flex items-center justify-center"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/15 shadow-xl w-full max-w-2xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-400/25 to-teal-400/25 rounded-xl border border-blue-400/20">
                  <IconComponent className="text-2xl md:text-3xl text-blue-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white text-center lg:text-left bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                  {currentSection.content.title}
                </h2>
              </div>
              
              <p className="text-base md:text-lg text-white/85 leading-relaxed mb-8 text-center lg:text-left font-light">
                {currentSection.content.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentSection.content.features.map((feature, index) => {
                  const FeatureIcon = feature.icon
                  return (
                    <div
                      key={index}
                      className="group flex items-center gap-4 p-4 rounded-lg bg-white/8 hover:bg-white/12 transition-all duration-300 border border-white/10 hover:border-white/20 transform hover:translate-x-1"
                    >
                      <div className="p-2 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-md group-hover:from-blue-400/25 group-hover:to-teal-400/25 transition-all duration-300">
                        <FeatureIcon className="text-lg text-blue-400" />
                      </div>
                      <span className="text-white/90 font-medium text-sm md:text-base flex-1">
                        {feature.text}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Call to action */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                  Learn More About {currentSection.title}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}