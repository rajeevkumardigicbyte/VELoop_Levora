import React from 'react'
import { Tv, CalendarCheck, Users, Gamepad2, Flame, Magnet, ChevronRight, Trophy } from 'lucide-react'
import styles from './EarnMoreXP.module.css'

const earnActivitiesList = [
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

const EarnMoreXP = ({ data }) => {
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

      {/* Grid matching Screen 4 */}
      <div className={styles.activityList}>
        {earnActivitiesList.map((item) => {
          const IconComp = item.icon
          return (
            <div
              key={item.id}
              className={styles.activityRow}
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
                <div className={styles.activityName}>{item.title}</div>
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
