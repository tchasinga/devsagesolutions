import Link from 'next/link'
import React from 'react'
import '../globals.css'

export default function Navbars() {
  return (
  <nav 
    className="fixed top-0 left-0 right-0 z-50  p-4 max-w-2/4 mx-auto  mt-5 rounded-full text-white"
    style={{
      backgroundColor: '#f5f5f5',
      background: 'rgba(255, 255, 255, 0)',
      backdropFilter: 'blur(5px)',
      WebkitBackdropFilter: 'blur(5px)',
      borderRadius: '100px',
      border: '1px solid rgba(255, 255, 255, 0.18)'
    }}
  >
    <div className="mx-auto py-4 p-8 flex justify-between items-center">
      <div className="flex justify-between items-center">
        <Link href="/">
         <h1 className='text-xl  font-bold'>DevSage Solutions</h1>
        </Link>
      </div>
      {/* nav links */}
      <div className="flex justify-between gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  </nav>
  )
}
