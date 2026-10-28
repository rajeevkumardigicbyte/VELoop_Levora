import React from 'react'
import styles from './EarnMoreXP.module.css'

const earnActivitiesList = [
  {
    id: 1,
    title: 'Watch & Earn',
    desc: 'Watch ads and earn',
    reward: '+50 XP',
    icon: '▶',
    color: '#7B61FF',
    actionText: 'Watch Now',
    category: 'watch',
  },
  {
    id: 2,
    title: 'Daily Missions',
    desc: 'Complete daily tasks',
    reward: '+30 XP',
    icon: '📋',
    color: '#3D9EFF',
    actionText: 'Start Mission',
    category: 'tasks',
  },
  {
    id: 3,
    title: 'Refer & Earn',
    desc: 'Invite friends & earn',
    reward: '+100 XP',
    icon: '👥',
    color: '#2ECC71',
    actionText: 'Share Link',
    category: 'refer',
  },
  {
    id: 4,
    title: 'Mini Games',
    desc: 'Play games & win',
    reward: '+75 XP',
    icon: '🎮',
    color: '#F5C842',
    actionText: 'Play Arcade',
    category: 'games',
  },
  {
    id: 5,
    title: 'Streak Bonus',
    desc: 'Maintain your streak',
    reward: '+25 XP',
    icon: '🔥',
    color: '#FF6B35',
    actionText: 'Claim Streak',
    category: 'streak',
  },
  {
    id: 6,
    title: 'XP Catcher',
    desc: 'Catch orbs & coins',
    reward: '+10 XP',
    icon: '🧲',
    color: '#9B51E0',
    actionText: 'Play Catcher',
    category: 'catcher',
  },
]

const EarnMoreXP = ({ data }) => {
  const xpRemaining = data.xpRemaining

  return (
    <section className={styles.section}>
      {/* Header from Screen 4 */}
      <div className={styles.sectionHead}>
        <div>
          <h2 className={styles.screen4Title}>EARN & LEVEL UP</h2>
          <p className={styles.screen4Subtitle}>
            Complete activities. Earn XP. Climb levels. Get rewards.
          </p>
        </div>
      </div>

      {/* List matching Screen 4 */}
      <div className={styles.activityList}>
        {earnActivitiesList.map((item) => (
          <div
            key={item.id}
            className={styles.activityRow}
            onClick={() => {
              if (item.category === 'catcher' || item.category === 'games') {
                window.scrollTo({ top: 600, behavior: 'smooth' })
              }
            }}
          >
            <div
              className={styles.activityIconWrap}
              style={{ background: `${item.color}20`, color: item.color }}
            >
              <span>{item.icon}</span>
            </div>

            <div className={styles.activityDetails}>
              <div className={styles.activityName}>{item.title}</div>
              <div className={styles.activityDesc}>{item.desc}</div>
            </div>

            <div className={styles.activityActionWrap}>
              <span className={styles.rewardPillTag} style={{ color: item.color }}>
                {item.reward}
              </span>
              <span className={styles.chevron}>➔</span>
            </div>
          </div>
        ))}
      </div>

      {/* Encouragement Bar from Screen 4 */}
      <div className={styles.encouragementBar}>
        <span className={styles.encouragementText}>Keep going! You're doing great!</span>
        <span className={styles.chartIcon}>📊</span>
      </div>
    </section>
  )
}

export default EarnMoreXP
