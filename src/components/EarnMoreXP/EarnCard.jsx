import React from 'react'
import styles from './EarnMoreXP.module.css'

const EarnCard = ({ earn, onAction }) => {
  const isComingSoon = earn.status === 'coming_soon'
  return (
    <div
      className={`${styles.earnCard} ${isComingSoon ? styles.earnCardDisabled : ''} animate-fadeInUp`}
      style={{
        '--card-color': earn.color,
        '--card-color-soft': earn.colorSoft,
        '--card-border': earn.borderColor,
      }}
    >
      {isComingSoon && <div className={styles.comingSoonBadge}>Coming Soon</div>}

      <div className={styles.cardIcon}>{earn.icon}</div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>{earn.title}</div>
        <div className={styles.cardDesc}>{earn.description}</div>
        <div className={styles.cardReward}>{earn.reward}</div>
      </div>
      <button
        className={`ve-btn ${isComingSoon ? 've-btn-outline' : 've-btn-ghost'} ${styles.cardCta}`}
        onClick={() => !isComingSoon && onAction?.(earn)}
        disabled={isComingSoon}
        style={
          isComingSoon
            ? {}
            : {
                background: earn.colorSoft,
                color: earn.color,
                borderColor: earn.borderColor,
              }
        }
      >
        {earn.cta} {!isComingSoon && '→'}
      </button>
    </div>
  )
}

export default EarnCard
