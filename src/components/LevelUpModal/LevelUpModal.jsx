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

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={`${styles.modalCard} animate-scaleIn`} onClick={(e) => e.stopPropagation()}>
        {/* Floating Sparkles & Coins from Screen 5 */}
        <div className={styles.sparkleWrap}>
          <span className={styles.sparkle} style={{ top: '8%', left: '12%' }}>✨</span>
          <span className={styles.sparkle} style={{ top: '15%', right: '15%' }}>🟡</span>
          <span className={styles.sparkle} style={{ top: '35%', left: '8%' }}>💎</span>
          <span className={styles.sparkle} style={{ top: '40%', right: '10%' }}>⭐</span>
        </div>

        {/* Header from Screen 5 */}
        <h2 className={styles.modalTitle}>LEVEL UP!</h2>
        <div className={styles.modalSub}>You've reached</div>

        {/* Golden Pedestal with Shield from Screen 5 */}
        <div className={styles.pedestalStage}>
          <div className={styles.podiumShield}>
            <div className={styles.laurelWreathLeft}>🌿</div>
            <div className={styles.shieldCenter}>
              <span className={styles.shieldTitle}>LEVEL</span>
              <span className={styles.shieldNum}>{String(targetLevel).padStart(2, '0')}</span>
            </div>
            <div className={styles.laurelWreathRight}>🌿</div>
          </div>
          <div className={styles.goldenPlatform} />
        </div>

        {/* 2 Reward Cards from Screen 5 */}
        <div className={styles.rewardCardsRow}>
          <div className={styles.rewardCard}>
            <span className={styles.rewardCardVal}>+500 VEs</span>
            <span className={styles.rewardCardIcon}>💰</span>
          </div>

          <div className={styles.rewardCard}>
            <span className={styles.rewardCardVal}>+25 Gems</span>
            <span className={styles.rewardCardIcon}>💎</span>
          </div>
        </div>

        {/* Unlocked Perks List from Screen 5 */}
        <div className={styles.perksList}>
          <div className={styles.perkItem}>
            <span className={styles.perkIcon}>📈</span>
            <span className={styles.perkText}>Higher daily XP limit</span>
          </div>
          <div className={styles.perkItem}>
            <span className={styles.perkIcon}>🎯</span>
            <span className={styles.perkText}>Access to new challenges</span>
          </div>
          <div className={styles.perkItem}>
            <span className={styles.perkIcon}>🎁</span>
            <span className={styles.perkText}>Better reward opportunities</span>
          </div>
        </div>

        {/* "Claim Rewards" Button from Screen 5 */}
        <button
          className="ve-btn ve-btn-gold"
          onClick={onClose}
          style={{ width: '100%', padding: '16px', fontSize: '16px', fontWeight: 800 }}
        >
          Claim Rewards
        </button>
      </div>
    </div>
  )
}

export default LevelUpModal
