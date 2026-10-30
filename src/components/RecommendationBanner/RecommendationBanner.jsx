import React from 'react'
import { Sparkles, ArrowRight, Play, Clock, Zap } from 'lucide-react'
import styles from './RecommendationBanner.module.css'

const RecommendationBanner = ({ data }) => {
  if (!data) return null

  const xpRemaining = data.xpRemaining || 1580
  const nextLvl = String(data.nextLevel || 6).padStart(2, '0')
  const nextLvlName = data.nextLevelName || 'Platinum Hero'
  const dailyVelocity = 215 // User's active pace from Today's Boost
  const estDays = Math.max(1, Math.ceil(xpRemaining / dailyVelocity))

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section aria-labelledby="recommendation-heading" className={`${styles.banner} animate-fadeInUp`}>
      <div className={styles.bannerLeft}>
        <div className={styles.tagRow}>
          <div className={styles.bannerTag}>
            <Sparkles size={12} color="#FBBF24" aria-hidden="true" />
            <span>RECOMMENDED FOR YOU • TARGET MILESTONE</span>
          </div>
          <div className={styles.velocityPill}>
            <Clock size={11} className={styles.velocityIcon} />
            <span>Pace: ~{estDays} Days at current velocity</span>
          </div>
        </div>

        <h2 id="recommendation-heading" className={styles.bannerHeading}>
          You're only <span className={styles.highlightGold}>{xpRemaining.toLocaleString()} XP</span> away from Level {nextLvl} ({nextLvlName})!
        </h2>
        <p className={styles.bannerSub}>
          At your current velocity (<span className={styles.subHighlight}>+{dailyVelocity} XP/day</span>), you will promote to <strong>Level {nextLvl} in ~{estDays} days</strong>. Engaging one XP Catcher blitz or completing 2 protocol quests will accelerate your promotion.
        </p>
      </div>

      <div className={styles.bannerActions}>
        <button
          type="button"
          className="ve-btn ve-btn-gold"
          onClick={() => scrollToSection('arcade')}
          aria-label="Launch XP Catcher Blitz"
        >
          <Play size={14} fill="currentColor" aria-hidden="true" /> Play XP Catcher
        </button>
        <button
          type="button"
          className="ve-btn ve-btn-outline"
          onClick={() => scrollToSection('earn')}
          aria-label="Jump to Acceleration Hub"
        >
          Explore Tasks <ArrowRight size={14} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}

export default RecommendationBanner
