'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  FiGlobe, 
  FiMail, 
  FiPhone, 
  FiMessageCircle,
  FiCode,
  FiShoppingCart,
  FiSmartphone,
  FiHome,
  FiTool,
  FiExternalLink
} from 'react-icons/fi'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  { name: 'Website', icon: FiGlobe, gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Web Applications', icon: FiCode, gradient: 'from-purple-500 to-pink-500' },
  { name: 'E-commerce Platform', icon: FiShoppingCart, gradient: 'from-green-500 to-emerald-500' },
  { name: 'Mobile App (Android & iOS)', icon: FiSmartphone, gradient: 'from-orange-500 to-red-500' },
  { name: 'Real Estate Platform', icon: FiHome, gradient: 'from-indigo-500 to-purple-500' },
  { name: 'Maintenance', icon: FiTool, gradient: 'from-yellow-500 to-orange-500' },
]

const contactMethods = [
  {
    type: 'Phone',
    value: '+254700751245',
    icon: FiPhone,
    link: 'tel:+254700751245',
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Call us anytime'
  },
  {
    type: 'WhatsApp',
    value: '+254700751245',
    icon: FiMessageCircle,
    link: 'https://wa.me/254700751245',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Chat with us on WhatsApp'
  },
  {
    type: 'Email',
    value: 'tchasingajacques@gmail.com',
    icon: FiMail,
    link: 'mailto:tchasingajacques@gmail.com',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Send us an email'
  },
]

export default function Contact() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const companyInfoRef = useRef(null)
  const servicesRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
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

      // Animate subtitle
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

      // Animate company info
      if (companyInfoRef.current) {
        gsap.fromTo(
          companyInfoRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.4)',
            delay: 0.6,
            scrollTrigger: {
              trigger: companyInfoRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        )
      }

      // Animate services
      if (servicesRef.current) {
        const serviceCards = Array.from(servicesRef.current.children)
        gsap.fromTo(
          serviceCards,
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
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: servicesRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        )
      }

      // Animate contact cards
      if (contactRef.current) {
        const contactCards = Array.from(contactRef.current.children)
        gsap.fromTo(
          contactCards,
          {
            opacity: 0,
            x: -50,
            scale: 0.95
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: contactRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div 
      ref={containerRef}
      className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0b] via-[#1a1b1f] to-[#0f1013] relative w-full py-20 md:py-28 overflow-hidden'
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="px-4 md:px-8 lg:px-16 w-full max-w-screen-2xl mx-auto relative z-10">
        {/* 4 Container Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          
          {/* Container 1: Header Section */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="text-center w-full">
              <h1 
                ref={titleRef}
                className='text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-4'
              >
                Get In Touch
              </h1>
              <p 
                ref={subtitleRef}
                className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-4 leading-relaxed"
              >
                Ready to transform your business? Let&apos;s build something amazing together
              </p>
            </div>
          </div>

          {/* Container 2: Company Info Card */}
          <div 
            ref={companyInfoRef}
            className="flex items-center justify-center"
          >
            <div className="relative group w-full h-full">
              <div className="
                relative p-8 md:p-12 rounded-3xl 
                bg-gradient-to-br from-white/5 to-white/0
                border border-white/10
                backdrop-blur-sm
                overflow-hidden
                hover:border-white/20
                transition-all duration-300
                h-full flex flex-col justify-center
              ">
                {/* Gradient overlay on hover */}
                <div className="
                  absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="
                      w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500
                      flex items-center justify-center
                      shadow-2xl
                      group-hover:scale-110 group-hover:rotate-3
                      transition-all duration-300
                    ">
                      <FiGlobe className="text-3xl text-white" />
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                    DevSage Solutions
                  </h2>

                  <div className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <a 
                      href="https://devsagesolutions.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-lg md:text-xl font-medium"
                    >
                      <span>devsagesolutions.vercel.app</span>
                      <FiExternalLink className="text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Container 3: Services Section */}
          <div className="flex items-center justify-center">
            <div className="w-full h-full">
              <h3 className="text-3xl md:text-4xl font-light text-white text-center mb-8 md:mb-12">
                What We Do
              </h3>
              <div 
                ref={servicesRef}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
              >
                {services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <div
                      key={index}
                      className="group relative"
                    >
                      <div className={`
                        relative h-full p-6 rounded-2xl 
                        bg-gradient-to-br from-white/5 to-white/0
                        border border-white/10
                        transform transition-all duration-300
                        hover:scale-105 hover:shadow-2xl
                        hover:border-white/20
                        backdrop-blur-sm
                        overflow-hidden
                        flex flex-col items-center justify-center
                        text-center
                      `}>
                        {/* Gradient overlay on hover */}
                        <div className={`
                          absolute inset-0 bg-gradient-to-br ${service.gradient} 
                          opacity-0 group-hover:opacity-10 
                          transition-opacity duration-300
                        `}></div>

                        <div className="relative z-10">
                          <div className={`
                            w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient}
                            flex items-center justify-center
                            shadow-lg group-hover:shadow-2xl
                            transition-all duration-300
                            group-hover:scale-110 group-hover:rotate-3
                            mb-4 mx-auto
                          `}>
                            <IconComponent className="text-2xl text-white" />
                          </div>
                          <p className="text-white text-sm md:text-base font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                            {service.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Container 4: Contact Methods + CTA Section */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-light text-white text-center mb-12">
                Contact Us
              </h3>
              <div 
                ref={contactRef}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
              >
                {contactMethods.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <a
                      key={index}
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group relative block"
                    >
                      <div className={`
                        relative h-full p-8 rounded-2xl 
                        bg-gradient-to-br from-white/5 to-white/0
                        border border-white/10
                        transform transition-all duration-300
                        hover:scale-105 hover:shadow-2xl
                        hover:border-white/20
                        backdrop-blur-sm
                        overflow-hidden
                      `}>
                        {/* Gradient overlay on hover */}
                        <div className={`
                          absolute inset-0 bg-gradient-to-br ${contact.gradient} 
                          opacity-0 group-hover:opacity-10 
                          transition-opacity duration-300
                        `}></div>

                        <div className="relative z-10">
                          <div className={`
                            w-16 h-16 rounded-xl bg-gradient-to-br ${contact.gradient}
                            flex items-center justify-center
                            shadow-lg group-hover:shadow-2xl
                            transition-all duration-300
                            group-hover:scale-110 group-hover:rotate-3
                            mb-6
                          `}>
                            <IconComponent className="text-2xl text-white" />
                          </div>

                          <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                            {contact.type}
                          </h4>

                          <p className="text-gray-300 text-base mb-2 group-hover:text-white transition-colors duration-300">
                            {contact.value}
                          </p>

                          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                            {contact.description}
                          </p>

                          {/* Decorative line */}
                          <div className={`
                            mt-4 h-0.5 w-0 group-hover:w-full
                            bg-gradient-to-r ${contact.gradient}
                            transition-all duration-500 ease-out
                          `}></div>
                        </div>

                        {/* Corner accent */}
                        <div className={`
                          absolute top-0 right-0 w-20 h-20 
                          bg-gradient-to-br ${contact.gradient}
                          opacity-0 group-hover:opacity-20
                          blur-2xl rounded-full
                          transition-opacity duration-300
                        `}></div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12 md:mt-16">
              <p className="text-gray-400 text-lg md:text-xl mb-6">
                Do you need a professional software & digital service?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+254700751245"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/254700751245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-semibold text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
                >
                  WhatsApp Us
                </a>
                <a
                  href="mailto:tchasingajacques@gmail.com"
                  className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
