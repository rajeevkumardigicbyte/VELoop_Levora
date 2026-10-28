import React, { useState } from 'react'
import styles from './XPActivity.module.css'

const recentActivities = [
  {
    id: 1,
    title: 'Referral Bonus',
    time: 'Today, 10:45 AM',
    reward: '+20 XP',
    icon: '👥',
    color: '#2ECC71',
    category: 'referral',
  },
  {
    id: 2,
    title: 'Daily Mission Completed',
    time: 'Today, 09:12 AM',
    reward: '+50 XP',
    icon: '📋',
    color: '#3D9EFF',
    category: 'tasks',
  },
  {
    id: 3,
    title: 'Mini Game Win',
    time: 'Today, 08:30 AM',
    reward: '+75 XP',
    icon: '🎮',
    color: '#7B61FF',
    category: 'games',
  },
  {
    id: 4,
    title: 'XP Catcher Reward',
    time: 'Today, 07:50 AM',
    reward: '+10 VEs',
    icon: '🧲',
    color: '#F5C842',
    category: 'catcher',
  },
  {
    id: 5,
    title: 'Streak Bonus',
    time: 'Today, 07:20 AM',
    reward: '+25 XP',
    icon: '🔥',
    color: '#FF6B35',
    category: 'streak',
  },
]

const XPActivity = () => {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? recentActivities
    : recentActivities.filter(a => a.category === filter)

  return (
    <section className={styles.section}>
      <div className={styles.activityCard}>
        {/* Header from Screen 6 */}
        <div className={styles.cardHeader}>
          <h2 className={styles.title}>RECENT ACTIVITY</h2>
          <div className={styles.filterWrap}>
            <button
              className={`${styles.filterBtn} ${filter === 'all' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter(filter === 'all' ? 'catcher' : 'all')}
              title="Filter activity"
            >
              🌪️ {filter === 'all' ? 'All' : 'Game'}
            </button>
          </div>
        </div>

        {/* Activity List from Screen 6 */}
        <div className={styles.activityList}>
          {filtered.map((item) => (
            <div key={item.id} className={styles.activityRow}>
              <div
                className={styles.iconCircle}
                style={{ background: `${item.color}20`, color: item.color }}
              >
                <span>{item.icon}</span>
              </div>

              <div className={styles.details}>
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemTime}>{item.time}</div>
              </div>

              <div className={styles.rewardCol}>
                <span className={styles.rewardText} style={{ color: item.color }}>
                  {item.reward}
                </span>
                <span className={styles.chevron}>➔</span>
              </div>
            </div>
          ))}
        </div>

        {/* Today's Summary Card from Screen 6 */}
        <div className={styles.summaryCard}>
          <div className={styles.summaryTitle}>Today's Summary</div>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryPill}>
              <div className={styles.pillIconXP}>XP</div>
              <div className={styles.pillText}>
                <span className={styles.pillVal}>215 XP</span>
                <span className={styles.pillLabel}>Total Earned</span>
              </div>
            </div>

            <div className={styles.summaryPill}>
              <div className={styles.pillIconVE}>V</div>
              <div className={styles.pillText}>
                <span className={styles.pillVal}>35 VEs</span>
                <span className={styles.pillLabel}>Total Earned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default XPActivity
