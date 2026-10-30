import React from 'react'

/**
 * LevelBadgeHex
 * Pixel-perfect golden rounded hexagon badge matching Screen 1 from PDF Page 33.
 */
const LevelBadgeHex = ({ level = 5, size = 88, className = '' }) => {
  const levelStr = String(level).padStart(2, '0')

  return (
    <div
      className={className}
      style={{
        width: `${size}px`,
        height: `${size * 1.05}px`,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        filter: 'drop-shadow(0 4px 18px rgba(245, 184, 56, 0.38))',
      }}
    >
      <svg
        width={size}
        height={size * 1.05}
        viewBox="0 0 100 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          {/* Metallic Champagne Gold Border Gradient */}
          <linearGradient id="goldBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4BE" />
            <stop offset="25%" stopColor="#FFE27D" />
            <stop offset="65%" stopColor="#F5B838" />
            <stop offset="100%" stopColor="#C68A1B" />
          </linearGradient>

          {/* Inner Dark Core Gradient */}
          <linearGradient id="badgeCoreGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#1E2338" />
            <stop offset="100%" stopColor="#0D101E" />
          </linearGradient>

          {/* Subtle Top Inner Highlight */}
          <linearGradient id="goldRimHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          {/* Gold Text Gradient */}
          <linearGradient id="goldTextGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#FFF2A8" />
            <stop offset="100%" stopColor="#F5C842" />
          </linearGradient>
        </defs>

        {/* Outer Hexagon Shape */}
        <polygon
          points="50,3 93,26 93,79 50,102 7,79 7,26"
          stroke="url(#goldBorderGrad)"
          strokeWidth="4"
          strokeLinejoin="round"
          fill="url(#badgeCoreGrad)"
        />

        {/* Inner Subtle Gold Accent Hexagon Ring */}
        <polygon
          points="50,9 87,30 87,75 50,96 13,75 13,30"
          stroke="url(#goldBorderGrad)"
          strokeWidth="1.2"
          strokeOpacity="0.45"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Upper Highlight Gloss */}
        <polygon
          points="50,9 87,30 87,52 50,58 13,52 13,30"
          fill="url(#goldRimHighlight)"
        />
      </svg>

      {/* Content overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          paddingBottom: '2px',
        }}
      >
        <span
          style={{
            fontSize: `${Math.round(size * 0.12)}px`,
            fontWeight: 800,
            letterSpacing: '0.18em',
            color: '#F5C842',
            textTransform: 'uppercase',
            marginBottom: `${Math.round(size * 0.02)}px`,
            textShadow: '0 1px 3px rgba(0,0,0,0.8)',
          }}
        >
          LEVEL
        </span>
        <span
          style={{
            fontSize: `${Math.round(size * 0.38)}px`,
            fontWeight: 900,
            lineHeight: 1,
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 12px rgba(245,200,66,0.5)',
          }}
        >
          {levelStr}
        </span>
      </div>
    </div>
  )
}

export default LevelBadgeHex
