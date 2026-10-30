import React from 'react'
import { Gamepad2, Clock, Sparkles, Trophy, Zap, Play } from 'lucide-react'
import styles from './PlayAndEarn.module.css'

const GameStart = ({ onStart }) => {
  return (
    <div className={styles.gameStartScreen}>
      <div className={styles.gameBadge}>
        <Gamepad2 size={13} style={{ display: 'inline', marginRight: '6px' }} />
        ARCADE MINI-GAME
      </div>
      <h3 className={styles.gameTitle}>XP CATCHER ⓘ</h3>
      <p className={styles.gameSubtitle}>
        Catch XP orbs & coins. Score high for better rewards!
      </p>

      {/* Rules list */}
      <div className={styles.rulesCard}>
        <div className={styles.rulesTitle}>📜 Rules & Scoring:</div>
        <ul className={styles.rulesList}>
          <li>
            <span><strong>🕹️ Controls:</strong></span> Drag the golden hoop with mouse/finger, or use Left/Right Arrow keys.
          </li>
          <li>
            <span><strong>⏱️ Timer:</strong></span> 20 seconds rapid reflex challenge.
          </li>
          <li>
            <span><strong>🟣 XP Orb:</strong></span> +10 XP pts &nbsp;|&nbsp; <span><strong>🟡 VE Coin:</strong></span> +5 VEs &nbsp;|&nbsp; <span><strong>💎 Gem:</strong></span> +25 bonus
          </li>
          <li>
            <span><strong>🏆 Target:</strong></span> Collect as many orbs as you can before the clock runs out!
          </li>
        </ul>
      </div>

      <div className={styles.startActionArea}>
        <button className="ve-btn ve-btn-gold" onClick={onStart} style={{ padding: '14px 36px', fontSize: '15px' }}>
          <Play size={16} fill="currentColor" /> Start XP Catcher
        </button>
        <span className={styles.frequencyTag}>
          <Zap size={12} style={{ display: 'inline', marginRight: '4px' }} />
          Skill-based gameplay — no casino or gambling mechanics
        </span>
      </div>
    </div>
  )
}

export default GameStart
