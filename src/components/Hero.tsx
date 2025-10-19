'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const hackathonDate = new Date('2024-02-15T09:00:00')
      const difference = +hackathonDate - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-space-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-dark/50 to-space-dark" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Main Title */}
        <h1 className="font-pixel text-4xl md:text-6xl lg:text-7xl text-white mb-6 neon-glow">
          STATUS{' '}
          <span className="text-neon-pink">CODE</span>{' '}
          <span className="text-neon-purple">1</span>
        </h1>
        
        {/* Subtitle */}
        <p className="font-pixel text-xl md:text-2xl text-neon-blue mb-12">
          Hack The Future. Build The Unknown.
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className="bg-space-light p-4 pixel-corners">
              <div className="font-pixel text-2xl md:text-3xl text-neon-pink">
                {String(value).padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-400 mt-1 capitalize">{key}</div>
            </div>
          ))}
        </div>

        {/* Main Character */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto mb-12">
          <Image
            src="/images/hero-character.png"
            alt="Pixel Art Character"
            fill
            className="object-contain animate-float"
            priority
          />
        </div>

        {/* CTA Buttons */}
        <div className="space-x-4 mb-12">
          <button className="font-pixel text-lg px-8 py-3 bg-neon-purple text-white hover:bg-neon-pink transition-colors duration-300 pixel-corners retro-shadow">
            Join Mission
          </button>
          <button className="font-pixel text-lg px-8 py-3 border-2 border-neon-blue text-neon-blue hover:bg-neon-blue/10 transition-colors duration-300 pixel-corners">
            Learn More
          </button>
        </div>

        {/* Quick Stats */}
        <div className="font-pixel text-neon-pink animate-pulse text-sm md:text-base">
          48 Hours • 200+ Hackers • $5000 in Prizes
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-space-dark to-transparent" />
    </section>
  )
}