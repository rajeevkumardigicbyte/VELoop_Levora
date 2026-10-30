import React, { useEffect, useRef } from 'react'
import { ArrowLeft, Clock, Zap } from 'lucide-react'
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

  const veGain = Math.max(1, Math.floor(score / 15))

  return (
    <div className={styles.gamePlayWrapper}>
      {/* HUD Header from Screen 2 */}
      <div className={styles.gameHudTop}>
        <button
          className={styles.backBtn}
          onClick={onEndGame}
          title="Exit game"
          aria-label="Exit game"
        >
          <ArrowLeft size={16} />
        </button>
        <div className={styles.gameHudTitleGroup}>
          <span className={styles.gameHudTitle}>XP CATCHER ⓘ</span>
          <span className={styles.gameHudSub}>Catch XP orbs & coins</span>
        </div>
        <div className={styles.timerBadge}>
          <Clock size={13} style={{ display: 'inline', marginRight: '4px' }} />
          00:{String(timeLeft).padStart(2, '0')}
        </div>
      </div>

      {/* Game arena */}
      <div
        ref={containerRef}
        className={styles.gameArena}
        style={{ width: `${GAME_WIDTH}px`, height: `${GAME_HEIGHT}px` }}
        onMouseMove={handlePointerMove}
        onTouchMove={handlePointerMove}
      >
        {/* Falling Items */}
        {coins.map((item) => (
          <div
            key={item.id}
            className={`${styles.fallingItem} ${styles[item.type]}`}
            style={{
              transform: `translate(${item.x}px, ${item.y}px)`,
            }}
          >
            {item.type === 'xp' && (
              <div className={styles.orbXP}>
                <span>XP</span>
              </div>
            )}
            {item.type === 'coin' && (
              <div className={styles.orbCoin}>
                <span>V</span>
              </div>
            )}
            {item.type === 'gem' && (
              <div className={styles.orbGem}>
                <span>💎</span>
              </div>
            )}
          </div>
        ))}

        {/* Golden Hoop / Basket Net Collector */}
        <div
          className={styles.collectorCart}
          style={{
            transform: `translateX(${collectorX}px)`,
            width: `${COLLECTOR_WIDTH}px`,
          }}
        >
          <div className={styles.hoopRim}>
            <div className={styles.hoopNet} />
          </div>
        </div>
      </div>

      {/* Bottom Score HUD from Screen 2 */}
      <div className={styles.gameScoreBar}>
        <div className={styles.scoreLead}>YOUR SCORE</div>
        <div className={styles.scoreValueBig}>{score}</div>
        <div className={styles.scoreBadgesRow}>
          <span className={styles.scoreBadgeVE}>🟡 +{veGain} VEs</span>
          <span className={styles.scoreBadgeMult}>
            <Zap size={13} style={{ display: 'inline', marginRight: '4px' }} />
            2X Multiplier
          </span>
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
