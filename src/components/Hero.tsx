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

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-space-pattern opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--neon-purple),0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(var(--neon-pink),0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(8,8,20,0.5)] to-[rgb(8,8,20)]" />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        {/* Main Title */}
        <h1 className="font-pixel text-4xl md:text-6xl lg:text-7xl text-white mb-4 neon-text glitch-effect">
          STATUS{' '}
          <span className="text-[rgb(var(--neon-pink))]">CODE</span>{' '}
          <span className="text-[rgb(var(--neon-purple))]">1</span>
        </h1>
        
        {/* Subtitle */}
        <p className="font-pixel text-xl md:text-2xl text-[rgb(var(--neon-blue))] mb-8 opacity-0 animate-[fadeIn_1s_ease-in_forwards_0.5s]">
          Build To Discover!
        </p>

        {/* Timer Label */}
        <p className="font-pixel text-lg text-white mb-4">
          Hacking ends in:
        </p>

        {/* Countdown Timer */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute inset-0 bg-[rgba(var(--neon-purple),0.03)] rounded-2xl backdrop-blur-xl"></div>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div 
                key={key} 
                className="group relative bg-[rgba(255,255,255,0.03)] rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--neon-purple),0.2)] to-[rgba(var(--neon-pink),0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-4 backdrop-blur-lg transform hover:scale-105 transition-all duration-500">
                  <div className="font-pixel text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--neon-purple))] to-[rgb(var(--neon-pink))] mb-1">
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-space-mono text-gray-300 uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                    {key}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[rgb(var(--neon-purple))] to-[rgb(var(--neon-pink))] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Character */}
        <div className="relative w-48 h-48 md:w-72 md:h-72 mx-auto mb-8">
          <Image
            src="/images/hero-character.png"
            alt="Pixel Art Character"
            fill
            className="object-contain animate-float"
            priority
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <button className="font-pixel text-base px-6 py-3 bg-[rgb(var(--neon-purple))] text-white hover:bg-[rgb(var(--neon-pink))] transition-all duration-300 pixel-border rounded-lg transform hover:scale-105 hover:rotate-1">
            Join Mission
          </button>
          <button className="font-pixel text-base px-6 py-3 border-2 border-[rgb(var(--neon-blue))] text-[rgb(var(--neon-blue))] hover:bg-[rgba(var(--neon-blue),0.1)] transition-all duration-300 pixel-border rounded-lg transform hover:scale-105 hover:-rotate-1">
            Learn More
          </button>
        </div>

        {/* Quick Stats */}
        <div className="font-space-mono text-[rgb(var(--neon-pink))] text-xs md:text-sm bg-[rgba(255,255,255,0.05)] backdrop-blur-sm px-4 py-2 rounded-full inline-block">
          <span className="inline-block hover:animate-[bounce_1s_infinite]">48 Hours</span> • 
          <span className="inline-block hover:animate-[bounce_1s_infinite]">200+ Hackers</span> • 
          <span className="inline-block hover:animate-[bounce_1s_infinite]">$5000 in Prizes</span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[rgb(8,8,20)] to-transparent" />
    </div>
  )
}