import React from 'react'
import GameContainer from './GameContainer'
import styles from './PlayAndEarn.module.css'

const PlayAndEarn = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <div>
          <div className={styles.tagWrap}>
            <span className="ve-badge ve-badge-gold">⚡ Play & Earn Hub</span>
            <span className="ve-badge ve-badge-purple">Skill Mini-Game</span>
          </div>
          <h2 className="section-title">🕹️ Level-Up Arcade</h2>
          <p className="section-subtitle">
            Play interactive micro-games to earn instant XP boosts and progress towards your next milestone.
          </p>
        </div>
      </div>

      <div className={styles.centerContainer}>
        <GameContainer />
      </div>
    </section>
  )
}

export default PlayAndEarn
