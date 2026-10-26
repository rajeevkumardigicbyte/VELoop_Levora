import React from 'react'
import styles from './PlayAndEarn.module.css'

const GameResult = ({ score, reward, onPlayAgain }) => {
  return (
    <div className={`${styles.gameResultScreen} animate-scaleIn`}>
      <div className={styles.resultBadge}>🎉 Round Completed!</div>
      <h3 className={styles.resultTitle}>{reward?.label || 'Challenge Done!'}</h3>

      {/* Score and Reward reveal */}
      <div className={styles.scoreBox}>
        <div className={styles.scoreRow}>
          <span className={styles.scoreLabel}>Final Score</span>
          <span className={styles.scoreVal}>{score} pts</span>
        </div>
        <div className={styles.scoreDivider} />
        <div className={styles.rewardReveal}>
          <span className={styles.rewardLead}>Reward Earned</span>
          <div className={styles.rewardPrize}>
            <span className={styles.rewardPrizeXP}>+{reward?.xp} XP</span>
            {reward?.extra && (
              <span className={styles.rewardPrizeExtra}>{reward.extra}</span>
            )}
          </div>
          <div className={styles.rewardNotice}>
            *Demo value credited to session. Backend synchronization pending.
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className={styles.resultActions}>
        <button className="ve-btn ve-btn-gold" onClick={onPlayAgain}>
          🔄 Play Again
        </button>
      </div>
    </div>
  )
}

export default GameResult
