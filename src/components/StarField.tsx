'use client'
import { useEffect, useState } from 'react'

function generateStars() {
  const stars = []
  const palette = ['#FF00FF', '#00FFFF', '#FFD700', '#FF6EC7', '#7CFFEA', '#FFFFFF']
  for (let i = 0; i < 300; i++) {
    const size = Math.random() * 3.2 + 2.2
    const animationType = Math.random()
    const color = palette[Math.floor(Math.random() * palette.length)]
    const glow = `${color}88`
    const isComet = Math.random() < 0.15
    stars.push({
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 4}s`,
      width: `${size}px`,
      height: `${size}px`,
      opacity: Math.random() * 0.35 + 0.65,
      animationDuration: `${Math.random() * 3 + 2}s`,
      animation: animationType > 0.75 ? 'float' : '',
      twinkleIntensity: Math.random() * 0.5 + 1.0,
      parallaxSpeed: Math.random() * 0.5 + 0.3,
      color,
      glow,
      type: isComet ? 'comet' : 'star',
      cometLength: isComet ? (Math.random() * 90 + 50) : 0,
      cometAngle: isComet ? (Math.random() * 40 - 20) : 0,
      cometOpacity: isComet ? (Math.random() * 0.5 + 0.35) : 0,
    })
  }
  return stars
}

function generateNebulae() {
  const nebulae = []
  for (let i = 0; i < 5; i++) {
    nebulae.push({
      top: `${Math.random() * 60}%`, // Keep them in the upper part of the screen
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 400 + 300}px`,
      height: `${Math.random() * 400 + 300}px`,
      color: Math.random() > 0.5 ? 'rgba(180, 0, 255, 0.12)' : 'rgba(0, 255, 255, 0.1)',
      animationDuration: `${Math.random() * 20 + 15}s`,
      animationDelay: `${Math.random() * 5}s`,
      parallaxSpeed: Math.random() * 0.3 + 0.1,
    })
  }
  return nebulae
}

function generatePlanets() {
  const planets = []
  for (let i = 0; i < 3; i++) {
    planets.push({
      top: `${Math.random() * 70 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      size: `${Math.random() * 60 + 40}px`,
      color: ['rgba(255, 0, 255, 0.3)', 'rgba(0, 255, 255, 0.25)', 'rgba(180, 0, 255, 0.28)'][i % 3],
      animationDuration: `${Math.random() * 30 + 20}s`,
      animationDelay: `${Math.random() * 5}s`,
      parallaxSpeed: Math.random() * 0.2 + 0.15,
      rotation: Math.random() * 360,
    })
  }
  return planets
}

function StarField() {
  const [stars, setStars] = useState<Array<any>>([])
  const [nebulae, setNebulae] = useState<Array<any>>([])
  const [planets, setPlanets] = useState<Array<any>>([])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setStars(generateStars())
    setNebulae(generateNebulae())
    setPlanets(generatePlanets())
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (stars.length === 0) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ backgroundColor: '#01010F' }}>
      {/* Layer 1: Farthest Stars (no parallax) */}
      {stars.slice(0, 55).map((star, i) => (
        <div
          key={`far-star-${i}`}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.width,
            height: star.height,
            opacity: star.opacity * 0.5,
            animationDelay: star.animationDelay,
            animation: `twinkle ${star.animationDuration} ease-in-out infinite`,
            background: `radial-gradient(circle at 30% 30%, ${star.color}, transparent 70%)`,
            boxShadow: `0 0 4px ${star.glow}, 0 0 12px ${star.glow}`,
            transform: 'scale(0.7)'
          }}
        />
      ))}

      {/* Layer 2: SVG Mountains with Neon Glow */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/2"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMax slice">
          <defs>
            <filter id="mountainGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#FF00FF" floodOpacity="0.3" />
              <feDropShadow dx="0" dy="0" stdDeviation="20" floodColor="#FF00FF" floodOpacity="0.2" />
            </filter>
          </defs>
          <path d="M-200,400 L250,150 L500,300 L750,100 L1000,250 L1250,120 L1640,400 Z" fill="none" stroke="#FF00FF" strokeWidth="2" filter="url(#mountainGlow)" />
          <path d="M-200,400 L300,200 L600,350 L850,150 L1100,300 L1350,180 L1640,400 Z" fill="rgba(255,0,255,0.05)" />
        </svg>
      </div>

      {/* Layer 3: Atmospheric Fog */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#01010F] to-transparent" style={{ transform: `translateY(${scrollY * 0.1}px)` }} />

      {/* Layer 4: Nebulae */}
      {nebulae.map((nebula, i) => (
        <div
          key={`nebula-${i}`}
          className="absolute rounded-full"
          style={{
            ...nebula,
            background: `radial-gradient(circle, ${nebula.color}, transparent 70%)`,
            filter: 'blur(80px)',
            animation: `float ${nebula.animationDuration} ease-in-out infinite`,
            transform: `translateY(${scrollY * nebula.parallaxSpeed}px) scale(${1 + scrollY * 0.0001})`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      ))}

      {/* Layer 5: Planets */}
      {planets.map((planet, i) => (
        <div
          key={`planet-${i}`}
          className="absolute rounded-full"
          style={{
            ...planet,
            background: `radial-gradient(circle at 30% 30%, ${planet.color}, transparent)`,
            boxShadow: `0 0 30px ${planet.color}, inset -10px -10px 20px rgba(0, 0, 0, 0.5)`,
            filter: 'blur(2px)',
            animation: `float ${planet.animationDuration} ease-in-out infinite`,
            transform: `translateY(${scrollY * planet.parallaxSpeed}px) rotate(${planet.rotation + scrollY * 0.05}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      ))}

      {/* Layer 6: Mid-ground Stars */}
      {stars.slice(55).map((star, i) => {
        const starLeft = parseFloat(star.left)
        const starTop = parseFloat(star.top)
        const distanceX = (mousePosition.x / window.innerWidth * 100 - starLeft)
        const distanceY = (mousePosition.y / window.innerHeight * 100 - starTop)
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        const isNearMouse = distance < 15
        const mouseTwinkle = isNearMouse ? 0.5 : 0

        if (star.type === 'comet') {
          return (
            <div key={`comet-${i}`} style={{ position: 'absolute', top: star.top, left: star.left }}>
              <div
                className="comet-tail"
                style={{
                  width: `${star.cometLength}px`,
                  height: '2px',
                  transform: `rotate(${star.cometAngle}deg) translateY(-50%)`,
                  transformOrigin: 'left center',
                  background: `linear-gradient(90deg, ${star.color} 0%, transparent 90%)`,
                  opacity: star.cometOpacity,
                  filter: `drop-shadow(0 0 6px ${star.glow})`,
                  animationDelay: star.animationDelay
                }}
              />
              <div
                className="star"
                style={{
                  width: star.width,
                  height: star.height,
                  transform: `translateY(${scrollY * star.parallaxSpeed}px)`,
                  animation: `twinkle ${star.animationDuration} ease-in-out infinite`,
                  background: `radial-gradient(circle at 30% 30%, ${star.color}, transparent 70%)`,
                  boxShadow: `0 0 8px ${star.glow}, 0 0 18px ${star.glow}`,
                  filter: `brightness(${star.twinkleIntensity + mouseTwinkle})`
                }}
              />
            </div>
          )
        }
        return (
          <div
            key={`mid-star-${i}`}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.width,
              height: star.height,
              animation: star.animation ? `twinkle ${star.animationDuration} ease-in-out infinite, ${star.animation} ${star.animationDuration} ease-in-out infinite` : `twinkle ${star.animationDuration} ease-in-out infinite`,
              filter: `brightness(${star.twinkleIntensity + mouseTwinkle})`,
              transform: `translateY(${scrollY * star.parallaxSpeed}px)`,
              transition: 'filter 0.3s ease-out, transform 0.1s ease-out',
              background: `radial-gradient(circle at 30% 30%, ${star.color}, transparent 70%)`,
              boxShadow: `0 0 6px ${star.glow}, 0 0 16px ${star.glow}`
            }}
          />
        )
      })}
    </div>
  )
}

export default StarField