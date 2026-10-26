import React, { useState } from 'react'
import styles from './XPActivity.module.css'
import { xpActivityData, xpSources } from '../../data/xpActivityData'
import EmptyState from '../shared/EmptyState'

const XPActivity = () => {
  const [filter, setFilter] = useState('all')
  const [activities, setActivities] = useState(xpActivityData)

  const filtered = filter === 'all'
    ? activities
    : activities.filter(a => a.category === filter)

  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <div>
          <h2 className="section-title">📊 XP Activity & Sources</h2>
          <p className="section-subtitle">
            Track your recent XP accumulation and view verified earning avenues
          </p>
        </div>
      </div>

      <div className={styles.activityGrid}>
        {/* Left: Recent Activity Feed */}
        <div className={styles.feedCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Recent XP Gains</span>
            <div className={styles.filterRow}>
              {['all', 'game', 'referral', 'watch'].map((f) => (
                <button
                  key={f}
                  className={`${styles.filterBtn} ${filter === f ? styles.filterBtnActive : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.feedList}>
            {filtered.length === 0 ? (
              <EmptyState
                icon="📭"
                title="No activity for this category"
                message="Complete tasks in this category to see your XP log."
              />
            ) : (
              filtered.map((item) => (
                <div key={item.id} className={styles.feedItem}>
                  <div className={styles.feedIconWrap}>{item.icon}</div>
                  <div className={styles.feedDetails}>
                    <div className={styles.feedAction}>{item.activity}</div>
                    <div className={styles.feedTime}>{item.time}</div>
                  </div>
                  <div className={styles.feedXP}>+{item.xp} XP</div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right: XP Sources Overview */}
        <div className={styles.sourcesCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>XP Opportunities</span>
            <span className="ve-badge ve-badge-gold">Ways to Earn</span>
          </div>

          <div className={styles.sourcesList}>
            {xpSources.map((source) => (
              <div key={source.label} className={styles.sourceRow}>
                <div className={styles.sourceLeft}>
                  <span className={styles.sourceIcon}>{source.icon}</span>
                  <span className={styles.sourceLabel}>{source.label}</span>
                </div>
                <div className={styles.sourceRight}>
                  <span className={styles.sourceBadge} style={{ color: source.color }}>
                    Up to +{source.xp} XP
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sourceNotice}>
            XP is granted for valid interactions. Automated script attempts or bots trigger automated account penalty and XP rollbacks.
          </div>
        </div>
      </div>
    </section>
  )
}

export default XPActivity
