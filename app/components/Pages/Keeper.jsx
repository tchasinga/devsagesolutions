import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbars from '../Navbars'
import Hero from './Hero'
import Oneimg from '@/app/Image/img.jpeg'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Keeper() {
  const backgroundRef = useRef(null)

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
    }, backgroundRef)

    // Cleanup function
    return () => ctx.revert()
  }, [])

  return (
    <div 
      ref={backgroundRef}
      className='bg-gray-600 relative min-h-screen w-full max-w-full bg-fixed object-fill'
      style={{
        background: `linear-gradient(rgba(4, 5, 5, 0.801), rgba(0, 0, 0, 0.112)), url(${Oneimg.src}) center / cover no-repeat fixed`,
      }}
    >
      <Hero />
    </div>
  )
}