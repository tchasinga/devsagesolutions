import React from 'react'
import Navbars from '../Navbars'
import Hero from './Hero'
import Oneimg from '@/app/Image/img.jpeg'

export default function Keeper() {
  return (
    <div className='bg-gray-600 relative min-h-screen w-full max-w-full bg-fixed object-fill'
    style={{
        background: `linear-gradient(rgba(4, 5, 5, 0.801), rgba(0, 0, 0, 0.112)), url(${Oneimg.src}) center / cover no-repeat fixed`,
    }}
    >
              <Navbars />
              <Hero />
    </div>
  )
}
