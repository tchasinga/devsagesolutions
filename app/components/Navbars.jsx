'use client'

import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'
import '../globals.css'

export default function Navbars() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')
  const navRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Animate navbar on mount
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      )
    }
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)', delay: 0.4 }
      )
    }
  }, [])

  const navItems = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '/about', label: 'About', id: 'about' },
    { href: '/services', label: 'Services', id: 'services' },
    { href: '/contact', label: 'Contact', id: 'contact' },
  ]

  const handleLinkClick = (id) => {
    setActiveLink(id)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'py-2 mt-3 mx-4 lg:mx-8 rounded-2xl shadow-2xl' 
            : 'py-3 mt-5 mx-4 lg:mx-8 rounded-2xl shadow-xl'
        }`}
        style={{
          background: isScrolled 
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.12) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.08) 100%)',
          backdropFilter: 'blur(24px) saturate(200%)',
          WebkitBackdropFilter: 'blur(24px) saturate(200%)',
          border: isScrolled 
            ? '1px solid rgba(255, 255, 255, 0.25)'
            : '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: isScrolled 
            ? '0 8px 32px 0 rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)'
            : '0 4px 24px 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.12), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)'
        }}
      >
        <div className={`mx-auto flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'px-6 py-2' : 'px-8 py-3'
        }`}>
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="group relative"
              onClick={() => handleLinkClick('home')}
            >
              <div className="flex items-center gap-3">
                <div 
                  ref={logoRef}
                  className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-blue-400 to-teal-400 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 overflow-hidden"
                >
                  {/* Animated background shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="text-white font-bold text-base relative z-10">DS</span>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-blue-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <h1 className={`font-bold bg-gradient-to-r from-white via-blue-50 to-teal-50 bg-clip-text text-transparent transition-all duration-300 ${
                    isScrolled ? 'text-lg' : 'text-xl'
                  } group-hover:from-blue-300 group-hover:via-cyan-300 group-hover:to-teal-300`}>
                    DevSage Solutions
                  </h1>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <HiOutlineSparkles className="text-blue-400 text-xs" />
                    <span className="text-[10px] text-blue-300 font-medium">Innovation</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleLinkClick(item.id)}
                className={`relative px-5 py-2.5 rounded-xl font-medium transition-all duration-300 group ${
                  activeLink === item.id
                    ? 'text-white'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  {item.label}
                </span>
                
                {/* Active/Hover Background */}
                <div 
                  className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    activeLink === item.id
                      ? 'bg-gradient-to-r from-blue-500/95 via-cyan-500/90 to-teal-400/95 shadow-lg shadow-blue-500/30 scale-100'
                      : 'bg-white/0 group-hover:bg-white/10 group-hover:scale-105'
                  }`}
                />
                
                {/* Active indicator */}
                {activeLink === item.id && (
                  <>
                    <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-teal-300 to-transparent rounded-full"></div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-teal-300 rounded-full animate-pulse shadow-lg shadow-teal-300/50"></div>
                  </>
                )}
                
                {/* Hover glow effect */}
                {activeLink !== item.id && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-400/0 to-teal-400/0 group-hover:from-blue-500/10 group-hover:via-blue-400/10 group-hover:to-teal-400/10 transition-all duration-300 blur-sm"></div>
                )}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/get-started"
              className="ml-3 px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 hover:from-blue-500 hover:via-cyan-500 hover:to-teal-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95 border border-white/20 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <HiOutlineSparkles className="text-sm group-hover:rotate-180 transition-transform duration-500" />
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 text-white hover:scale-110 active:scale-95 relative overflow-hidden group"
          >
            <span className="relative z-10">
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-teal-400/0 group-hover:from-blue-500/20 group-hover:to-teal-400/20 transition-all duration-300"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 pb-6' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pt-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleLinkClick(item.id)}
                className={`block px-5 py-3.5 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group ${
                  activeLink === item.id
                    ? 'bg-gradient-to-r from-blue-500/25 via-cyan-500/20 to-teal-400/25 text-white border border-white/25 shadow-lg'
                    : 'text-white/85 hover:text-white hover:bg-white/10 border border-transparent'
                }`}
              >
                <div className="flex items-center justify-between relative z-10">
                  <span className="flex items-center gap-2">
                    {item.label}
                  </span>
                  {activeLink === item.id && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse shadow-lg shadow-teal-400/50"></div>
                    </div>
                  )}
                </div>
                {/* Active indicator line */}
                {activeLink === item.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-teal-400 rounded-r-full"></div>
                )}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <Link
              href="/get-started"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-6 py-4 text-center rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 hover:from-blue-500 hover:via-cyan-500 hover:to-teal-400 transition-all duration-300 mt-4 border border-white/20 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started
                <HiOutlineSparkles className="text-sm" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Background Overlay for Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}