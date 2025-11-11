'use client'

import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  FiGlobe, 
  FiLayers, 
  FiMonitor, 
  FiShoppingCart, 
  FiSmartphone, 
  FiHome, 
  FiTool, 
  FiCreditCard,
  FiX,
  FiArrowRight,
  FiCheck
} from 'react-icons/fi'
import { 
  HiOutlineCode, 
  HiOutlineLightningBolt
} from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 'website',
    title: 'Website',
    icon: FiGlobe,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Professional, responsive websites that make a lasting impression and drive results.',
    details: {
      overview: 'Transform your online presence with stunning, high-performance websites designed to captivate your audience and convert visitors into customers.',
      features: [
        'Fully Responsive Design',
        'SEO Optimized',
        'Fast Loading Times',
        'Modern UI/UX',
        'Cross-Browser Compatible',
        'Mobile-First Approach'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js']
    }
  },
  {
    id: 'website-admin',
    title: 'Website & Admin Dashboard',
    icon: FiLayers,
    gradient: 'from-purple-500 to-pink-500',
    description: 'Complete web solutions with powerful admin dashboards for seamless content management.',
    details: {
      overview: 'Get a complete web solution with a beautiful public-facing website and a powerful admin dashboard to manage all aspects of your business.',
      features: [
        'User Authentication System',
        'Content Management System',
        'Analytics Dashboard',
        'Role-Based Access Control',
        'Real-Time Updates',
        'Data Visualization'
      ],
      technologies: ['React', 'Next.js', 'MongoDB', 'Firebase', 'Chart.js']
    }
  },
  {
    id: 'web-app',
    title: 'Web Applications',
    icon: FiMonitor,
    gradient: 'from-green-500 to-emerald-500',
    description: 'Custom web applications built to streamline your business processes and boost productivity.',
    details: {
      overview: 'Build powerful, scalable web applications tailored to your specific business needs. From SaaS platforms to enterprise solutions.',
      features: [
        'Custom Functionality',
        'API Integration',
        'Real-Time Features',
        'Scalable Architecture',
        'Cloud Deployment',
        'Security First'
      ],
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'AWS']
    }
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Platform',
    icon: FiShoppingCart,
    gradient: 'from-orange-500 to-red-500',
    description: 'Full-featured e-commerce platforms that turn browsers into buyers and maximize sales.',
    details: {
      overview: 'Launch your online store with a complete e-commerce solution featuring secure payments, inventory management, and seamless shopping experiences.',
      features: [
        'Product Management',
        'Shopping Cart & Checkout',
        'Payment Gateway Integration',
        'Order Management',
        'Inventory Tracking',
        'Customer Reviews'
      ],
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis', 'AWS S3']
    }
  },
  {
    id: 'mobile-app',
    title: 'Mobile App (Android & iOS)',
    icon: FiSmartphone,
    gradient: 'from-indigo-500 to-purple-500',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on any device.',
    details: {
      overview: 'Reach your customers wherever they are with beautifully designed mobile applications for both Android and iOS platforms.',
      features: [
        'Native Performance',
        'Cross-Platform Support',
        'Push Notifications',
        'Offline Capabilities',
        'App Store Optimization',
        'Regular Updates'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    }
  },
  {
    id: 'real-estate',
    title: 'Real Estate Platform',
    icon: FiHome,
    gradient: 'from-teal-500 to-cyan-500',
    description: 'Comprehensive real estate platforms connecting buyers, sellers, and agents seamlessly.',
    details: {
      overview: 'Create a powerful real estate platform with property listings, virtual tours, agent management, and advanced search capabilities.',
      features: [
        'Property Listings',
        'Advanced Search Filters',
        'Virtual Tours',
        'Agent Management',
        'Lead Generation',
        'Document Management'
      ],
      technologies: ['Next.js', 'Google Maps API', 'MongoDB', 'Cloudinary', 'Stripe', 'Mpesa']
    }
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    icon: FiTool,
    gradient: 'from-yellow-500 to-orange-500',
    description: 'Ongoing support and maintenance to keep your digital products running smoothly.',
    details: {
      overview: 'Ensure your digital products stay updated, secure, and performant with our comprehensive maintenance and support services.',
      features: [
        'Regular Updates',
        'Security Patches',
        'Performance Optimization',
        'Bug Fixes',
        '24/7 Monitoring',
        'Technical Support'
      ],
      technologies: ['DevOps', 'CI/CD', 'Monitoring Tools', 'Backup Systems']
    }
  },
  {
    id: 'pos',
    title: 'POS Platform',
    icon: FiCreditCard,
    gradient: 'from-rose-500 to-pink-500',
    description: 'Point of Sale systems that streamline transactions and manage your business operations.',
    details: {
      overview: 'Modern POS solutions that handle sales, inventory, payments, and reporting all in one integrated platform.',
      features: [
        'Transaction Processing',
        'Inventory Management',
        'Sales Reporting',
        'Multi-Payment Options',
        'Receipt Generation',
        'Employee Management'
      ],
      technologies: ['React', 'Node.js', 'Payment APIs', 'Print APIs', 'Cloud Sync']
    }
  }
]

export default function Service() {
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)
  const modalRef = useRef(null)

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
  }, [])

  // Animate service cards on scroll
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
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Modal animations
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.2)' }
      )
    }
  }, [isModalOpen])

  const handleServiceClick = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  // Handle body overflow when modal opens/closes
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const closeModal = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        setIsModalOpen(false)
        setSelectedService(null)
      }
    })
  }

  return (
    <div 
      ref={containerRef}
      className='bg-gradient-to-br from-[#0a0a0b] via-[#1f2023] to-[#0a0a0b] relative min-h-screen w-full py-16 md:py-20 flex flex-col items-center overflow-hidden'
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16 w-full relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 
            ref={titleRef}
            className='text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 tracking-tight mb-4'
          >
            Our Services
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-4">
            Cutting-edge solutions tailored to elevate your digital presence
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="group relative cursor-pointer"
              >
                <div className={`
                  relative h-full p-6 md:p-8 rounded-2xl 
                  bg-gradient-to-br ${service.gradient} 
                  transform transition-all duration-300
                  hover:scale-105 hover:shadow-2xl hover:shadow-${service.gradient.split(' ')[1]}/50
                  border border-white/10 backdrop-blur-sm
                  overflow-hidden
                `}>
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-3xl text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-light text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-white/80 group-hover:text-white transition-colors duration-300">
                      <span className="text-sm font-medium">Learn more</span>
                      <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className={`
              relative max-w-4xl w-full max-h-[90vh] overflow-y-auto
              bg-gradient-to-br from-[#1a1b1f] to-[#0f1013] 
              rounded-3xl border border-white/10 shadow-2xl
              p-8 md:p-12
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
            >
              <FiX className="text-xl" />
            </button>

            {/* Modal Content */}
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-start gap-6">
                <div className={`
                  w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService.gradient}
                  flex items-center justify-center flex-shrink-0
                `}>
                  {React.createElement(selectedService.icon, { className: "text-3xl text-white" })}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {selectedService.title}
                  </h2>
                  <p className="text-gray-400 text-lg">
                    {selectedService.description}
                  </p>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <HiOutlineLightningBolt className="text-blue-400" />
                  Overview
                </h3>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {selectedService.details.overview}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FiCheck className="text-green-400" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.details.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
                    >
                      <div className={`
                        w-6 h-6 rounded-full bg-gradient-to-br ${selectedService.gradient}
                        flex items-center justify-center flex-shrink-0
                      `}>
                        <FiCheck className="text-white text-sm" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <HiOutlineCode className="text-purple-400" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.details.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`
                        px-4 py-2 rounded-full text-sm font-medium
                        bg-gradient-to-r ${selectedService.gradient}
                        text-white
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className={`
                  w-full py-4 px-6 rounded-xl font-semibold text-white
                  bg-gradient-to-r ${selectedService.gradient}
                  hover:shadow-lg hover:scale-105
                  transition-all duration-300
                  flex items-center justify-center gap-2
                `}>
                  Get Started
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
