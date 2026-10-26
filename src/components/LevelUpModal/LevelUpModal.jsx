import React, { useEffect } from 'react'
import styles from './LevelUpModal.module.css'

const LevelUpModal = ({ isOpen, onClose, data }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const targetLevel = data.nextLevel || 5
  const targetLevelName = data.nextLevelName || 'Gold Guardian'
  const reward = data.nextLevelData?.reward

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={`${styles.modalCard} animate-scaleIn`} onClick={(e) => e.stopPropagation()}>
        {/* Particle / Sparkle effects */}
        <div className={styles.sparkleWrap}>
          <span className={styles.sparkle} style={{ top: '10%', left: '15%' }}>✨</span>
          <span className={styles.sparkle} style={{ top: '15%', right: '20%' }}>⭐</span>
          <span className={styles.sparkle} style={{ bottom: '25%', left: '20%' }}>🌟</span>
          <span className={styles.sparkle} style={{ bottom: '20%', right: '15%' }}>✨</span>
        </div>

        {/* Modal content */}
        <div className={styles.celebrationBadge}>🎉 MILESTONE UNLOCKED</div>
        <h2 className={styles.modalTitle}>LEVEL UP!</h2>

        <div className={styles.badgeRing}>
          <div className={styles.badgeRingInner}>
            <span className={styles.badgeIcon}>🥇</span>
            <span className={styles.badgeNum}>L{String(targetLevel).padStart(2, '0')}</span>
          </div>
        </div>

        <div className={styles.levelRankTitle}>{targetLevelName}</div>
        <p className={styles.modalSub}>
          Congratulations! You've climbed into a higher progression tier.
        </p>

        {/* Reward Box */}
        <div className={styles.rewardBox}>
          <div className={styles.rewardLead}>Milestone Reward Granted</div>
          <div className={styles.rewardAmount}>
            <span className={styles.rewardIcon}>{reward?.icon || '💰'}</span>
            <span className={styles.rewardVal}>+{reward?.amount || 500} {reward?.type || 'VEs'}</span>
          </div>
          <div className={styles.rewardNote}>Added directly to your eligible reward vault</div>
        </div>

        <button className="ve-btn ve-btn-gold" onClick={onClose} style={{ width: '100%', padding: '14px', fontSize: '16px' }}>
          Claim & Continue Progression ➔
        </button>
      </div>
    </div>
  )
}

export default LevelUpModal
