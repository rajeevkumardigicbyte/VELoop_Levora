import React, { useState } from 'react'
import styles from './LevelRoadmap.module.css'
import { levelStateConfig } from '../../data/levelData'

const LevelNode = ({ level, isLast }) => {
  const [expanded, setExpanded] = useState(false)
  const config = levelStateConfig[level.status]

  const stateClass = {
    completed: styles.nodeCompleted,
    current: styles.nodeCurrent,
    next: styles.nodeNext,
    locked: styles.nodeLocked,
  }[level.status]

  return (
    <div
      className={`${styles.nodeWrapper} animate-fadeInUp`}
      style={{ animationDelay: `${level.level * 0.08}s` }}
    >
      <div
        className={styles.nodeInner}
        onClick={() => setExpanded(e => !e)}
        role="button"
        tabIndex={0}
      >
        {/* Circle */}
        <div className={`${styles.nodeCircle} ${stateClass}`}>
          {level.status === 'completed' ? (
            <span className={styles.checkIcon}>✓</span>
          ) : level.status === 'current' ? (
            <span className={styles.starIcon}>★</span>
          ) : level.status === 'next' ? (
            <span className={styles.nextIcon}>➔</span>
          ) : (
            <span className={styles.lockSmall}>🔒</span>
          )}
        </div>

        {/* Level number */}
        <div className={styles.levelNum}>L{String(level.level).padStart(2, '0')}</div>

        {/* Level name */}
        <div className={styles.levelName}>{level.name}</div>

        {/* Reward badge */}
        <div
          className={`${styles.rewardPill} ${
            level.status === 'locked' ? styles.rewardPillLocked : ''
          }`}
        >
          {level.status === 'completed'
            ? '✓ '
            : level.status === 'locked'
            ? '🔒 '
            : (level.reward?.icon || '🎁') + ' '}
          {level.reward?.amount} {level.reward?.type}
        </div>

        {/* State label */}
        {level.status === 'current' && (
          <span className={styles.youAreHere}>📍 You Are Here</span>
        )}
        {level.status === 'next' && (
          <span className={styles.nextGoal}>⭐ Next Goal</span>
        )}
      </div>

      {/* Expanded detail popover */}
      {expanded && (
        <div className={`${styles.detail} animate-scaleIn`}>
          <div className={styles.detailRow}>
            <span>Tier</span>
            <span>Level {level.level}</span>
          </div>
          <div className={styles.detailRow}>
            <span>Name</span>
            <span>{level.name}</span>
          </div>
          <div className={styles.detailRow}>
            <span>XP Target</span>
            <span>{level.xpRequired.toLocaleString()} XP</span>
          </div>
          <div className={styles.detailRow}>
            <span>Reward</span>
            <span className="text-gold">
              {level.reward?.icon} {level.reward?.amount} {level.reward?.type}
            </span>
          </div>
          <div className={styles.detailRow}>
            <span>Status</span>
            <span style={{ color: config?.color }}>{config?.label}</span>
          </div>
        </div>
      )}

      {/* Connecting line */}
      {!isLast && (
        <div
          className={`${styles.connector} ${
            level.status === 'completed' ? styles.connectorFilled : ''
          }`}
        />
      )}
    </div>
  )
}

const LevelRoadmap = ({ data }) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <div>
          <h2 className="section-title">🗺️ Level Progression Roadmap</h2>
          <p className="section-subtitle">
            Visual milestone ladder — click on any level node to view XP criteria and milestone rewards
          </p>
        </div>
        <div className={styles.legend}>
          {Object.entries(levelStateConfig).map(([key, val]) => (
            <span key={key} className={styles.legendItem}>
              <span style={{ color: val.color }}>{val.icon}</span> {val.label}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.roadmapScroll}>
        <div className={styles.roadmapTrack}>
          {data.allLevels.map((level, idx) => (
            <LevelNode
              key={level.level}
              level={level}
              isLast={idx === data.allLevels.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LevelRoadmap
