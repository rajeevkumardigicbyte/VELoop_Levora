import React from 'react'
import useLevelData from '../../hooks/useLevelData'
import LevelHero from '../../components/LevelHero/LevelHero'
import NextLevelReward from '../../components/NextLevelReward/NextLevelReward'
import LevelRoadmap from '../../components/LevelRoadmap/LevelRoadmap'
import PlayAndEarn from '../../components/PlayAndEarn/PlayAndEarn'
import EarnMoreXP from '../../components/EarnMoreXP/EarnMoreXP'
import XPActivity from '../../components/XPActivity/XPActivity'
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

  return (
    <div className="page-wrapper">
      {/* Top Navbar */}
      <header className={styles.navbar}>
        <div className="content-container">
          <div className={styles.navInner}>
            <div className={styles.brand}>
              <span className={styles.brandLogo}>⚡</span>
              <span className={styles.brandName}>VELOOP</span>
              <span className={styles.brandSub}>REWARDS</span>
            </div>

            <nav className={styles.navLinks}>
              <a href="#hero" className={`${styles.navLink} ${styles.navLinkActive}`}>
                Level Hub
              </a>
              <a href="#roadmap" className={styles.navLink}>
                Roadmap
              </a>
              <a href="#arcade" className={styles.navLink}>
                Arcade
              </a>
              <a href="#earn" className={styles.navLink}>
                Earn XP
              </a>
              <a href="#activity" className={styles.navLink}>
                Activity
              </a>
            </nav>

            <div className={styles.navRight}>
              {data && (
                <div className={styles.walletPill}>
                  <span className={styles.walletIcon}>🪙</span>
                  <span className={styles.walletVal}>{data.currentXP?.toLocaleString()} XP</span>
                </div>
              )}
              <div className={styles.userAvatar}>👤</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="content-container" style={{ paddingTop: '20px' }}>
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
            {/* Hero Section */}
            <div id="hero">
              <LevelHero data={data} onTriggerLevelUp={triggerLevelUp} />
            </div>

            {/* Split Highlight Section: Current Progress Details & Locked Vault Reward */}
            <section className={styles.highlightSection}>
              <div className={styles.highlightGrid}>
                {/* Level Roadmap */}
                <div id="roadmap" className={styles.roadmapCol}>
                  <LevelRoadmap data={data} />
                </div>
                {/* Vault Reward Card */}
                <div className={styles.rewardCol}>
                  <NextLevelReward data={data} />
                </div>
              </div>
            </section>

            {/* Play & Earn Arcade Section */}
            <div id="arcade">
              <PlayAndEarn />
            </div>

            {/* Earning Features Section */}
            <div id="earn">
              <EarnMoreXP data={data} />
            </div>

            {/* XP Activity Feed & Sources */}
            <div id="activity">
              <XPActivity />
            </div>
          </>
        )}
      </main>

      {/* Level Up Celebration Modal */}
      {data && (
        <LevelUpModal
          isOpen={showLevelUp}
          onClose={closeLevelUp}
          data={data}
        />
      )}

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="content-container">
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <div className={styles.brand}>
                <span className={styles.brandLogo}>⚡</span>
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
