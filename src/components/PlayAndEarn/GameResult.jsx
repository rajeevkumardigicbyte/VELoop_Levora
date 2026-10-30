import React from 'react'
import { ArrowLeft, Share2 } from 'lucide-react'
import LaurelMedal from '../shared/LaurelMedal'
import styles from './PlayAndEarn.module.css'

const GameResult = ({ score, reward, onPlayAgain }) => {
  const xpEarned = reward?.xp || 30
  const veEarned = reward?.ves || 12

  return (
    <div className={`${styles.gameResultScreen} animate-scaleIn`}>
      {/* Top Header */}
      <div className={styles.resultTopBar}>
        <button
          className={styles.backBtn}
          onClick={onPlayAgain}
          title="Back"
          aria-label="Back"
        >
          <ArrowLeft size={16} />
        </button>
        <span className={styles.shareIcon} title="Share result">
          <Share2 size={16} />
        </span>
      </div>

      <div className={styles.resultTitle}>CHALLENGE COMPLETE!</div>
      <div className={styles.resultSubtitle}>{reward?.label || 'Outstanding!'}</div>

      {/* Golden Laurel Star Trophy from Screen 3 */}
      <div className={styles.trophyWrapper}>
        <LaurelMedal size={110} />
      </div>

      {/* Final Score Card */}
      <div className={styles.resultCard}>
        <div className={styles.finalScoreRow}>
          <div className={styles.scoreLead}>FINAL SCORE</div>
          <div className={styles.scoreValueRow}>
            <span className={styles.scoreNumber}>{score}</span>
            <span className={styles.newBestBadge}>New Best!</span>
          </div>
        </div>

        {/* 2 Stat Pills from Screen 3 */}
        <div className={styles.rewardPillsGrid}>
          <div className={styles.rewardPillItem}>
            <span className={styles.rewardPillValue}>+{xpEarned} XP</span>
            <span className={styles.rewardPillLabel}>Experience</span>
          </div>
          <div className={styles.rewardPillItem}>
            <span className={styles.rewardPillValue}>+{veEarned} VEs</span>
            <span className={styles.rewardPillLabel}>Your Reward</span>
          </div>
        </div>

        {/* Level Progression Progress Bar */}
        <div className={styles.resultProgressSection}>
          <div className={styles.resultProgressLabels}>
            <span>Level 05</span>
            <span>Level 06</span>
          </div>
          <div className={styles.resultProgressBarTrack}>
            <div className={styles.resultProgressBarFill} style={{ width: '80%' }} />
          </div>
          <div className={styles.resultProgressText}>6,420 / 8,000 XP</div>
        </div>

        {/* Actions */}
        <div className={styles.resultActions}>
          <button className="ve-btn ve-btn-gold" onClick={onPlayAgain} style={{ width: '100%', padding: '14px' }}>
            Play Again
          </button>
          <button
            className="ve-btn ve-btn-outline"
            onClick={onPlayAgain}
            style={{ width: '100%', padding: '12px' }}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameResult
