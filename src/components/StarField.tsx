'use client'
import { useEffect, useState } from 'react'

function generateStars() {
  const stars = []
  for (let i = 0; i < 75; i++) {
    const size = Math.random() * 1 + 1; // Random size between 1-2px
    stars.push({
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 4}s`,
      size: `${size}px`,
      opacity: Math.random() * 0.5 + 0.3, // Random opacity between 0.3-0.8
    })
  }
  return stars
}

function StarField() {
  const [stars, setStars] = useState<Array<{ top: string; left: string; animationDelay: string; size: string; opacity: number }>>([])

  useEffect(() => {
    setStars(generateStars())
  }, [])

  if (stars.length === 0) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.animationDelay,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default StarField