import React, { useState } from 'react'
import { Check, Star, ArrowRight, Lock, MapPin, Target } from 'lucide-react'
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
      style={{ animationDelay: `${level.level * 0.05}s` }}
    >
      <div
        className={styles.nodeInner}
        onClick={() => setExpanded(e => !e)}
        role="button"
        tabIndex={0}
      >
        {/* Circle with Badge */}
        <div className={`${styles.nodeCircle} ${stateClass}`}>
          {level.badgeUrl ? (
            <img src={level.badgeUrl} alt={level.name} className={styles.roadmapBadgeImg} />
          ) : level.status === 'completed' ? (
            <Check size={20} color="#2ECC71" />
          ) : level.status === 'current' ? (
            <Star size={20} color="#F5C842" fill="#F5C842" />
          ) : level.status === 'next' ? (
            <ArrowRight size={20} color="#7B61FF" />
          ) : (
            <Lock size={18} color="#677196" />
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
          {level.reward?.icon?.startsWith('/') ? (
            <img src={level.reward.icon} alt="" className={styles.rewardIconImg} />
          ) : (
            level.status === 'completed' ? (
              <Check size={12} style={{ display: 'inline', marginRight: '3px' }} />
            ) : level.status === 'locked' ? (
              <Lock size={12} style={{ display: 'inline', marginRight: '3px' }} />
            ) : null
          )}
          <span>{level.reward?.amount} {level.reward?.type}</span>
        </div>

        {/* State label */}
        {level.status === 'current' && (
          <span className={styles.youAreHere}>
            <MapPin size={11} style={{ display: 'inline', marginRight: '3px' }} /> You Are Here
          </span>
        )}
        {level.status === 'next' && (
          <span className={styles.nextGoal}>
            <Target size={11} style={{ display: 'inline', marginRight: '3px' }} /> Next Goal
          </span>
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
              {level.reward?.amount} {level.reward?.type}
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
          <h2 className="section-title">Level Progression Roadmap</h2>
          <p className="section-subtitle">
            Visual milestone ladder — click on any level node to view XP criteria and milestone rewards
          </p>
        </div>
        <div className={styles.legend}>
          <span className={styles.legendItem}>
            <Check size={12} color="var(--state-completed)" /> Completed
          </span>
          <span className={styles.legendItem}>
            <Star size={12} color="var(--state-current)" fill="var(--state-current)" /> You Are Here
          </span>
          <span className={styles.legendItem}>
            <ArrowRight size={12} color="var(--state-next)" /> Next Goal
          </span>
          <span className={styles.legendItem}>
            <Lock size={12} color="var(--state-locked-text)" /> Locked
          </span>
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
