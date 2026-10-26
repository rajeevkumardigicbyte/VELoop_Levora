import React, { useState } from 'react'
import styles from './NextLevelReward.module.css'
import InfoTooltip from '../InfoTooltip/InfoTooltip'

const NextLevelReward = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false)
  const reward = data.nextLevelData?.reward
  const pct = data.xpPercent

  return (
    <div
      className={`${styles.card} animate-fadeInUp`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className={styles.header}>
        <div>
          <div className={styles.label}>NEXT LEVEL REWARD</div>
          <div className={styles.sublabel}>
            Reach Level {String(data.nextLevel).padStart(2, '0')} to unlock
          </div>
        </div>
        <InfoTooltip text="The displayed reward is associated with the next level according to the current reward configuration. Values shown are development placeholders until official backend reward rules are connected." />
      </div>

      {/* Lock icon + reward */}
      <div className={styles.rewardCenter}>
        <div className={`${styles.lockRing} ${isHovered ? styles.lockRingHover : ''}`}>
          <div className={styles.lockIcon}>🔒</div>
        </div>
        <div className={styles.rewardAmount}>
          <span className={styles.rewardIcon}>{reward?.icon || '💰'}</span>
          <span className={styles.rewardValue}>{reward?.amount?.toLocaleString() || 500}</span>
          <span className={styles.rewardType}>{reward?.type || 'VEs'}</span>
        </div>
        <div className={styles.demoLabel}>Demo value — pending backend approval</div>
      </div>

      {/* Progress towards unlock */}
      <div className={styles.progressWrap}>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: `${pct}%` }} />
        </div>
        <div className={styles.progressText}>
          <span>{pct}% unlocked</span>
          <span className="text-gold">{data.xpRemaining.toLocaleString()} XP remaining</span>
        </div>
      </div>

      {/* Helper text */}
      <div className={styles.ctaRow}>
        <span className={styles.ctaText}>
          ⚡ Earn XP via games, tasks & referrals to claim this vault reward!
        </span>
      </div>

      {/* Shimmer overlay */}
      <div className={`${styles.shimmer} ${isHovered ? styles.shimmerActive : ''}`} />
    </div>
  )
}

export default NextLevelReward
