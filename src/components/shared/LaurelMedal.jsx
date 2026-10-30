import React from 'react'

/**
 * LaurelMedal
 * Golden Laurel Star Trophy Medal matching Screen 3 from PDF Page 33.
 */
const LaurelMedal = ({ size = 110, className = '' }) => {
  return (
    <div
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'drop-shadow(0 6px 20px rgba(245, 200, 66, 0.45))',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id="medalGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4B8" />
            <stop offset="35%" stopColor="#F5C842" />
            <stop offset="75%" stopColor="#D4A017" />
            <stop offset="100%" stopColor="#8C6307" />
          </linearGradient>

          <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B61FF" />
            <stop offset="100%" stopColor="#4A2DC9" />
          </linearGradient>

          <radialGradient id="starCenterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFDE0" />
            <stop offset="100%" stopColor="#F5C842" />
          </radialGradient>
        </defs>

        {/* Backing Ribbons */}
        <path d="M42 70 L30 112 L48 102 L58 114 L54 75 Z" fill="url(#ribbonGrad)" opacity="0.85" />
        <path d="M78 70 L90 112 L72 102 L62 114 L66 75 Z" fill="url(#ribbonGrad)" opacity="0.85" />

        {/* Left Laurel Branch */}
        <g stroke="url(#medalGoldGrad)" strokeWidth="1.5" fill="url(#medalGoldGrad)">
          {/* Stem */}
          <path d="M60 92 C40 88 24 72 24 48 C24 38 28 28 36 22" fill="none" strokeWidth="2.5" strokeLinecap="round" />
          {/* Leaves */}
          <path d="M35 22 C32 16 38 12 43 16 C45 20 40 24 35 22 Z" />
          <path d="M28 32 C22 28 24 20 30 22 C34 25 32 32 28 32 Z" />
          <path d="M24 44 C17 42 17 34 23 34 C28 36 27 43 24 44 Z" />
          <path d="M23 58 C16 58 16 50 22 48 C27 49 27 57 23 58 Z" />
          <path d="M27 72 C22 75 20 68 25 64 C30 63 32 70 27 72 Z" />
          <path d="M36 84 C32 89 28 83 32 78 C36 76 40 82 36 84 Z" />
          <path d="M48 91 C45 97 40 92 43 87 C46 84 51 89 48 91 Z" />
        </g>

        {/* Right Laurel Branch */}
        <g stroke="url(#medalGoldGrad)" strokeWidth="1.5" fill="url(#medalGoldGrad)">
          {/* Stem */}
          <path d="M60 92 C80 88 96 72 96 48 C96 38 92 28 84 22" fill="none" strokeWidth="2.5" strokeLinecap="round" />
          {/* Leaves */}
          <path d="M85 22 C88 16 82 12 77 16 C75 20 80 24 85 22 Z" />
          <path d="M92 32 C98 28 96 20 90 22 C86 25 88 32 92 32 Z" />
          <path d="M96 44 C103 42 103 34 97 34 C92 36 93 43 96 44 Z" />
          <path d="M97 58 C104 58 104 50 98 48 C93 49 93 57 97 58 Z" />
          <path d="M93 72 C98 75 100 68 95 64 C90 63 88 70 93 72 Z" />
          <path d="M84 84 C88 89 92 83 88 78 C84 76 80 82 84 84 Z" />
          <path d="M72 91 C75 97 80 92 77 87 C74 84 69 89 72 91 Z" />
        </g>

        {/* Inner Medal Coin Disc */}
        <circle cx="60" cy="52" r="28" fill="#1C1F36" stroke="url(#medalGoldGrad)" strokeWidth="3" />
        <circle cx="60" cy="52" r="24" fill="none" stroke="url(#medalGoldGrad)" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />

        {/* 5-Point Center Star */}
        <polygon
          points="60,32 66,45 80,46 69,56 73,70 60,62 47,70 51,56 40,46 54,45"
          fill="url(#starCenterGlow)"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default LaurelMedal
