import React from 'react'
import { Sparkles, ArrowRight, Play, CheckCircle } from 'lucide-react'
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
    <div className={`${styles.banner} animate-fadeInUp`}>
      <div className={styles.bannerLeft}>
        <div className={styles.bannerTag}>
          <Sparkles size={13} color="#F5C842" />
          <span>RECOMMENDED FOR YOU • NEXT MILESTONE TARGET</span>
        </div>
        <h3 className={styles.bannerHeading}>
          You're only <span className={styles.highlightGold}>{xpRemaining.toLocaleString()} XP</span> away from Level {nextLvl} ({nextLvlName})!
        </h3>
        <p className={styles.bannerSub}>
          Play the XP Catcher challenge or complete 1 daily task to unlock Level {nextLvl} milestone perks.
        </p>
      </div>

      <div className={styles.bannerActions}>
        <button
          className="ve-btn ve-btn-gold"
          onClick={() => scrollToSection('arcade')}
        >
          <Play size={14} fill="currentColor" /> Play XP Catcher
        </button>
        <button
          className="ve-btn ve-btn-outline"
          onClick={() => scrollToSection('earn')}
        >
          View Tasks <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}

export default RecommendationBanner
