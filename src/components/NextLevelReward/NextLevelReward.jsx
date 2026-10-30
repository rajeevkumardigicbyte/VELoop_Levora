import React, { useState } from 'react'
import { Coins, Gem, ArrowRight, Sparkles } from 'lucide-react'
import styles from './NextLevelReward.module.css'
import InfoTooltip from '../InfoTooltip/InfoTooltip'

const NextLevelReward = ({ data, onTriggerLevelUp }) => {
  const [isHovered, setIsHovered] = useState(false)
  const targetLevel = data.nextLevel || 5
  const pct = data.xpPercent

  return (
    <div
      className={`${styles.card} animate-fadeInUp`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header matching Screen 1 */}
      <div className={styles.header}>
        <div>
          <div className={styles.levelTag}>LEVEL {String(targetLevel).padStart(2, '0')} REWARDS</div>
          <h3 className={styles.mainHeading}>Amazing rewards await you!</h3>
        </div>
        <InfoTooltip text="Reach Level 05 to unlock this reward chest containing 500 VEs and 25 Gems. Values are credited automatically upon reaching the XP milestone." />
      </div>

      {/* Visual Chest + Purple Gems Centerpiece from Screen 1 */}
      <div className={styles.chestGraphicCenter}>
        <div className={styles.glowAura} />
        <div className={styles.chestArtwork}>
          <img
            src="/assets/safe-1.svg"
            alt="Level 05 Reward Chest"
            className={styles.chestImg}
          />
          <div className={styles.floatingGemCluster}>
            <span className={styles.gemSparkle}>
              <Gem size={18} color="#A08CFF" />
            </span>
            <span className={styles.gemSparkle} style={{ animationDelay: '0.4s' }}>
              <Sparkles size={16} color="#F5C842" />
            </span>
          </div>
        </div>

        <div className={styles.rewardSummaryRow}>
          <span className={styles.rewardPillGold}>
            <Coins size={14} color="#F5C842" /> +500 VEs
          </span>
          <span className={styles.rewardPillPurple}>
            <Gem size={14} color="#A08CFF" /> +25 Gems
          </span>
        </div>
      </div>

      {/* Progress towards unlock */}
      <div className={styles.progressWrap}>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: `${pct}%` }} />
        </div>
        <div className={styles.progressText}>
          <span>{pct}% Unlocked</span>
          <span className="text-gold font-bold">{data.xpRemaining?.toLocaleString()} XP remaining</span>
        </div>
      </div>

      {/* "View Rewards" Action Button from Screen 1 */}
      <div className={styles.ctaRow}>
        <button
          className="ve-btn ve-btn-gold"
          onClick={onTriggerLevelUp}
          style={{ width: '100%', padding: '13px' }}
        >
          View Rewards Preview <ArrowRight size={16} />
        </button>
      </div>

      {/* Shimmer overlay */}
      <div className={`${styles.shimmer} ${isHovered ? styles.shimmerActive : ''}`} />
    </div>
  )
}

export default NextLevelReward
