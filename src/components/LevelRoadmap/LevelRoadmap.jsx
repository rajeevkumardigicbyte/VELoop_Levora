import React, { useState, useRef, useEffect } from 'react'
import {
  Check,
  Star,
  Sparkles,
  Target,
  Lock,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ShieldAlert,
  Crown,
  Flame,
  ArrowRight
} from 'lucide-react'
import styles from './LevelRoadmap.module.css'
import { levelStateConfig } from '../../data/levelData'

/**
 * Rich Lore & Milestone Perks metadata for each level
 */
const tierDetails = {
  1: {
    badgeName: 'Bronze Starter',
    lore: 'Entry tier for new champions. Complete onboarding tasks to ignite your progression journey.',
    perks: ['Standard Task Rewards', 'Daily Login XP Access', 'Community Forum Badge'],
    theme: 'bronze',
  },
  2: {
    badgeName: 'Iron Climber',
    lore: 'Proving ground for active players. Boost your momentum with guaranteed bonus gems.',
    perks: ['5 Bonus Gems on Unlock', '1.05x Arcade XP Multiplier', 'Access to Daily Quests'],
    theme: 'iron',
  },
  3: {
    badgeName: 'Steel Achiever',
    lore: 'Solidified progression status with elevated coin rewards and expanded daily challenge slots.',
    perks: ['100 VE Coins Grant', 'Weekly Streak Shield (1 Day)', '+1 Daily Task Slot'],
    theme: 'steel',
  },
  4: {
    badgeName: 'Silver Scout',
    lore: 'Elite explorer status granting access to rare gem rewards and boosted activity yields.',
    perks: ['10 Bonus Gems on Unlock', '1.10x Task XP Multiplier', 'Priority Activity Tracking'],
    theme: 'silver',
  },
  5: {
    badgeName: 'Gold Guardian',
    lore: 'Your current sovereign rank! Unlocks the 500 VE Coin vault and premium arcade multipliers.',
    perks: ['500 VE Coins Grant', '1.15x Arcade Score Multiplier', 'Executive Profile Flare', 'VIP Recommendation Access'],
    theme: 'gold',
  },
  6: {
    badgeName: 'Platinum Hero',
    lore: 'Your next major horizon! Unlocks 2 bonus spins on the Lucky Wheel and high-yield weekly vaults.',
    perks: ['2 Lucky Wheel Spins', '1.25x Arcade XP Multiplier', 'Unlock Platinum Vault Tasks', 'Advanced Streak Bonuses'],
    theme: 'platinum',
  },
  7: {
    badgeName: 'Diamond Legend',
    lore: 'Prestige tier with crystalline styling. Unlocks high-tier SVE Safe Vault and tournament invites.',
    perks: ['100 SVEs Safe Grant', 'Exclusive Diamond Icon Frame', '2x Daily Task Refresh Rate', 'Permanent Streak Armor'],
    theme: 'diamond',
  },
  8: {
    badgeName: 'Master Vanguard',
    lore: 'Mastery rank with a 1,000 VE Coin payout and dedicated VIP leaderboard standing.',
    perks: ['1,000 VE Coins Grant', '1.40x Global XP Multiplier', 'Master Guild Privileges', 'Personalized Daily Boosts'],
    theme: 'master',
  },
  9: {
    badgeName: 'Grand Champion',
    lore: 'Penultimate pinnacle reserved for top contenders. Features a massive 50 Gem vault.',
    perks: ['50 Gems Instant Deposit', 'Exclusive Grand Champion Aura', 'Infinite Task Re-rolls', 'Beta Feature Access'],
    theme: 'champion',
  },
  10: {
    badgeName: 'Apex Sovereign',
    lore: 'The ultimate summit of VELoop Rewards. Unlocks the legendary Tier 1 Safe Vault and permanent sovereign perks.',
    perks: ['1 Tier 1 Safe Vault', 'Permanent 2.0x Reward Multiplier', 'Sovereign Holographic Profile', 'Lifetime Elite Status'],
    theme: 'apex',
  },
}

const LevelRoadmap = ({ data }) => {
  const currentLvl = data?.currentLevel || 5
  const allLevels = data?.allLevels || []

  // Active selected level for the Milestone Inspector Dock
  const [selectedLevel, setSelectedLevel] = useState(
    () => allLevels.find(l => l.level === currentLvl) || allLevels[4] || null
  )

  const scrollRef = useRef(null)
  const nodeRefs = useRef({})

  // Smooth scroll helper to center any level node
  const scrollToLevel = (lvlNum, smooth = true) => {
    const nodeEl = nodeRefs.current[lvlNum]
    const container = scrollRef.current
    if (nodeEl && container) {
      const containerWidth = container.offsetWidth
      const nodeLeft = nodeEl.offsetLeft
      const nodeWidth = nodeEl.offsetWidth
      const targetScroll = nodeLeft - containerWidth / 2 + nodeWidth / 2
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: smooth ? 'smooth' : 'auto',
      })
    }
  }

  // Auto-center current level on initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToLevel(currentLvl, false)
    }, 180)
    return () => clearTimeout(timer)
  }, [currentLvl])

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  const activeLevelData = selectedLevel || allLevels[4]
  const activeDetails = tierDetails[activeLevelData?.level] || tierDetails[5]

  // Calculate percentage and status for Inspector
  const isCompleted = activeLevelData.level < currentLvl
  const isCurrent = activeLevelData.level === currentLvl
  const isNext = activeLevelData.level === currentLvl + 1
  const isLocked = activeLevelData.level > currentLvl + 1

  const percentToLevel = Math.min(
    100,
    Math.max(0, Math.round((data.currentXP / activeLevelData.xpRequired) * 100))
  )
  const xpDifference = activeLevelData.xpRequired - data.currentXP

  return (
    <section aria-labelledby="roadmap-heading" className={styles.section}>
      {/* Section Header with Legend & Controls */}
      <div className={styles.sectionHead}>
        <div className={styles.titleWrap}>
          <div className={styles.headerBadge}>
            <Sparkles size={12} className={styles.sparkleIcon} />
            <span>PROGRESSION PIPELINE</span>
          </div>
          <h2 id="roadmap-heading" className="section-title">
            Level Progression Roadmap
          </h2>
          <p className="section-subtitle">
            Visual milestone ladder — click any tier node to inspect criteria, perks, and reward vaults.
          </p>
        </div>

        <div className={styles.headActions}>
          {/* Legend */}
          <div className={styles.legend} role="list" aria-label="Roadmap Legend">
            <span className={styles.legendItem} role="listitem">
              <span className={styles.legendDotCompleted} /> Completed
            </span>
            <span className={styles.legendItem} role="listitem">
              <span className={styles.legendDotCurrent} /> Active (L{currentLvl})
            </span>
            <span className={styles.legendItem} role="listitem">
              <span className={styles.legendDotNext} /> Next Target
            </span>
            <span className={styles.legendItem} role="listitem">
              <span className={styles.legendDotLocked} /> Locked
            </span>
          </div>

          {/* Quick Jump & Scroll Controls */}
          <div className={styles.controlGroup}>
            <button
              type="button"
              className={styles.jumpBtn}
              onClick={() => {
                const current = allLevels.find(l => l.level === currentLvl)
                if (current) setSelectedLevel(current)
                scrollToLevel(currentLvl, true)
              }}
              title="Jump to Current Level"
            >
              <MapPin size={13} />
              <span>Current (L{currentLvl})</span>
            </button>
            <div className={styles.chevronGroup}>
              <button
                type="button"
                className={styles.chevronBtn}
                onClick={handleScrollLeft}
                aria-label="Scroll left"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                className={styles.chevronBtn}
                onClick={handleScrollRight}
                aria-label="Scroll right"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Milestone Conduit Rail */}
      <div
        className={styles.roadmapScroll}
        ref={scrollRef}
        tabIndex={0}
        aria-label="Horizontal Level Progression Track"
      >
        <div className={styles.roadmapTrack}>
          {allLevels.map((lvl, idx) => {
            const isNodeSelected = activeLevelData.level === lvl.level
            const nodeCompleted = lvl.level < currentLvl
            const nodeCurrent = lvl.level === currentLvl
            const nodeNext = lvl.level === currentLvl + 1
            const nodeLocked = lvl.level > currentLvl + 1
            const isApex = lvl.level === 10

            let nodeStateClass = styles.nodeLocked
            if (nodeCompleted) nodeStateClass = styles.nodeCompleted
            if (nodeCurrent) nodeStateClass = styles.nodeCurrent
            if (nodeNext) nodeStateClass = styles.nodeNext

            return (
              <div
                key={lvl.level}
                ref={el => (nodeRefs.current[lvl.level] = el)}
                className={`${styles.nodeWrapper} ${isNodeSelected ? styles.nodeWrapperSelected : ''}`}
                onClick={() => setSelectedLevel(lvl)}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedLevel(lvl)
                  }
                }}
                aria-label={`Level ${lvl.level}: ${lvl.name}, ${lvl.status}`}
              >
                {/* Laser Energy Conduit Segment (Connector between nodes) */}
                {idx < allLevels.length - 1 && (
                  <div
                    className={`${styles.conduitSegment} ${
                      lvl.level < currentLvl
                        ? styles.conduitCompleted
                        : lvl.level === currentLvl
                        ? styles.conduitActiveCharging
                        : styles.conduitLocked
                    }`}
                    aria-hidden="true"
                  >
                    {lvl.level === currentLvl && <div className={styles.chargingBeam} />}
                  </div>
                )}

                {/* Symmetrical Micro-Vault Node Card */}
                <div
                  className={`${styles.nodeCard} ${nodeStateClass} ${
                    isNodeSelected ? styles.nodeCardSelected : ''
                  } ${isApex ? styles.nodeCardApex : ''}`}
                >
                  {/* Top Uniform Status Pill (24px Fixed Slot) */}
                  <div className={styles.statusPillSlot}>
                    {nodeCompleted && (
                      <span className={styles.pillCompleted}>
                        <Check size={10} strokeWidth={3} /> COMPLETED
                      </span>
                    )}
                    {nodeCurrent && (
                      <span className={styles.pillCurrent}>
                        <span className={styles.radarDot} /> ACTIVE
                      </span>
                    )}
                    {nodeNext && (
                      <span className={styles.pillNext}>
                        <Target size={10} /> NEXT TARGET
                      </span>
                    )}
                    {nodeLocked && (
                      <span className={styles.pillLocked}>
                        <Lock size={9} /> LOCKED
                      </span>
                    )}
                  </div>

                  {/* Emblem Halo Centerpiece */}
                  <div className={styles.emblemHaloWrap}>
                    <div className={styles.emblemBezel}>
                      <img
                        src={lvl.badgeUrl}
                        alt=""
                        aria-hidden="true"
                        className={styles.badgeSvg}
                        loading="lazy"
                      />
                      {nodeCompleted && (
                        <div className={styles.badgeCheckCorner}>
                          <Check size={11} strokeWidth={3} />
                        </div>
                      )}
                      {nodeLocked && !isApex && (
                        <div className={styles.badgeLockCorner}>
                          <Lock size={10} />
                        </div>
                      )}
                      {isApex && (
                        <div className={styles.apexCrownBadge}>
                          <Crown size={12} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Level Tag & Tier Name */}
                  <div className={styles.nodeTypography}>
                    <span className={styles.nodeLevelNum}>
                      LVL {String(lvl.level).padStart(2, '0')}
                    </span>
                    <h4 className={styles.nodeTierName} title={lvl.name}>
                      {lvl.name}
                    </h4>
                    <span className={styles.nodeXPTarget}>
                      {lvl.xpRequired.toLocaleString()} XP
                    </span>
                  </div>

                  {/* Bottom Milestone Reward Capsule */}
                  <div
                    className={`${styles.rewardCapsule} ${
                      nodeCompleted ? styles.rewardCapsuleCompleted : ''
                    } ${nodeCurrent ? styles.rewardCapsuleCurrent : ''} ${
                      nodeNext ? styles.rewardCapsuleNext : ''
                    } ${nodeLocked ? styles.rewardCapsuleLocked : ''}`}
                  >
                    {lvl.reward?.icon && (
                      <img
                        src={lvl.reward.icon}
                        alt=""
                        aria-hidden="true"
                        className={styles.rewardIconImg}
                      />
                    )}
                    <span className={styles.rewardCapsuleText}>
                      +{lvl.reward?.amount} {lvl.reward?.type}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Interactive Milestone Inspector Dock (Unclipped Luxury Glass Inspector) */}
      <div className={styles.inspectorDock}>
        <div className={styles.dockGlowAura} aria-hidden="true" />

        <div className={styles.dockGrid}>
          {/* Column 1: Tier Identity & Lore */}
          <div className={styles.dockTierCol}>
            <div className={styles.dockBadgeWrapper}>
              <img
                src={activeLevelData.badgeUrl}
                alt=""
                aria-hidden="true"
                className={styles.dockBadgeImg}
              />
              {activeLevelData.level === 10 && (
                <div className={styles.dockApexGlow} aria-hidden="true" />
              )}
            </div>

            <div className={styles.dockTierInfo}>
              <div className={styles.dockHeadingRow}>
                <span className={styles.dockLevelPill}>
                  LEVEL {String(activeLevelData.level).padStart(2, '0')}
                </span>
                {isCompleted && (
                  <span className={styles.dockStatusCompleted}>
                    <Check size={12} /> COMPLETED
                  </span>
                )}
                {isCurrent && (
                  <span className={styles.dockStatusActive}>
                    <Sparkles size={12} /> ACTIVE RANK
                  </span>
                )}
                {isNext && (
                  <span className={styles.dockStatusNext}>
                    <Target size={12} /> TARGET GOAL
                  </span>
                )}
                {isLocked && (
                  <span className={styles.dockStatusLocked}>
                    <Lock size={12} /> LOCKED TIER
                  </span>
                )}
              </div>

              <h3 className={styles.dockTierTitle}>{activeLevelData.name}</h3>
              <p className={styles.dockTierLore}>{activeDetails.lore}</p>
            </div>
          </div>

          {/* Column 2: Milestone XP Gauge */}
          <div className={styles.dockGaugeCol}>
            <div className={styles.gaugeHeader}>
              <span className={styles.gaugeLead}>MILESTONE CRITERIA & XP TARGET</span>
              <span className={styles.gaugeTargetVal}>
                {activeLevelData.xpRequired.toLocaleString()} XP
              </span>
            </div>

            <div className={styles.gaugeBarTrack}>
              <div
                className={styles.gaugeBarFill}
                style={{ width: `${percentToLevel}%` }}
              />
              <div
                className={styles.gaugeBarIndicator}
                style={{ left: `${percentToLevel}%` }}
              />
            </div>

            <div className={styles.gaugeStatusRow}>
              {isCompleted ? (
                <span className={styles.gaugeSuccessText}>
                  <Check size={13} /> Tier Mastered & Claimed
                </span>
              ) : isCurrent ? (
                <span className={styles.gaugeCurrentText}>
                  <Flame size={13} /> In Progress: {data.currentXP.toLocaleString()} /{' '}
                  {activeLevelData.xpRequired.toLocaleString()} XP ({percentToLevel}%)
                </span>
              ) : (
                <span className={styles.gaugeRemainingText}>
                  {xpDifference > 0
                    ? `${xpDifference.toLocaleString()} XP remaining to achieve this tier`
                    : 'Milestone requirement reached'}
                </span>
              )}
            </div>
          </div>

          {/* Column 3: Rewards, Perks & Quick Action */}
          <div className={styles.dockPerksCol}>
            <div className={styles.dockRewardVault}>
              <span className={styles.vaultLabel}>MILESTONE VAULT REWARD</span>
              <div className={styles.vaultPill}>
                {activeLevelData.reward?.icon && (
                  <img
                    src={activeLevelData.reward.icon}
                    alt=""
                    aria-hidden="true"
                    className={styles.vaultRewardImg}
                  />
                )}
                <span className={styles.vaultRewardText}>
                  +{activeLevelData.reward?.amount} {activeLevelData.reward?.type}
                </span>
              </div>
            </div>

            <div className={styles.perksListWrap}>
              <span className={styles.perksListLabel}>TIER PRIVILEGES</span>
              <ul className={styles.perksList}>
                {activeDetails.perks.map((perk, pIdx) => (
                  <li key={pIdx} className={styles.perkItem}>
                    <Check size={11} className={styles.perkCheck} />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.dockActionRow}>
              {isCompleted ? (
                <button type="button" className="ve-btn ve-btn-outline" disabled>
                  Milestone Unlocked ✓
                </button>
              ) : isCurrent ? (
                <a href="#earn" className="ve-btn ve-btn-gold">
                  Earn XP for Next Tier <ArrowRight size={14} />
                </a>
              ) : isNext ? (
                <a href="#earn" className="ve-btn ve-btn-purple">
                  Boost to L{activeLevelData.level} <ArrowRight size={14} />
                </a>
              ) : (
                <a href="#earn" className="ve-btn ve-btn-ghost">
                  View XP Missions <ArrowRight size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LevelRoadmap
