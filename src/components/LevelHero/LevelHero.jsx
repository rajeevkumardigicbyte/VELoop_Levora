import React, { useEffect, useState } from 'react'
import {
  Bell,
  Star,
  ClipboardCheck,
  Flame,
  Tv,
  CalendarCheck,
  Users,
  Magnet,
  Gamepad2,
  ArrowRight,
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
            Good Morning, VeLooper!
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
            <Bell size={18} className={styles.bellIcon} />
            <span className={styles.notifBadge}>1</span>
          </button>
        </div>
      </div>

      {/* Main Level Progress Card (Screen 1) */}
      <div className={styles.levelCard}>
        <div className={styles.levelCardTop}>
          <div className={styles.levelMainInfo}>
            <div className={styles.badgeWrapper}>
              <LevelBadgeHex level={data.currentLevel || 5} size={82} />
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
              <Star size={18} color="#F5C842" />
            </div>
            <span className={styles.boostLabel}>XP Earned</span>
            <span className={styles.boostVal}>215 XP</span>
          </div>

          <div className={styles.boostItem}>
            <div className={`${styles.boostIconWrap} ${styles.boostIconTasks}`}>
              <ClipboardCheck size={18} color="#3D9EFF" />
            </div>
            <span className={styles.boostLabel}>Tasks Done</span>
            <span className={styles.boostVal}>4 / 8</span>
          </div>

          <div className={styles.boostItem}>
            <div className={`${styles.boostIconWrap} ${styles.boostIconStreak}`}>
              <Flame size={18} color="#FF5252" />
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
            <ArrowRight size={15} />
          </a>
        </div>

        <div className={styles.quickTilesGrid}>
          {[
            { id: 'watch',  icon: Tv,            name: 'Watch & Earn', color: '#7B61FF', link: '#earn' },
            { id: 'tasks',  icon: CalendarCheck, name: 'Daily Tasks',  color: '#3D9EFF', link: '#earn' },
            { id: 'refer',  icon: Users,         name: 'Refer & Earn', color: '#2ECC71', link: '#earn' },
            { id: 'game',   icon: Magnet,        name: 'XP Catcher',   color: '#F5C842', link: '#arcade' },
            { id: 'mini',   icon: Gamepad2,      name: 'Mini Games',   color: '#A08CFF', link: '#arcade' },
            { id: 'streak', icon: Flame,         name: 'Streak Bonus', color: '#FF5252', link: '#earn' },
          ].map((tile) => {
            const IconComp = tile.icon
            return (
              <a key={tile.id} href={tile.link} className={styles.quickTile}>
                <div
                  className={styles.quickTileIcon}
                  style={{
                    background: `${tile.color}15`,
                    borderColor: `${tile.color}35`,
                  }}
                >
                  <IconComp size={20} color={tile.color} />
                </div>
                <span className={styles.quickTileName}>{tile.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LevelHero
