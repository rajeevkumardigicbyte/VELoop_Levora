import React from 'react'
import styles from './EarnMoreXP.module.css'
import EarnCard from './EarnCard'
import { earnOpportunities } from '../../data/earnData'

const EarnMoreXP = ({ data }) => {
  const xpRemaining = data.xpRemaining

  return (
    <section className={styles.section}>
      {/* Progress CTA banner */}
      <div className={`${styles.ctaBanner} animate-fadeInUp`}>
        <div className={styles.ctaLeft}>
          <div className={styles.ctaXP}>
            <span className="text-gold">{xpRemaining.toLocaleString()} XP</span> needed to reach Level {data.nextLevel}
          </div>
          <div className={styles.ctaLabel}>Ways to accelerate your progression:</div>
          <div className={styles.ctaActions}>
            {['🎮 Play Game', '📺 Watch Ads', '✅ Complete Tasks', '👥 Invite Friends', '🔥 Daily Streak'].map(a => (
              <span key={a} className={styles.ctaChip}>
                {a}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.ctaRight}>
          <div className={styles.recommendBox}>
            <div className={styles.recommendLabel}>💡 Personalized Recommendation</div>
            <div className={styles.recommendText}>
              You are only <span className="text-gold font-bold">{xpRemaining.toLocaleString()} XP</span> away from{' '}
              <span className="text-purple font-bold">Level {data.nextLevel} ({data.nextLevelName})</span>.
              Complete today's daily mission or play the arcade challenge to get closer!
            </div>
          </div>
        </div>
      </div>

      {/* Section header */}
      <div className={styles.sectionHead}>
        <div>
          <h2 className="section-title">💰 Earn More XP & Rewards</h2>
          <p className="section-subtitle">
            Complete active platform activities to earn XP and speed up your milestone unlocks
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className={styles.cardsGrid}>
        {earnOpportunities.map((earn) => (
          <EarnCard
            key={earn.id}
            earn={earn}
            onAction={(e) => {
              // Smooth scroll to game if play clicked
              if (e.category === 'game') {
                window.scrollTo({ top: 400, behavior: 'smooth' })
              }
            }}
          />
        ))}
      </div>

      <div className={styles.demoNote}>
        ⓘ Reward amounts and XP increments displayed are development demo placeholders and will reflect verified platform partner payouts upon live sync.
      </div>
    </section>
  )
}

export default EarnMoreXP
