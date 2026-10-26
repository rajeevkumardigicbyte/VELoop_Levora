import React, { useEffect, useState, useRef } from 'react'
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
  const xpRemCount = useCountUp(data.xpRemaining, 1200, animStart)
  const pct = data.xpPercent

  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className="content-container">
        <div className={styles.heroInner}>
          {/* Left: Level + XP */}
          <div className={`${styles.heroLeft} animate-fadeInUp`}>
            <div className={styles.eyebrow}>
              <span className="ve-badge ve-badge-gold">⚡ Level Progression Hub</span>
              {onTriggerLevelUp && (
                <button
                  className="ve-btn ve-btn-ghost"
                  style={{ padding: '2px 10px', fontSize: '11px', marginLeft: '10px' }}
                  onClick={onTriggerLevelUp}
                  title="Demo trigger level-up celebration modal"
                >
                  🎉 Test Level Up
                </button>
              )}
            </div>
            <h1 className={styles.heroTitle}>
              Level Up Your <span className={styles.highlight}>Rewards</span>
            </h1>
            <p className={styles.heroSub}>
              Keep earning XP, unlock new tiers, and discover higher tier rewards and multipliers along the way.
            </p>

            {/* Level + XP block */}
            <div className={styles.levelBlock}>
              <div className={styles.levelBadgeWrap}>
                <div className={styles.levelBadge}>
                  <span className={styles.levelIcon}>{data.currentLevelData?.badge || '🥈'}</span>
                  <span className={styles.levelNum}>L{String(data.currentLevel).padStart(2, '0')}</span>
                </div>
                <div className={styles.levelInfo}>
                  <div className={styles.levelLabel}>Current Status</div>
                  <div className={styles.levelName}>{data.levelName}</div>
                  <div className={styles.levelXP}>
                    {animStart ? xpCount.toLocaleString() : '0'}{' '}
                    <span>/ {data.requiredXP.toLocaleString()} XP</span>
                    <InfoTooltip text="XP helps you progress through VELOOP Rewards levels. As you reach new levels, you unlock exclusive rewards, higher cashout perks, and bonus multipliers." />
                  </div>
                </div>
              </div>

              {/* XP Progress bar */}
              <div className={styles.progressSection}>
                <div className={styles.progressLabels}>
                  <span>Level {String(data.currentLevel).padStart(2, '0')}</span>
                  <span className={styles.pct}>{pct}%</span>
                  <span>Level {String(data.nextLevel).padStart(2, '0')}</span>
                </div>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressFill}
                    style={{
                      width: animStart ? `${pct}%` : '0%',
                      transition: animStart ? 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                    }}
                  >
                    <span className={styles.progressGlow} />
                  </div>
                </div>
                <div className={styles.progressRemaining}>
                  <span className="text-gold font-bold">
                    {animStart ? xpRemCount.toLocaleString() : data.xpRemaining.toLocaleString()} XP
                  </span>{' '}
                  needed to unlock Level {String(data.nextLevel).padStart(2, '0')} ({data.nextLevelName})
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Next Level Target Card */}
          <div className={`${styles.heroRight} animate-fadeInUp delay-200`}>
            <div className={styles.nextLevelCard}>
              <div className={styles.nextLevelHeader}>
                <span className={styles.nextLevelLabel}>Next Target Tier</span>
                <span className="ve-badge ve-badge-purple">Incoming Goal</span>
              </div>
              <div className={styles.levelArrow}>
                <div className={styles.tierPillCurrent}>
                  <span className={styles.tierPillLevel}>L{String(data.currentLevel).padStart(2, '0')}</span>
                  <span className={styles.tierPillName}>{data.levelName}</span>
                </div>
                <span className={styles.arrowIcon}>➔</span>
                <div className={styles.tierPillNext}>
                  <span className={styles.tierPillLevel}>L{String(data.nextLevel).padStart(2, '0')}</span>
                  <span className={styles.tierPillName}>{data.nextLevelName}</span>
                </div>
              </div>

              <div className={styles.rewardTeaser}>
                <div className={styles.rewardTeaserIconWrap}>
                  <span className={styles.rewardTeaserIcon}>{data.nextLevelData?.reward?.icon || '🎁'}</span>
                </div>
                <div className={styles.rewardTeaserDetails}>
                  <div className={styles.rewardTeaserLabel}>Target Reward Unlocked</div>
                  <div className={styles.rewardTeaserValue}>
                    {data.nextLevelData?.reward?.amount?.toLocaleString() || 500} {data.nextLevelData?.reward?.type || 'VEs'}
                  </div>
                </div>
              </div>

              <div className={styles.miniProgressWrap}>
                <div className={styles.miniProgress}>
                  <div
                    className={styles.miniProgressFill}
                    style={{
                      width: animStart ? `${pct}%` : '0%',
                      transition: animStart ? 'width 1.4s ease' : 'none',
                    }}
                  />
                </div>
                <div className={styles.miniProgressText}>
                  <span>Progress to unlock</span>
                  <span className="text-purple">{pct}% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LevelHero
