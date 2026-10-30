import React, { useState } from 'react'
import { User, Home, Coins, Gift, Wallet } from 'lucide-react'
import useLevelData from '../../hooks/useLevelData'
import LevelHero from '../../components/LevelHero/LevelHero'
import NextLevelReward from '../../components/NextLevelReward/NextLevelReward'
import LevelRoadmap from '../../components/LevelRoadmap/LevelRoadmap'
import PlayAndEarn from '../../components/PlayAndEarn/PlayAndEarn'
import XPActivity from '../../components/XPActivity/XPActivity'
import EarnMoreXP from '../../components/EarnMoreXP/EarnMoreXP'
import LevelUpModal from '../../components/LevelUpModal/LevelUpModal'
import SkeletonLoader from '../../components/shared/SkeletonLoader'
import ErrorState from '../../components/shared/ErrorState'
import styles from './LevelDashboard.module.css'

const LevelDashboard = () => {
  const {
    data,
    loading,
    error,
    showLevelUp,
    triggerLevelUp,
    closeLevelUp,
    retryLoad,
  } = useLevelData()

  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="page-wrapper">
      {/* Top Navbar */}
      <header className={styles.navbar}>
        <div className="content-container">
          <div className={styles.navInner}>
            <a href="#hero" className={styles.brand}>
              <img src="/assets/logo.svg" alt="VELOOP Logo" className={styles.brandLogoImg} />
              <span className={styles.brandName}>VELOOP</span>
              <span className={styles.brandSub}>REWARDS</span>
            </a>

            <nav className={styles.navLinks}>
              <a href="#hero" className={`${styles.navLink} ${activeTab === 'home' ? styles.navLinkActive : ''}`} onClick={() => setActiveTab('home')}>
                Level Hub
              </a>
              <a href="#roadmap" className={`${styles.navLink} ${activeTab === 'roadmap' ? styles.navLinkActive : ''}`} onClick={() => setActiveTab('roadmap')}>
                Roadmap
              </a>
              <a href="#arcade" className={`${styles.navLink} ${activeTab === 'arcade' ? styles.navLinkActive : ''}`} onClick={() => setActiveTab('arcade')}>
                Arcade
              </a>
              <a href="#activity" className={`${styles.navLink} ${activeTab === 'activity' ? styles.navLinkActive : ''}`} onClick={() => setActiveTab('activity')}>
                Activity
              </a>
              <a href="#earn" className={`${styles.navLink} ${activeTab === 'earn' ? styles.navLinkActive : ''}`} onClick={() => setActiveTab('earn')}>
                Earn XP
              </a>
            </nav>

            <div className={styles.navRight}>
              {data && (
                <div className={styles.walletPill}>
                  <img src="/assets/xp-1.svg" alt="XP" className={styles.walletSvg} />
                  <span className={styles.walletVal}>{data.currentXP?.toLocaleString()} XP</span>
                </div>
              )}
              <div
                className={styles.userAvatar}
                onClick={triggerLevelUp}
                title="Preview Level Up Celebration"
                role="button"
                tabIndex={0}
                aria-label="User Profile"
              >
                <User size={18} color="#FFFFFF" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content (Section 39 Desktop Layout & Page 33 Mobile screens) */}
      <main className={`content-container ${styles.mainContent}`}>
        {loading && (
          <div className={styles.loadingContainer}>
            <SkeletonLoader type="hero" />
            <div className={styles.gridTwoCol}>
              <SkeletonLoader type="progress" />
              <SkeletonLoader type="reward" />
            </div>
            <SkeletonLoader type="roadmap" />
            <SkeletonLoader type="game" />
          </div>
        )}

        {error && (
          <div style={{ padding: '60px 0' }}>
            <ErrorState onRetry={retryLoad} />
          </div>
        )}

        {!loading && !error && data && (
          <>
            {/* ROW 1: Current Level + XP Progress | Next Reward (Locked Reward Vault Card) */}
            <div id="hero" className={styles.heroRewardGrid}>
              <div className={styles.heroCol}>
                <LevelHero data={data} onTriggerLevelUp={triggerLevelUp} />
              </div>
              <div className={styles.rewardCol}>
                <NextLevelReward data={data} onTriggerLevelUp={triggerLevelUp} />
              </div>
            </div>

            {/* ROW 2: Level Progression Roadmap */}
            <div id="roadmap" className={styles.roadmapSection}>
              <LevelRoadmap data={data} />
            </div>

            {/* ROW 3: PLAY & EARN (XP Catcher Mini Game) | XP Activity */}
            <div className={styles.arcadeActivityGrid}>
              <div id="arcade" className={styles.arcadeCol}>
                <PlayAndEarn />
              </div>
              <div id="activity" className={styles.activityCol}>
                <XPActivity />
              </div>
            </div>

            {/* ROW 4: EARN MORE XP & REWARDS */}
            <div id="earn" className={styles.earnSection}>
              <EarnMoreXP data={data} />
            </div>
          </>
        )}
      </main>

      {/* Screen 5: "LEVEL UP!" Celebration Modal */}
      {data && (
        <LevelUpModal
          isOpen={showLevelUp}
          onClose={closeLevelUp}
          data={data}
        />
      )}

      {/* Screen 1 Mobile Bottom Navigation Bar */}
      <nav className={styles.mobileBottomNav}>
        {[
          { id: 'home', label: 'Home', icon: Home, href: '#hero' },
          { id: 'earn', label: 'Earn', icon: Coins, href: '#earn' },
          { id: 'rewards', label: 'Rewards', icon: Gift, href: '#roadmap' },
          { id: 'wallet', label: 'Wallet', icon: Wallet, href: '#activity' },
          { id: 'profile', label: 'Profile', icon: User, onClick: triggerLevelUp },
        ].map((item) => {
          const IconComp = item.icon
          const isActive = activeTab === item.id
          return (
            <a
              key={item.id}
              href={item.href || '#'}
              className={`${styles.bottomNavItem} ${isActive ? styles.bottomNavItemActive : ''}`}
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault()
                  item.onClick()
                } else {
                  setActiveTab(item.id)
                }
              }}
            >
              <IconComp size={18} className={styles.bottomNavIcon} color={isActive ? 'var(--gold)' : 'var(--text-muted)'} />
              <span className={styles.bottomNavLabel}>{item.label}</span>
            </a>
          )
        })}
      </nav>

      {/* Desktop Footer */}
      <footer className={styles.footer}>
        <div className="content-container">
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <div className={styles.brand}>
                <img src="/assets/logo.svg" alt="VELOOP Logo" className={styles.brandLogoImg} />
                <span className={styles.brandName}>VELOOP</span>
                <span className={styles.brandSub}>REWARDS</span>
              </div>
              <p className={styles.footerText}>
                Tap. Earn. Loop. Transform digital screen time into real value through gamified progression and interactive micro-tasks.
              </p>
            </div>
            <div className={styles.footerLinks}>
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
              <span>Withdrawal Policy</span>
              <span>Support</span>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} VELOOP Rewards. All balances are virtual platform-managed credits. Not an investment, banking service, or gambling platform.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LevelDashboard
