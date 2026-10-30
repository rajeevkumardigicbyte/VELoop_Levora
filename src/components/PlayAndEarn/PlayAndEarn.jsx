import React from 'react'
import { Zap, Gamepad2 } from 'lucide-react'
import GameContainer from './GameContainer'
import styles from './PlayAndEarn.module.css'

const PlayAndEarn = () => {
  return (
    <section aria-labelledby="arcade-heading" className={styles.section}>
      <div className={styles.sectionHead}>
        <div>
          <div className={styles.tagWrap}>
            <span className="ve-badge ve-badge-gold">
              <Zap size={12} style={{ display: 'inline', marginRight: '4px' }} aria-hidden="true" /> Play & Earn Hub
            </span>
            <span className="ve-badge ve-badge-purple">
              <Gamepad2 size={12} style={{ display: 'inline', marginRight: '4px' }} aria-hidden="true" /> Skill Mini-Game
            </span>
          </div>
          <h2 id="arcade-heading" className="section-title">Level-Up Arcade</h2>
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
