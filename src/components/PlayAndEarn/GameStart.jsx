import React from 'react'
import { Gamepad2, Clock, Zap, Play, ShieldCheck, Trophy, Sparkles } from 'lucide-react'
import styles from './PlayAndEarn.module.css'

const GameStart = ({ onStart }) => {
  return (
    <div className={styles.gameStartScreen}>
      {/* Top Header Row with Badges */}
      <div className={styles.startHeaderRow}>
        <div className={styles.gameBadge}>
          <Gamepad2 size={12} className={styles.badgeIcon} />
          <span>REFLEX ARCADE</span>
        </div>
        <div className={styles.verifiedBadge}>
          <ShieldCheck size={12} className={styles.verifiedIcon} />
          <span>Fair-Play Certified</span>
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div className={styles.gameTitleGroup}>
        <h3 className={styles.gameTitle}>
          XP CATCHER <span className={styles.arcadeEdition}>BLITZ</span>
        </h3>
        <p className={styles.gameSubtitle}>
          Rapid reflex mini-game — maneuver the golden magnetic hoop to collect falling XP orbs, VE coins, and prismatic gems before time expires.
        </p>
      </div>

      {/* High-Tech Spec HUD Bar */}
      <div className={styles.specHudRow}>
        <div className={styles.specHudItem}>
          <Clock size={14} className={styles.specIconGold} />
          <div className={styles.specItemText}>
            <span className={styles.specVal}>20s Blitz</span>
            <span className={styles.specLabel}>Round Timer</span>
          </div>
        </div>
        <div className={styles.specHudDivider} />
        <div className={styles.specHudItem}>
          <Gamepad2 size={14} className={styles.specIconCyan} />
          <div className={styles.specItemText}>
            <span className={styles.specVal}>Drag / Arrows</span>
            <span className={styles.specLabel}>Controls</span>
          </div>
        </div>
        <div className={styles.specHudDivider} />
        <div className={styles.specHudItem}>
          <Zap size={14} className={styles.specIconPurple} />
          <div className={styles.specItemText}>
            <span className={styles.specVal}>+150 XP Max</span>
            <span className={styles.specLabel}>Potential Yield</span>
          </div>
        </div>
      </div>

      {/* Visual Yield Matrix: 3 Glowing Interactive Chips (Zero Emojis) */}
      <div className={styles.yieldMatrixWrap}>
        <span className={styles.matrixHeading}>COLLECTIBLE TARGETS & VALUE MATRIX</span>
        <div className={styles.yieldGrid}>
          {/* XP Orb Chip */}
          <div className={styles.yieldChip}>
            <div className={styles.chipOrbXP}>XP</div>
            <div className={styles.chipInfo}>
              <span className={styles.chipValue}>+10 XP pts</span>
              <span className={styles.chipDesc}>Progression energy</span>
            </div>
          </div>

          {/* VE Coin Chip */}
          <div className={styles.yieldChip}>
            <div className={styles.chipCoinVE}>VE</div>
            <div className={styles.chipInfo}>
              <span className={styles.chipValue}>+5 VE Coins</span>
              <span className={styles.chipDesc}>Reward tokens</span>
            </div>
          </div>

          {/* Prismatic Gem Chip */}
          <div className={styles.yieldChip}>
            <div className={styles.chipGem}>◆</div>
            <div className={styles.chipInfo}>
              <span className={styles.chipValue}>+25 Bonus</span>
              <span className={styles.chipDesc}>Rare multiplier</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action CTA & Certified Skill Guarantee */}
      <div className={styles.startActionArea}>
        <button
          type="button"
          className={`ve-btn ve-btn-gold ${styles.engageBtn}`}
          onClick={onStart}
        >
          <Play size={16} fill="currentColor" />
          <span>Engage XP Catcher</span>
        </button>
        <span className={styles.frequencyTag}>
          <ShieldCheck size={13} className={styles.shieldIcon} />
          100% Skill-Based Reflex Challenge • Zero Gambling Mechanics
        </span>
      </div>
    </div>
  )
}

export default GameStart
