'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CountUp from 'react-countup'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)
  const leftContentRef = useRef(null)
  const imagesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left content on mount
      if (leftContentRef.current) {
        const children = Array.from(leftContentRef.current.children)
        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.3,
          }
        )
      }

      // Animate images with overlapping effect on mount
      if (imagesRef.current) {
        const images = Array.from(imagesRef.current.children)
        gsap.fromTo(
          images,
          {
            opacity: 0,
            scale: 0.8,
            rotation: -5,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: 'back.out(1.7)',
            delay: 0.5,
          }
        )

        // Floating animation for images (continuous)
        images.forEach((img, index) => {
          gsap.to(img, {
            y: index % 2 === 0 ? -15 : 15,
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: 1.5 + index * 0.2,
          })
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={heroRef}
      className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 md:px-8 lg:px-16 py-20 lg:py-0 gap-12 lg:gap-8"
    >
      {/* Left Side - Content */}
      <div
        ref={leftContentRef}
        className="flex flex-col justify-center space-y-8 lg:w-1/2 text-white z-10"
      >
        <div className="space-y-4">
          <div className="leading-tight flex flex-col gap-2">
            <h1 className="text-base font-light">Transform Your Business with</h1>
             <h3 className="text-blue-400 text-4xl font-bold tracking-tight">Digital Excellence</h3>
          </div>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
            We deliver cutting-edge solutions that drive growth, innovation, and
            success for businesses worldwide. Experience the future of technology
            with our expert team.
          </p>
        </div>

        {/* CountUp Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="flex flex-col">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">
              <CountUp end={500} duration={3} suffix="+" />
            </div>
            <p className="text-sm md:text-base text-gray-400 mt-2">Projects Completed</p>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">
              <CountUp end={200} duration={3} suffix="+" />
            </div>
            <p className="text-sm md:text-base text-gray-400 mt-2">Happy Clients</p>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">
              <CountUp end={98} duration={3} suffix="%" />
            </div>
            <p className="text-sm md:text-base text-gray-400 mt-2">Success Rate</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <button className="px-8 py-3 bg-blue-400 rounded-full font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side - Overlapping Images */}
      <div
        ref={imagesRef}
        className="relative lg:w-1/2 h-[500px] md:h-[600px] lg:h-[700px] w-full"
      >
        {/* Image 1 - Bottom/Back */}
        <div className="absolute bottom-0 left-0 w-[280px] md:w-[320px] lg:w-[380px] h-[400px] md:h-[450px] lg:h-[520px] z-0 transform rotate-[-8deg]">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
              alt="Business Solution 1"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Image 2 - Middle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[320px] lg:w-[380px] h-[400px] md:h-[450px] lg:h-[520px] z-10">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2015"
              alt="Business Solution 2"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Image 3 - Top/Front */}
        <div className="absolute top-0 right-0 w-[280px] md:w-[320px] lg:w-[380px] h-[400px] md:h-[450px] lg:h-[520px] z-20 transform rotate-[8deg]">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <Image
              src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940"
              alt="Business Solution 3"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
