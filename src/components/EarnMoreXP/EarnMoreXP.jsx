import React from 'react'
import styles from './EarnMoreXP.module.css'

const earnActivitiesList = [
  {
    id: 1,
    title: 'Watch & Earn',
    desc: 'Watch ads and earn instant XP',
    reward: '+50 XP',
    icon: '▶',
    color: '#8A31F7',
    tint: 'rgba(138, 49, 247, 0.08)',
    border: 'rgba(138, 49, 247, 0.35)',
    actionText: 'Watch Now',
    category: 'watch',
  },
  {
    id: 2,
    title: 'Daily Missions',
    desc: 'Complete daily combat and reward tasks',
    reward: '+30 XP',
    icon: '📋',
    color: '#07D3E4',
    tint: 'rgba(7, 211, 228, 0.08)',
    border: 'rgba(7, 211, 228, 0.35)',
    actionText: 'Start Mission',
    category: 'tasks',
  },
  {
    id: 3,
    title: 'Refer & Earn',
    desc: 'Invite friends to squad up & earn together',
    reward: '+100 XP',
    icon: '👥',
    color: '#0ED690',
    tint: 'rgba(14, 214, 144, 0.08)',
    border: 'rgba(14, 214, 144, 0.35)',
    actionText: 'Share Link',
    category: 'refer',
  },
  {
    id: 4,
    title: 'Mini Games & Arcade',
    desc: 'Play retro arcade challenges & win score bonuses',
    reward: '+75 XP',
    icon: '🎮',
    color: '#FB8521',
    tint: 'rgba(251, 133, 33, 0.08)',
    border: 'rgba(251, 133, 33, 0.35)',
    actionText: 'Play Arcade',
    category: 'games',
  },
  {
    id: 5,
    title: 'Streak Multiplier',
    desc: 'Maintain consecutive login streak for multipliers',
    reward: '+25 XP',
    icon: '🔥',
    color: '#EF4444',
    tint: 'rgba(239, 68, 68, 0.08)',
    border: 'rgba(239, 68, 68, 0.35)',
    actionText: 'Claim Streak',
    category: 'streak',
  },
  {
    id: 6,
    title: 'XP Catcher Mini-Game',
    desc: 'Catch neon orbs & energy crystals',
    reward: '+10 XP',
    icon: '🧲',
    color: '#9A58C6',
    tint: 'rgba(154, 88, 198, 0.08)',
    border: 'rgba(154, 88, 198, 0.35)',
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
            style={{
              background: item.tint,
              borderColor: item.border,
            }}
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
