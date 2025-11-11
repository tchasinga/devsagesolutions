'use client'

import React, { useState, useRef, useEffect } from 'react'
import { FiSend, FiX, FiMessageCircle, FiLoader } from 'react-icons/fi'
import { gsap } from 'gsap'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi there! 👋 I'm your AI assistant for DevSage Solutions. I can help you learn about our company, services, and what we do. What would you like to know?",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const chatContainerRef = useRef(null)
  const buttonRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
    // Animate new messages
    if (messages.length > 0) {
      const lastMessage = document.querySelector('.message-item:last-child')
      if (lastMessage) {
        gsap.fromTo(
          lastMessage,
          { opacity: 0, y: 10, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'back.out(1.2)' }
        )
      }
    }
  }, [messages])

  useEffect(() => {
    if (isOpen && chatContainerRef.current) {
      gsap.fromTo(
        chatContainerRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: 'back.out(1.2)' }
      )
    }
  }, [isOpen])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Prepare conversation history for API
      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }))

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          conversationHistory: conversationHistory
        }),
      })

      const data = await response.json()

      if (response.ok) {
        const aiMessage = {
          role: 'assistant',
          content: data.response,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiMessage])
      } else {
        throw new Error(data.error || 'Failed to get response')
      }
    } catch (error) {
      console.error('Error:', error)
      const errorMessage = {
        role: 'assistant',
        content: "I'm sorry, I encountered an error. Please try again in a moment.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  return (
    <>
      {/* Chat Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 
          w-14 h-14 md:w-16 md:h-16 rounded-full
          cursor-pointer
          text-white shadow-2xl hover:shadow-blue-500/50
          transition-all duration-300 transform hover:scale-110 active:scale-95
          flex items-center justify-center
          ${isOpen ? 'rotate-90' : 'rotate-0'}
        `}
        style={{
          backgroundColor: '#f5f5f5',
          background: 'rgba(255, 255, 255, 0)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          borderRadius: '100px',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <FiX className="text-2xl" />
        ) : (
          <FiMessageCircle className="text-2xl" />
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white"></span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatContainerRef}
          className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50 
                     w-[calc(100vw-2rem)] md:w-96 h-[calc(100vh-6rem)] md:h-[600px] 
                     max-h-[600px] max-w-[calc(100vw-2rem)] md:max-w-[calc(100vw-3rem)]
                     bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl
                     border border-white/20 flex flex-col
                     overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <FiMessageCircle className="text-white text-xl" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="text-white font-semibold">DevSage Assistant</h3>
                <p className="text-white/80 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                  Online • Ready to help
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message-item flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`
                    max-w-[80%] rounded-2xl px-4 py-3 shadow-sm
                    ${message.role === 'user'
                      ? 'bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-br-sm'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm'
                    }
                  `}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                    {message.content}
                  </p>
                  <span
                    className={`
                      text-xs mt-1 block
                      ${message.role === 'user' ? 'text-white/70' : 'text-gray-500'}
                    `}
                  >
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                    <span className="text-sm text-gray-600 ml-2">Typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about DevSage Solutions..."
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:border-transparent text-sm
                         placeholder-gray-400"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`
                  px-4 py-3 rounded-xl
                  bg-gradient-to-r from-blue-500 to-teal-500
                  text-white font-medium
                  transition-all duration-200
                  disabled:opacity-50 disabled:cursor-not-allowed
                  hover:shadow-lg active:scale-95
                  flex items-center justify-center
                `}
                aria-label="Send message"
              >
                <FiSend className="text-lg" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Ask me anything about our company, services, or expertise
            </p>
          </div>
        </div>
      )}
    </>
  )
}

