import React, { useEffect, useRef } from 'react'
import styles from './PlayAndEarn.module.css'

const GamePlay = ({
  score,
  timeLeft,
  coins,
  collectorX,
  GAME_WIDTH,
  GAME_HEIGHT,
  COLLECTOR_WIDTH,
  moveCollector,
  setCollectorPos,
  onEndGame,
}) => {
  const containerRef = useRef(null)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault()
        moveCollector('left')
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault()
        moveCollector('right')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [moveCollector])

  // Mouse / Touch drag navigation within container
  const handlePointerMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0]?.clientX)
    if (clientX !== undefined) {
      const relX = clientX - rect.left
      setCollectorPos(relX - COLLECTOR_WIDTH / 2)
    }
  }

  // Timer color
  const timerColorClass = timeLeft <= 5 ? styles.timerUrgent : timeLeft <= 10 ? styles.timerWarn : ''

  return (
    <div className={styles.gamePlayWrapper}>
      {/* HUD Header */}
      <div className={styles.gameHud}>
        <div className={styles.hudScore}>
          <span className={styles.hudLabel}>SCORE</span>
          <span className={styles.hudScoreVal}>{score}</span>
        </div>
        <div className={`${styles.hudTimer} ${timerColorClass}`}>
          <span className={styles.hudLabel}>TIME LEFT</span>
          <span className={styles.hudTimerVal}>0:{String(timeLeft).padStart(2, '0')}</span>
        </div>
        <button
          className="ve-btn ve-btn-outline"
          style={{ padding: '4px 12px', fontSize: '11px' }}
          onClick={onEndGame}
          title="Exit game early"
        >
          End Run
        </button>
      </div>

      {/* Game arena */}
      <div
        ref={containerRef}
        className={styles.gameArena}
        style={{ width: `${GAME_WIDTH}px`, height: `${GAME_HEIGHT}px` }}
        onMouseMove={handlePointerMove}
        onTouchMove={handlePointerMove}
      >
        {/* Falling Coins and Gems */}
        {coins.map((coin) => (
          <div
            key={coin.id}
            className={`${styles.coinItem} ${coin.isGem ? styles.gemItem : ''}`}
            style={{
              transform: `translate(${coin.x}px, ${coin.y}px)`,
            }}
          >
            <img
              src={coin.isGem ? '/assets/gem.svg' : '/assets/ve.svg'}
              alt={coin.isGem ? 'Gem' : 'VE'}
              className={styles.fallingSvg}
            />
          </div>
        ))}

        {/* Collector Cart */}
        <div
          className={styles.collectorCart}
          style={{
            transform: `translateX(${collectorX}px)`,
            width: `${COLLECTOR_WIDTH}px`,
          }}
        >
          <div className={styles.collectorTray}>
            <span className={styles.collectorGlow} />
            <img src="/assets/cart-side.svg" alt="Collector" className={styles.cartSvg} />
            <span className={styles.collectorText}>CATCH</span>
          </div>
        </div>
      </div>

      {/* Mobile touch controls */}
      <div className={styles.mobileControls}>
        <button
          className={styles.controlBtn}
          onClick={() => moveCollector('left')}
          aria-label="Move Left"
        >
          ◀ LEFT
        </button>
        <span className={styles.controlHint}>Or drag finger inside arena</span>
        <button
          className={styles.controlBtn}
          onClick={() => moveCollector('right')}
          aria-label="Move Right"
        >
          RIGHT ▶
        </button>
      </div>
    </div>
  )
}

export default GamePlay
