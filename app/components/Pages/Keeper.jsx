import React, { useRef, useEffect, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbars from '../Navbars'
import Hero from './Hero'
import Oneimg from '@/app/Image/img.jpeg'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Helper function to generate random number
const random = (min, max) => Math.random() * (max - min) + min

export default function Keeper() {
  const backgroundRef = useRef(null)
  const animatedOverlayRef = useRef(null)
  const particlesRef = useRef(null)

  // Generate particle data once
  const particles = useMemo(() => {
    return Array.from({ length: 12 }, () => ({
      width: random(4, 12),
      height: random(4, 12),
      left: random(0, 100),
      top: random(0, 100),
      r: random(59, 147),
      g: random(130, 200),
      b: random(246, 255),
      opacity: random(0.3, 0.6),
      shadow: random(10, 20),
    }))
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create the parallax animation
      gsap.to(backgroundRef.current, {
        backgroundPosition: '50% 100%', // Moves background upward on scroll
        ease: 'none',
        scrollTrigger: {
          trigger: backgroundRef.current,
          start: 'top bottom', // When top of element hits bottom of viewport
          end: 'bottom top', // When bottom of element hits top of viewport
          scrub: 1, // Smoothly follows scroll position (1 second delay)
          markers: false, // Set to true for debugging
        }
      })

      // Animated gradient overlay - breathing effect
      if (animatedOverlayRef.current) {
        gsap.to(animatedOverlayRef.current, {
          opacity: 0.3,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        })
      }

      // Animate floating particles
      if (particlesRef.current) {
        const particles = Array.from(particlesRef.current.children)
        particles.forEach((particle, index) => {
          // Random starting positions
          const randomX = gsap.utils.random(-50, 50)
          const randomY = gsap.utils.random(-50, 50)
          const randomDuration = gsap.utils.random(3, 6)
          const randomDelay = index * 0.5

          // Floating animation
          gsap.to(particle, {
            x: randomX,
            y: randomY,
            duration: randomDuration,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: randomDelay,
          })

          // Opacity pulse
          gsap.to(particle, {
            opacity: gsap.utils.random(0.2, 0.6),
            duration: gsap.utils.random(2, 4),
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: randomDelay,
          })
        })
      }
    }, backgroundRef)

    // Cleanup function
    return () => ctx.revert()
  }, [])

  return (
    <div 
      ref={backgroundRef}
      className='bg-gray-600 relative min-h-screen w-full max-w-full bg-fixed object-fill overflow-hidden'
      style={{
        background: `linear-gradient(rgba(4, 5, 5, 0.801), rgba(0, 0, 0, 0.112)), url(${Oneimg.src}) center / cover no-repeat fixed`,
      }}
    >
      {/* Animated gradient overlay */}
      <div
        ref={animatedOverlayRef}
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
        }}
      />

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              background: `rgba(${particle.r}, ${particle.g}, ${particle.b}, ${particle.opacity})`,
              boxShadow: `0 0 ${particle.shadow}px rgba(59, 130, 246, 0.5)`,
            }}
          />
        ))}
      </div>

      <Hero />
    </div>
  )
}