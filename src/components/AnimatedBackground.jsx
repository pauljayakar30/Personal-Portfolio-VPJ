import React from 'react'

const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <div key={i} className="particle"></div>
      ))}
      
      {/* Additional mesh gradient overlays */}
      <div className="mesh-gradient mesh-1"></div>
      <div className="mesh-gradient mesh-2"></div>
      <div className="mesh-gradient mesh-3"></div>
    </div>
  )
}

export default AnimatedBackground
