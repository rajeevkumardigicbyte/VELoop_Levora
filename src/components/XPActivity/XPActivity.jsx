import React, { useState } from 'react'
import {
  Users,
  ClipboardCheck,
  Gamepad2,
  Coins,
  Flame,
  ChevronRight,
  Zap,
  Sparkles,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react'
import styles from './XPActivity.module.css'

const recentActivities = [
  {
    id: 1,
    title: 'Referral Bonus',
    time: 'Today, 10:45 AM',
    reward: '+20 XP',
    type: 'xp',
    icon: Users,
    color: '#00F5FF',
    category: 'referrals',
    tag: 'Community',
  },
  {
    id: 2,
    title: 'Daily Mission Completed',
    time: 'Today, 09:12 AM',
    reward: '+50 XP',
    type: 'xp',
    icon: ClipboardCheck,
    color: '#00E676',
    category: 'tasks',
    tag: 'Quest Yield',
  },
  {
    id: 3,
    title: 'Mini Game Win',
    time: 'Today, 08:30 AM',
    reward: '+75 XP',
    type: 'xp',
    icon: Gamepad2,
    color: '#A855F7',
    category: 'arcade',
    tag: 'Reflex Bonus',
  },
  {
    id: 4,
    title: 'XP Catcher Reward',
    time: 'Today, 07:50 AM',
    reward: '+10 VEs',
    type: 've',
    icon: Coins,
    color: '#FBBF24',
    category: 'arcade',
    tag: 'Token Payout',
  },
  {
    id: 5,
    title: 'Daily Streak Bonus',
    time: 'Today, 07:20 AM',
    reward: '+25 XP',
    type: 'xp',
    icon: Flame,
    color: '#FF1E56',
    category: 'tasks',
    tag: '5-Day Streak',
  },
]

const XPActivity = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? recentActivities
      : recentActivities.filter(a => a.category === activeFilter)

  return (
    <div className={styles.activityWrapper}>
      <div className={styles.activityCard}>
        {/* Card Header & Filter Tabs */}
        <div className={styles.cardHeader}>
          <div className={styles.headerTitleGroup}>
            <div className={styles.headerBadge}>
              <Sparkles size={11} className={styles.sparkleIcon} />
              <span>LIVE AUDIT TRAIL</span>
            </div>
            <h3 id="activity-heading" className={styles.title}>
              TRANSACTION LEDGER
            </h3>
          </div>

          <div className={styles.filterTabs} role="tablist" aria-label="Transaction Filter">
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              className={`${styles.filterTab} ${activeFilter === 'all' ? styles.filterTabActive : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'arcade'}
              className={`${styles.filterTab} ${activeFilter === 'arcade' ? styles.filterTabActive : ''}`}
              onClick={() => setActiveFilter('arcade')}
            >
              Arcade
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'tasks'}
              className={`${styles.filterTab} ${activeFilter === 'tasks' ? styles.filterTabActive : ''}`}
              onClick={() => setActiveFilter('tasks')}
            >
              Quests
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'referrals'}
              className={`${styles.filterTab} ${activeFilter === 'referrals' ? styles.filterTabActive : ''}`}
              onClick={() => setActiveFilter('referrals')}
            >
              Invites
            </button>
          </div>
        </div>

        {/* Activity List */}
        <div className={styles.activityList}>
          {filtered.map(item => {
            const IconComp = item.icon
            const isVE = item.type === 've'
            return (
              <div key={item.id} className={styles.activityRow}>
                {/* Left: Holographic Icon Circle */}
                <div
                  className={styles.iconCircle}
                  style={{
                    backgroundColor: `${item.color}15`,
                    borderColor: `${item.color}40`,
                  }}
                >
                  <IconComp size={16} color={item.color} />
                </div>

                {/* Center: Details */}
                <div className={styles.details}>
                  <div className={styles.titleRow}>
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span className={styles.itemTag} style={{ color: item.color }}>
                      {item.tag}
                    </span>
                  </div>
                  <div className={styles.metaRow}>
                    <span className={styles.itemTime}>{item.time}</span>
                    <span className={styles.metaDot} />
                    <span className={styles.verifiedText}>
                      <ShieldCheck size={11} className={styles.verifiedCheck} />
                      Verified
                    </span>
                  </div>
                </div>

                {/* Right: Payout Pill */}
                <div className={styles.rewardCol}>
                  <span
                    className={`${styles.payoutBadge} ${
                      isVE ? styles.payoutGold : styles.payoutXP
                    }`}
                  >
                    {item.reward}
                  </span>
                  <ChevronRight size={14} className={styles.chevron} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Today's Accumulated Yield Vault */}
        <div className={styles.summaryCard}>
          <div className={styles.summaryTitleRow}>
            <span className={styles.summaryTitle}>TODAY'S ACCUMULATED YIELD</span>
            <span className={styles.autoAuditTag}>Auto-Audited</span>
          </div>

          <div className={styles.summaryGrid}>
            <div className={styles.summaryPillXP}>
              <div className={styles.pillIconXP}>
                <Zap size={14} />
              </div>
              <div className={styles.pillText}>
                <span className={styles.pillValXP}>+215 XP</span>
                <span className={styles.pillLabel}>Total XP Earned</span>
              </div>
            </div>

            <div className={styles.summaryPillVE}>
              <div className={styles.pillIconVE}>
                <Coins size={14} />
              </div>
              <div className={styles.pillText}>
                <span className={styles.pillValVE}>+35 VEs</span>
                <span className={styles.pillLabel}>VE Tokens Deposited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default XPActivity
