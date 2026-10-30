import React, { useEffect, useState } from 'react'
import styles from './LevelHero.module.css'
import InfoTooltip from '../InfoTooltip/InfoTooltip'

const useCountUp = (target, duration = 1200, start = false) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start || !target) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

const LevelHero = ({ data, onTriggerLevelUp }) => {
  const [animStart, setAnimStart] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimStart(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const xpCount = useCountUp(data.currentXP, 1200, animStart)
  const pct = data.xpPercent

  return (
    <section className={styles.hero}>
      {/* Top Greeting Bar (Screen 1) */}
      <div className={styles.greetingBar}>
        <div>
          <h1 className={styles.greetingTitle}>
            Good Morning, VeLooper! 👋
          </h1>
          <p className={styles.greetingSub}>
            Level up your journey and unlock epic rewards every day.
          </p>
        </div>
        <div className={styles.greetingActions}>
          <button
            className={styles.notificationBtn}
            onClick={onTriggerLevelUp}
            title="Preview Level Up Celebration"
            aria-label="Notification"
          >
            🔔 <span className={styles.notifBadge}>1</span>
          </button>
        </div>
      </div>

      {/* Main Level Progress Card (Screen 1) */}
      <div className={styles.levelCard}>
        <div className={styles.levelCardTop}>
          <div className={styles.levelMainInfo}>
            <div className={styles.badgeWrapper}>
              <div className={styles.badgeShield}>
                <img
                  src={data.currentLevelData?.badgeUrl || '/assets/lvl-5.svg'}
                  alt={`Level ${data.currentLevel} Badge`}
                  className={styles.shieldImg}
                />
                <div className={styles.shieldOverlayText}>
                  <span className={styles.shieldLabel}>LEVEL</span>
                  <span className={styles.shieldNumber}>
                    {String(data.currentLevel).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.levelMeta}>
              <div className={styles.xpBig}>
                {animStart ? xpCount.toLocaleString() : '0'} XP
              </div>
              <div className={styles.xpToNext}>
                to reach Level {String(data.nextLevel).padStart(2, '0')}
                <InfoTooltip text="XP helps you progress through VELOOP Rewards levels. As you reach new levels, you unlock exclusive rewards and higher cashout perks." />
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar (Screen 1) */}
        <div className={styles.progressArea}>
          <div className={styles.progressLabels}>
            <span>{data.currentXP?.toLocaleString()} / {data.requiredXP?.toLocaleString()} XP</span>
            <span className={styles.progressPct}>{pct}%</span>
          </div>
          <div className={styles.progressBarTrack}>
            <div
              className={styles.progressBarFill}
              style={{
                width: animStart ? `${pct}%` : '0%',
                transition: animStart ? 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              }}
            >
              <span className={styles.progressBarGlow} />
            </div>
          </div>
        </div>
      </div>

      {/* Today's Boost Card (Screen 1) */}
      <div className={styles.boostCard}>
        <div className={styles.boostHeader}>
          <span className={styles.boostTitle}>⚡ TODAY'S BOOST</span>
          <span className={styles.boostSubtitle}>Daily Overview</span>
        </div>
        <div className={styles.boostGrid}>
          <div className={styles.boostItem}>
            <div className={`${styles.boostIconWrap} ${styles.boostIconXP}`}>
              <span>⭐</span>
            </div>
            <span className={styles.boostLabel}>XP Earned</span>
            <span className={styles.boostVal}>215 XP</span>
          </div>

          <div className={styles.boostItem}>
            <div className={`${styles.boostIconWrap} ${styles.boostIconTasks}`}>
              <span>📋</span>
            </div>
            <span className={styles.boostLabel}>Tasks Done</span>
            <span className={styles.boostVal}>4 / 8</span>
          </div>

          <div className={styles.boostItem}>
            <div className={`${styles.boostIconWrap} ${styles.boostIconStreak}`}>
              <span>🔥</span>
            </div>
            <span className={styles.boostLabel}>Streak</span>
            <span className={styles.boostVal}>7 Days</span>
          </div>
        </div>
      </div>

      {/* Earn More 6-Tile Grid (Screen 1) */}
      <div className={styles.earnMoreSection}>
        <div className={styles.earnMoreHeader}>
          <div>
            <h3 className={styles.earnMoreTitle}>EARN MORE</h3>
            <p className={styles.earnMoreSub}>Explore fun activities and earn exciting rewards.</p>
          </div>
          <a href="#earn" className={styles.earnMoreArrowBtn} title="View all earning activities">
            ➔
          </a>
        </div>

        <div className={styles.quickTilesGrid}>
          {[
            { id: 'watch',  icon: '📺', name: 'Watch & Earn', color: '#7B61FF', link: '#earn' },
            { id: 'tasks',  icon: '📋', name: 'Daily Tasks',  color: '#3D9EFF', link: '#earn' },
            { id: 'refer',  icon: '👥', name: 'Refer & Earn', color: '#2ECC71', link: '#earn' },
            { id: 'game',   icon: '🧲', name: 'XP Catcher',   color: '#F5C842', link: '#arcade' },
            { id: 'mini',   icon: '🎮', name: 'Mini Games',   color: '#A08CFF', link: '#arcade' },
            { id: 'streak', icon: '🔥', name: 'Streak Bonus', color: '#FF5252', link: '#earn' },
          ].map((tile) => (
            <a key={tile.id} href={tile.link} className={styles.quickTile}>
              <div
                className={styles.quickTileIcon}
                style={{
                  background: `${tile.color}15`,
                  borderColor: `${tile.color}40`,
                }}
              >
                <span>{tile.icon}</span>
              </div>
              <span className={styles.quickTileName}>{tile.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LevelHero
