import React from 'react'

/**
 * LaurelBranch (Left or Right)
 * Used to frame the Level Up Badge in Screen 5.
 */
export const LaurelBranch = ({ side = 'left', size = 56, className = '' }) => {
  const isRight = side === 'right'

  return (
    <div
      className={className}
      style={{
        width: `${size}px`,
        height: `${size * 1.5}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: isRight ? 'scaleX(-1)' : 'none',
        filter: 'drop-shadow(0 2px 10px rgba(245, 200, 66, 0.5))',
      }}
    >
      <svg
        width={size}
        height={size * 1.5}
        viewBox="0 0 60 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id="wreathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4B8" />
            <stop offset="40%" stopColor="#F5C842" />
            <stop offset="85%" stopColor="#D4A017" />
            <stop offset="100%" stopColor="#8C6307" />
          </linearGradient>
        </defs>

        <path
          d="M50 85 C30 80 12 60 12 36 C12 24 16 14 26 6"
          fill="none"
          stroke="url(#wreathGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <g fill="url(#wreathGrad)" stroke="#161827" strokeWidth="0.8">
          <path d="M26 6 C22 1 30 -2 34 2 C36 6 30 9 26 6 Z" />
          <path d="M18 16 C12 12 16 5 22 7 C26 10 23 17 18 16 Z" />
          <path d="M13 28 C6 25 8 18 14 19 C19 22 17 29 13 28 Z" />
          <path d="M12 42 C4 41 5 33 11 33 C16 34 16 42 12 42 Z" />
          <path d="M15 56 C8 58 7 50 13 47 C18 48 19 56 15 56 Z" />
          <path d="M22 69 C16 73 13 65 19 61 C24 60 27 67 22 69 Z" />
          <path d="M33 79 C28 85 23 78 28 73 C33 71 37 77 33 79 Z" />
          <path d="M46 84 C42 90 37 84 41 79 C45 77 49 82 46 84 Z" />
        </g>
      </svg>
    </div>
  )
}

export default LaurelBranch
