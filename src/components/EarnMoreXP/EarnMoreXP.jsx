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
  Zap,
  Target,
  ArrowRight
} from 'lucide-react'
import styles from './EarnMoreXP.module.css'

// 6 Verified Active Operations with Professional Fintech / Gaming Copy
const activeActivities = [
  {
    id: 1,
    title: 'Sponsored Media Stream',
    desc: 'Engage curated partner streams and brand showcases',
    reward: '+50 XP',
    icon: Tv,
    color: '#A855F7',
    tint: 'rgba(168, 85, 247, 0.08)',
    border: 'rgba(168, 85, 247, 0.35)',
    category: 'watch',
    tag: 'Media Yield',
  },
  {
    id: 2,
    title: 'Protocol Daily Quests',
    desc: 'Execute 3 daily objectives to fulfill user quota',
    reward: '+30 XP',
    icon: CalendarCheck,
    color: '#00E676',
    tint: 'rgba(0, 230, 118, 0.08)',
    border: 'rgba(0, 230, 118, 0.35)',
    category: 'tasks',
    tag: 'Daily Quota',
  },
  {
    id: 3,
    title: 'Network Expansion',
    desc: 'Invite peers to join your VELoop squad & earn commission',
    reward: '+100 XP',
    icon: Users,
    color: '#00F5FF',
    tint: 'rgba(0, 245, 255, 0.08)',
    border: 'rgba(0, 245, 255, 0.35)',
    category: 'refer',
    tag: 'Affiliate',
  },
  {
    id: 4,
    title: 'Skill Arcade Tournaments',
    desc: 'Compete in rapid reflex challenges and leaderboard runs',
    reward: '+75 XP',
    icon: Gamepad2,
    color: '#C084FC',
    tint: 'rgba(192, 132, 252, 0.08)',
    border: 'rgba(192, 132, 252, 0.35)',
    category: 'games',
    tag: 'Arcade Multiplier',
  },
  {
    id: 5,
    title: 'Velocity Momentum Multiplier',
    desc: 'Maintain consecutive daily logins for stacked compounding yield',
    reward: '+25 XP',
    icon: Flame,
    color: '#FF1E56',
    tint: 'rgba(255, 30, 86, 0.08)',
    border: 'rgba(255, 30, 86, 0.35)',
    category: 'streak',
    tag: 'Streak Shield',
  },
  {
    id: 6,
    title: 'Magnetic Reflex Blitz',
    desc: 'Harvest falling XP orbs, VE tokens, and gems in the arcade',
    reward: '+10 XP',
    icon: Magnet,
    color: '#FBBF24',
    tint: 'rgba(251, 191, 36, 0.08)',
    border: 'rgba(251, 191, 36, 0.35)',
    category: 'catcher',
    tag: 'Instant Play',
  },
]

// 3 Proposed Earning Concepts (Clearly marked "Coming Soon")
const upcomingConcepts = [
  {
    id: 101,
    title: 'Weekly Horizon Quest',
    desc: 'Complete cross-platform weekly objective milestones',
    reward: '+100 XP',
    icon: Compass,
    color: '#FBBF24',
    tint: 'rgba(251, 191, 36, 0.08)',
    border: 'rgba(251, 191, 36, 0.35)',
    badge: 'Coming Soon',
    tag: 'Milestone',
  },
  {
    id: 102,
    title: 'Cryptic Bounty Hunt',
    desc: 'Find hidden reward tokens distributed across platform vaults',
    reward: '+75 XP',
    icon: Search,
    color: '#00E676',
    tint: 'rgba(0, 230, 118, 0.08)',
    border: 'rgba(0, 230, 118, 0.35)',
    badge: 'Coming Soon',
    tag: 'Discovery',
  },
  {
    id: 103,
    title: 'Rapid Knowledge Audit',
    desc: 'Answer quick interactive queries on platform tokenomics',
    reward: '+60 XP',
    icon: HelpCircle,
    color: '#00F5FF',
    tint: 'rgba(0, 245, 255, 0.08)',
    border: 'rgba(0, 245, 255, 0.35)',
    badge: 'Coming Soon',
    tag: 'Academy',
  },
]

const EarnMoreXP = ({ data }) => {
  const [activeTab, setActiveTab] = useState('active')

  const listToRender = activeTab === 'active' ? activeActivities : upcomingConcepts
  const xpRemaining = data?.xpRemaining || 1580
  const nextLevel = data?.nextLevel || 6
  const nextLevelName = data?.nextLevelName || 'Platinum Hero'

  return (
    <section aria-labelledby="earn-heading" className={styles.section}>
      {/* Section Head with Header Badge */}
      <div className={styles.sectionHead}>
        <div>
          <div className={styles.headerBadge}>
            <Zap size={11} className={styles.badgeIcon} />
            <span>BOOST OPERATIONS</span>
          </div>
          <h2 id="earn-heading" className={styles.screen4Title}>XP ACCELERATION HUB</h2>
          <p className={styles.screen4Subtitle}>
            Select a verified earning track. Complete high-yield micro-tasks, stack daily momentum, and accelerate to Level {String(nextLevel).padStart(2, '0')}.
          </p>
        </div>

        {/* Tab Segment */}
        <div className={styles.tabSegment} role="tablist" aria-label="Earning categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'active'}
            className={`${styles.tabBtn} ${activeTab === 'active' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('active')}
          >
            Active Operations (6)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'upcoming'}
            className={`${styles.tabBtn} ${activeTab === 'upcoming' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Protocols (3)
          </button>
        </div>
      </div>

      {/* Grid of Earning Operations */}
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
                  {item.badge ? (
                    <span className={styles.comingSoonPill}>{item.badge}</span>
                  ) : (
                    <span className={styles.operationTag} style={{ color: item.color }}>
                      {item.tag}
                    </span>
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

      {/* Dynamic Milestone Progress Horizon Bar */}
      <div className={styles.encouragementBar}>
        <div className={styles.encouragementLeft}>
          <div className={styles.trophyIconWrap}>
            <Trophy size={16} color="#FBBF24" />
          </div>
          <div className={styles.encouragementTextWrap}>
            <span className={styles.encouragementHeading}>MILESTONE HORIZON: LEVEL {String(nextLevel).padStart(2, '0')} ({nextLevelName.toUpperCase()})</span>
            <span className={styles.encouragementText}>
              <strong>{xpRemaining.toLocaleString()} XP required</strong> to claim the +2 Spins Vault. Complete any 2 active operations today to close the gap.
            </span>
          </div>
        </div>
        <button
          type="button"
          className={styles.accelerateBtn}
          onClick={() => {
            const el = document.getElementById('arcade')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span>Launch Arcade</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </section>
  )
}

export default EarnMoreXP
