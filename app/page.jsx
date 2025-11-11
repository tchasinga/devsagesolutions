'use client'

import About from './components/Pages/About'
import Hero from './components/Pages/Hero'
import Keeper from './components/Pages/Keeper'
import ChatBot from './components/ChatBot'


export default function Home () {

  return (
   <div className="min-h-screen">
    <Keeper />
    <About />
    <ChatBot />
   </div>
  )
}
