import React, { useEffect } from 'react'
import { Coins, Gem, TrendingUp, Target, Gift, Sparkles, Zap, RefreshCw } from 'lucide-react'
import LevelBadgeHex from '../shared/LevelBadgeHex'
import { LaurelBranch } from '../shared/LaurelWreath'
import styles from './LevelUpModal.module.css'

// Maps reward type to icon + color
const REWARD_ICON_MAP = {
  VEs:        { Icon: Coins,     color: '#FBBF24' },
  Gems:       { Icon: Gem,       color: '#A08CFF' },
  Spins:      { Icon: RefreshCw, color: '#00F5FF' },
  SVEs:       { Icon: Zap,       color: '#00E676' },
  'Safe Vault': { Icon: Gift,    color: '#F5C842' },
}

const LevelUpModal = ({ isOpen, onClose, data }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const targetLevel = data?.currentLevel || 5
  // Read the actual reward for the current level from live data
  const currentLevelData = data?.currentLevelData
  const reward = currentLevelData?.reward
  const rewardType = reward?.type || 'VEs'
  const rewardAmount = reward?.amount || 500
  const { Icon: RewardIcon, color: rewardColor } = REWARD_ICON_MAP[rewardType] || REWARD_ICON_MAP['VEs']

  // Perks by level tier
  const tierPerks = {
    1: ['Standard Task Rewards', 'Daily Login XP Access', 'Community Forum Badge'],
    2: ['5 Bonus Gems on Unlock', '1.05x Arcade XP Multiplier', 'Access to Daily Quests'],
    3: ['100 VE Coins Grant', 'Weekly Streak Shield (1 Day)', '+1 Daily Task Slot'],
    4: ['10 Bonus Gems on Unlock', '1.10x Task XP Multiplier', 'Priority Activity Tracking'],
    5: ['500 VE Coins Grant', '1.15x Arcade Score Multiplier', 'Executive Profile Flare'],
    6: ['2 Lucky Wheel Spins', '1.25x Arcade XP Multiplier', 'Unlock Platinum Vault Tasks'],
    7: ['100 SVEs Safe Grant', 'Exclusive Diamond Icon Frame', '2x Daily Task Refresh Rate'],
    8: ['1,000 VE Coins Grant', '1.40x Global XP Multiplier', 'Master Guild Privileges'],
    9: ['50 Gems Instant Deposit', 'Exclusive Grand Champion Aura', 'Infinite Task Re-rolls'],
    10: ['1 Tier 1 Safe Vault', 'Permanent 2.0x Reward Multiplier', 'Sovereign Holographic Profile'],
  }
  const perks = tierPerks[targetLevel] || tierPerks[5]
  const perkIcons = [TrendingUp, Target, Gift]
  const perkColors = ['#7B61FF', '#3D9EFF', '#F5C842']
  const perkIconStyles = [styles.perkIconTrend, styles.perkIconTarget, styles.perkIconGift]

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={`${styles.modalCard} animate-scaleIn`} onClick={(e) => e.stopPropagation()}>
        {/* Ambient Sparkles */}
        <div className={styles.sparkleWrap}>
          <span className={styles.sparkle} style={{ top: '8%', left: '12%' }}>
            <Sparkles size={20} color="#F5C842" />
          </span>
          <span className={styles.sparkle} style={{ top: '15%', right: '15%' }}>
            <Gem size={18} color="#A08CFF" />
          </span>
          <span className={styles.sparkle} style={{ top: '35%', left: '8%' }}>
            <Coins size={18} color="#F5C842" />
          </span>
          <span className={styles.sparkle} style={{ top: '40%', right: '10%' }}>
            <Sparkles size={16} color="#3D9EFF" />
          </span>
        </div>

        {/* Header */}
        <h2 className={styles.modalTitle}>LEVEL UP!</h2>
        <div className={styles.modalSub}>
          You've reached <strong style={{ color: 'var(--gold)' }}>Level {String(targetLevel).padStart(2, '0')} — {currentLevelData?.name || 'Gold Guardian'}</strong>
        </div>

        {/* Golden Pedestal with Badge */}
        <div className={styles.pedestalStage}>
          <div className={styles.podiumShield}>
            <LaurelBranch side="left" size={44} />
            <div className={styles.shieldCenter}>
              <LevelBadgeHex level={targetLevel} size={92} />
            </div>
            <LaurelBranch side="right" size={44} />
          </div>
          <div className={styles.goldenPlatform} />
        </div>

        {/* Dynamic Reward Card — reads from live data */}
        <div className={styles.rewardCardsRow}>
          <div className={styles.rewardCard} style={{ flex: 1 }}>
            <span className={styles.rewardCardVal}>
              +{rewardAmount} {rewardType}
            </span>
            <span className={styles.rewardCardIcon}>
              <RewardIcon size={28} color={rewardColor} />
            </span>
          </div>
        </div>

        {/* Unlocked Perks — dynamic per level */}
        <div className={styles.perksList}>
          {perks.map((perk, idx) => {
            const PerkIcon = perkIcons[idx]
            return (
              <div key={idx} className={styles.perkItem}>
                <span className={`${styles.perkIcon} ${perkIconStyles[idx]}`}>
                  <PerkIcon size={16} color={perkColors[idx]} />
                </span>
                <span className={styles.perkText}>{perk}</span>
              </div>
            )
          })}
        </div>

        {/* Claim Button */}
        <button
          className="ve-btn ve-btn-gold"
          onClick={onClose}
          style={{ width: '100%', padding: '16px', fontSize: '16px', fontWeight: 800 }}
        >
          Claim Rewards
        </button>
      </div>
    </div>
  )
}

export default LevelUpModal
