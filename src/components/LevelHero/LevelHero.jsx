import React, { useEffect, useState } from 'react'
import {
  Star,
  ClipboardCheck,
  Flame,
  Zap,
} from 'lucide-react'
import LevelBadgeHex from '../shared/LevelBadgeHex'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import styles from './LevelHero.module.css'

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

const LevelHero = ({ data }) => {
  const [animStart, setAnimStart] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimStart(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const xpCount = useCountUp(data.currentXP, 1200, animStart)
  const pct = data.xpPercent

  return (
    <article aria-labelledby="current-level-heading" className={styles.masterCard}>
      {/* Ambient background glow */}
      <div className={styles.cardAura} aria-hidden="true" />

      {/* Top Section: Level Badge + XP Counter */}
      <div className={styles.levelCardTop}>
        <div className={styles.levelMainInfo}>
          <div className={styles.badgeWrapper}>
            <LevelBadgeHex level={data.currentLevel || 5} size={76} />
          </div>

          <div className={styles.levelMeta}>
            <div id="current-level-heading" className={styles.xpBig}>
              {animStart ? xpCount.toLocaleString() : '0'} XP
            </div>
            <div className={styles.xpToNext}>
              to reach Level {String(data.nextLevel).padStart(2, '0')}
              <InfoTooltip text="XP helps you progress through VELOOP Rewards levels. As you reach new levels, you unlock exclusive rewards and higher cashout perks." />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className={styles.progressArea}>
        <div className={styles.progressLabels}>
          <span>{data.currentXP?.toLocaleString()} / {data.requiredXP?.toLocaleString()} XP</span>
          <span className={styles.progressPct}>{pct}%</span>
        </div>
        <div
          className={styles.progressBarTrack}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Progress to Level ${data.nextLevel}: ${pct}%`}
        >
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

      {/* Subtle Divider */}
      <div className={styles.divider} aria-hidden="true" />

      {/* Bottom Section: Integrated Today's Boost Telemetry */}
      <div className={styles.boostSection}>
        <div className={styles.boostHeader}>
          <div className={styles.boostTitleWrap}>
            <Zap size={13} className={styles.boostZap} aria-hidden="true" />
            <span className={styles.boostTitle}>TODAY'S BOOST</span>
          </div>
          <span className={styles.boostSubtitle}>Daily Overview</span>
        </div>

        <div className={styles.boostGrid}>
          <div className={styles.boostItem}>
            <div className={`${styles.boostIconWrap} ${styles.boostIconXP}`}>
              <Star size={15} color="#F5C842" aria-hidden="true" />
            </div>
            <span className={styles.boostLabel}>XP Earned</span>
            <span className={styles.boostVal}>215 XP</span>
          </div>

          <div className={styles.boostItem}>
            <div className={`${styles.boostIconWrap} ${styles.boostIconTasks}`}>
              <ClipboardCheck size={15} color="#3D9EFF" aria-hidden="true" />
            </div>
            <span className={styles.boostLabel}>Tasks Done</span>
            <span className={styles.boostVal}>4 / 8</span>
          </div>

          <div className={styles.boostItem}>
            <div className={`${styles.boostIconWrap} ${styles.boostIconStreak}`}>
              <Flame size={15} color="#FF5252" aria-hidden="true" />
            </div>
            <span className={styles.boostLabel}>Streak</span>
            <span className={styles.boostVal}>7 Days</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default LevelHero
