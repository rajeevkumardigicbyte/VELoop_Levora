import React from 'react'
import styles from './PlayAndEarn.module.css'

const GameStart = ({ onStart }) => {
  return (
    <div className={styles.gameStartScreen}>
      <div className={styles.gameBadge}>🎮 Play & Earn Challenge</div>
      <h3 className={styles.gameTitle}>VE Coin Rush</h3>
      <p className={styles.gameSubtitle}>
        Catch falling VE coins and gems within 20 seconds. Test your reflexes and earn eligible XP toward your next level!
      </p>

      {/* Rules list */}
      <div className={styles.rulesCard}>
        <div className={styles.rulesTitle}>📜 Rules & Reward Tiers:</div>
        <ul className={styles.rulesList}>
          <li>
            <span>🕹️ <strong>Controls:</strong></span> Use Left/Right Arrow Keys or mouse/touch to drag the collector.
          </li>
          <li>
            <span>⏱️ <strong>Time Limit:</strong></span> 20 seconds fast-paced arcade round.
          </li>
          <li>
            <span>💰 <strong>VE Coin:</strong></span> +1 point &nbsp;|&nbsp; <span>💎 <strong>Gem:</strong></span> +3 points
          </li>
          <li>
            <span>🎁 <strong>Score 10+ pts:</strong></span> +15 XP
          </li>
          <li>
            <span>🎁 <strong>Score 20+ pts:</strong></span> +25 XP
          </li>
          <li>
            <span>🎁 <strong>Score 30+ pts:</strong></span> +35 XP + 1 Gem Bonus
          </li>
        </ul>
      </div>

      <div className={styles.startActionArea}>
        <button className="ve-btn ve-btn-gold" onClick={onStart} style={{ padding: '12px 32px', fontSize: '16px' }}>
          ▶ Start Challenge Now
        </button>
        <span className={styles.frequencyTag}>⚡ Free play demo — no limits during development</span>
      </div>
    </div>
  )
}

export default GameStart
