'use client'

import About from './components/Pages/About'
import Hero from './components/Pages/Hero'
import Keeper from './components/Pages/Keeper'


export default function Home () {

  return (
   <div className="min-h-screen">
    <Keeper />
    <About />
   </div>
  )
}
