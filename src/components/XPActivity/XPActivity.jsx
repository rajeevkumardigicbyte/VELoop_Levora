import React, { useState } from 'react'
import { Filter, Users, ClipboardCheck, Gamepad2, Magnet, Flame, ChevronRight, Zap, Coins } from 'lucide-react'
import styles from './XPActivity.module.css'

const recentActivities = [
  {
    id: 1,
    title: 'Referral Bonus',
    time: 'Today, 10:45 AM',
    reward: '+20 XP',
    icon: Users,
    color: '#2ECC71',
    category: 'referral',
  },
  {
    id: 2,
    title: 'Daily Mission Completed',
    time: 'Today, 09:12 AM',
    reward: '+50 XP',
    icon: ClipboardCheck,
    color: '#3D9EFF',
    category: 'tasks',
  },
  {
    id: 3,
    title: 'Mini Game Win',
    time: 'Today, 08:30 AM',
    reward: '+75 XP',
    icon: Gamepad2,
    color: '#7B61FF',
    category: 'games',
  },
  {
    id: 4,
    title: 'XP Catcher Reward',
    time: 'Today, 07:50 AM',
    reward: '+10 VEs',
    icon: Magnet,
    color: '#F5C842',
    category: 'catcher',
  },
  {
    id: 5,
    title: 'Streak Bonus',
    time: 'Today, 07:20 AM',
    reward: '+25 XP',
    icon: Flame,
    color: '#FF5252',
    category: 'streak',
  },
]

const XPActivity = () => {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? recentActivities
    : recentActivities.filter(a => a.category === filter)

  return (
    <section aria-labelledby="activity-heading" className={styles.section}>
      <div className={styles.activityCard}>
        {/* Header from Screen 6 */}
        <div className={styles.cardHeader}>
          <h2 id="activity-heading" className={styles.title}>RECENT ACTIVITY</h2>
          <div className={styles.filterWrap}>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === 'all' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter(filter === 'all' ? 'catcher' : 'all')}
              title="Filter activity"
              aria-label={`Filter activity: currently showing ${filter === 'all' ? 'All' : 'Game'}`}
            >
              <Filter size={12} style={{ display: 'inline', marginRight: '4px' }} aria-hidden="true" />
              {filter === 'all' ? 'All' : 'Game'}
            </button>
          </div>
        </div>

        {/* Activity List from Screen 6 */}
        <div className={styles.activityList}>
          {filtered.map((item) => {
            const IconComp = item.icon
            return (
              <div key={item.id} className={styles.activityRow}>
                <div
                  className={styles.iconCircle}
                  style={{ background: `${item.color}20`, color: item.color }}
                >
                  <IconComp size={18} color={item.color} />
                </div>

                <div className={styles.details}>
                  <div className={styles.rewardLead} style={{ color: item.color }}>
                    {item.reward}
                  </div>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemTime}>{item.time}</div>
                </div>

                <div className={styles.rewardCol}>
                  <ChevronRight size={16} className={styles.chevron} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Today's Summary Card from Screen 6 */}
        <div className={styles.summaryCard}>
          <div className={styles.summaryTitle}>Today's Summary</div>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryPill}>
              <div className={styles.pillIconXP}>
                <Zap size={14} color="#7B61FF" />
              </div>
              <div className={styles.pillText}>
                <span className={styles.pillVal}>215 XP</span>
                <span className={styles.pillLabel}>Total Earned</span>
              </div>
            </div>

            <div className={styles.summaryPill}>
              <div className={styles.pillIconVE}>
                <Coins size={14} color="#F5C842" />
              </div>
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
