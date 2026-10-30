import React from 'react'
import { Sparkles, ArrowRight, Play } from 'lucide-react'
import styles from './RecommendationBanner.module.css'

const RecommendationBanner = ({ data }) => {
  if (!data) return null

  const xpRemaining = data.xpRemaining || 1580
  const nextLvl = String(data.nextLevel || 6).padStart(2, '0')
  const nextLvlName = data.nextLevelName || 'Platinum Hero'

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section aria-labelledby="recommendation-heading" className={`${styles.banner} animate-fadeInUp`}>
      <div className={styles.bannerLeft}>
        <div className={styles.bannerTag}>
          <Sparkles size={13} color="#F5C842" aria-hidden="true" />
          <span>RECOMMENDED FOR YOU • NEXT MILESTONE TARGET</span>
        </div>
        <h2 id="recommendation-heading" className={styles.bannerHeading}>
          You're only <span className={styles.highlightGold}>{xpRemaining.toLocaleString()} XP</span> away from Level {nextLvl} ({nextLvlName})!
        </h2>
        <p className={styles.bannerSub}>
          Play the XP Catcher challenge or complete 1 daily task to unlock Level {nextLvl} milestone perks.
        </p>
      </div>

      <div className={styles.bannerActions}>
        <button
          type="button"
          className="ve-btn ve-btn-gold"
          onClick={() => scrollToSection('arcade')}
          aria-label="Jump to Play XP Catcher"
        >
          <Play size={14} fill="currentColor" aria-hidden="true" /> Play XP Catcher
        </button>
        <button
          type="button"
          className="ve-btn ve-btn-outline"
          onClick={() => scrollToSection('earn')}
          aria-label="Jump to View Tasks"
        >
          View Tasks <ArrowRight size={14} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}

export default RecommendationBanner
