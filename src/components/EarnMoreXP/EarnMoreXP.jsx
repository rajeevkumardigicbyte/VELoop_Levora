import React, { useState } from 'react'
import {
  Tv,
  CalendarCheck,
  Users,
  Gamepad2,
  Flame,
  Magnet,
  ChevronRight,
  Trophy,
  Sparkles,
  HelpCircle,
  Search,
  Compass,
} from 'lucide-react'
import styles from './EarnMoreXP.module.css'

// 6 Verified Active Activities from PDF Page 33 Screen 4
const activeActivities = [
  {
    id: 1,
    title: 'Watch & Earn',
    desc: 'Watch ads and earn',
    reward: '+50 XP',
    icon: Tv,
    color: '#7B61FF',
    tint: 'rgba(123, 97, 255, 0.08)',
    border: 'rgba(123, 97, 255, 0.35)',
    category: 'watch',
  },
  {
    id: 2,
    title: 'Daily Missions',
    desc: 'Complete daily tasks',
    reward: '+30 XP',
    icon: CalendarCheck,
    color: '#2ECC71',
    tint: 'rgba(46, 204, 113, 0.08)',
    border: 'rgba(46, 204, 113, 0.35)',
    category: 'tasks',
  },
  {
    id: 3,
    title: 'Refer & Earn',
    desc: 'Invite friends & earn',
    reward: '+100 XP',
    icon: Users,
    color: '#3D9EFF',
    tint: 'rgba(61, 158, 255, 0.08)',
    border: 'rgba(61, 158, 255, 0.35)',
    category: 'refer',
  },
  {
    id: 4,
    title: 'Mini Games',
    desc: 'Play games & win',
    reward: '+75 XP',
    icon: Gamepad2,
    color: '#9A58C6',
    tint: 'rgba(154, 88, 198, 0.08)',
    border: 'rgba(154, 88, 198, 0.35)',
    category: 'games',
  },
  {
    id: 5,
    title: 'Streak Bonus',
    desc: 'Maintain your streak',
    reward: '+25 XP',
    icon: Flame,
    color: '#FF5252',
    tint: 'rgba(255, 82, 82, 0.08)',
    border: 'rgba(255, 82, 82, 0.35)',
    category: 'streak',
  },
  {
    id: 6,
    title: 'XP Catcher',
    desc: 'Catch orbs & coins',
    reward: '+10 XP',
    icon: Magnet,
    color: '#3D9EFF',
    tint: 'rgba(61, 158, 255, 0.08)',
    border: 'rgba(61, 158, 255, 0.35)',
    category: 'catcher',
  },
]

// 3 Proposed Earning Concepts from PDF Sections 23 & 47 (Clearly marked "Coming Soon")
const upcomingConcepts = [
  {
    id: 101,
    title: 'Weekly Quest',
    desc: 'Complete a weekly objective milestone',
    reward: '+100 XP',
    icon: Compass,
    color: '#F5C842',
    tint: 'rgba(245, 200, 66, 0.08)',
    border: 'rgba(245, 200, 66, 0.35)',
    badge: 'Coming Soon',
  },
  {
    id: 102,
    title: 'Reward Hunt',
    desc: 'Find hidden reward elements around platform',
    reward: '+75 XP',
    icon: Search,
    color: '#0ED690',
    tint: 'rgba(14, 214, 144, 0.08)',
    border: 'rgba(14, 214, 144, 0.35)',
    badge: 'Coming Soon',
  },
  {
    id: 103,
    title: 'Quick Quiz',
    desc: 'Answer rapid platform knowledge quizzes',
    reward: '+60 XP',
    icon: HelpCircle,
    color: '#3D9EFF',
    tint: 'rgba(61, 158, 255, 0.08)',
    border: 'rgba(61, 158, 255, 0.35)',
    badge: 'Coming Soon',
  },
]

const EarnMoreXP = ({ data }) => {
  const [activeTab, setActiveTab] = useState('active')

  const listToRender = activeTab === 'active' ? activeActivities : upcomingConcepts

  return (
    <section aria-labelledby="earn-heading" className={styles.section}>
      {/* Header from Screen 4 */}
      <div className={styles.sectionHead}>
        <div>
          <h2 id="earn-heading" className={styles.screen4Title}>EARN & LEVEL UP</h2>
          <p className={styles.screen4Subtitle}>
            Complete activities. Earn XP. Climb levels. Get rewards.
          </p>
        </div>

        {/* Tab Segment (Section 23 & 47) */}
        <div className={styles.tabSegment} role="tablist" aria-label="Earning categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'active'}
            className={`${styles.tabBtn} ${activeTab === 'active' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('active')}
          >
            Active Tasks (6)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'upcoming'}
            className={`${styles.tabBtn} ${activeTab === 'upcoming' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Concepts (3)
          </button>
        </div>
      </div>

      {/* Grid matching Screen 4 */}
      <div className={styles.activityList}>
        {listToRender.map((item) => {
          const IconComp = item.icon
          const isUpcoming = Boolean(item.badge)

          return (
            <div
              key={item.id}
              className={`${styles.activityRow} ${isUpcoming ? styles.activityRowUpcoming : ''}`}
              style={{
                background: item.tint,
                borderColor: item.border,
              }}
              onClick={() => {
                if (item.category === 'catcher' || item.category === 'games') {
                  const el = document.getElementById('arcade')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <div
                className={styles.activityIconWrap}
                style={{ background: `${item.color}20`, color: item.color }}
              >
                <IconComp size={20} color={item.color} />
              </div>

              <div className={styles.activityDetails}>
                <div className={styles.activityNameRow}>
                  <span className={styles.activityName}>{item.title}</span>
                  {item.badge && (
                    <span className={styles.comingSoonPill}>{item.badge}</span>
                  )}
                </div>
                <div className={styles.activityDesc}>{item.desc}</div>
              </div>

              <div className={styles.activityActionWrap}>
                <span className={styles.rewardPillTag} style={{ color: item.color }}>
                  {item.reward}
                </span>
                <ChevronRight size={16} className={styles.chevron} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Encouragement Bar from Screen 4 */}
      <div className={styles.encouragementBar}>
        <span className={styles.encouragementText}>Keep going! You're doing great!</span>
        <Trophy size={18} color="#F5C842" className={styles.chartIcon} />
      </div>
    </section>
  )
}

export default EarnMoreXP
