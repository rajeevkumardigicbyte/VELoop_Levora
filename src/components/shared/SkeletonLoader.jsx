import styles from './shared.module.css'

const SkeletonLoader = ({ type = 'card', className = '' }) => {
  const Line = ({ w = '100%', h = 16, mb = 0, br = 4, mx = '' }) => (
    <div
      className={styles.skeletonLine}
      style={{ width: w, height: h, marginBottom: mb, borderRadius: br, ...(mx === 'auto' ? { margin: '0 auto' } : {}) }}
    />
  )

  const variants = {
    hero: (
      <div className={`${styles.skeletonHero} ${className}`}>
        <Line w="40%" h={14} mb={12} />
        <Line w="65%" h={52} mb={16} />
        <Line w="80%" h={14} mb={8} />
        <Line h={12} br={8} mb={8} />
        <Line w="35%" h={12} />
      </div>
    ),
    progress: (
      <div className={`${styles.skeletonCard} ${className}`}>
        <Line w="30%" h={12} mb={8} />
        <Line w="50%" h={36} mb={16} />
        <Line h={12} br={8} mb={8} />
        <Line w="40%" h={12} />
      </div>
    ),
    reward: (
      <div className={`${styles.skeletonCard} ${className}`}>
        <Line w="50%" h={12} mb={20} />
        <Line w={64} h={64} br={32} mb={16} mx="auto" />
        <Line w="60%" h={24} mb={8} mx="auto" />
        <Line h={8} br={8} />
      </div>
    ),
    roadmap: (
      <div className={`${styles.skeletonRoadmap} ${className}`}>
        {[1,2,3,4,5].map(i => (
          <div key={i} className={styles.skeletonRoadmapNode}>
            <Line w={52} h={52} br={26} />
            <Line w={70} h={10} mb={4} />
            <Line w={60} h={10} />
          </div>
        ))}
      </div>
    ),
    card: (
      <div className={`${styles.skeletonCard} ${className}`}>
        <Line w="40%" h={12} mb={8} />
        <Line w="70%" h={18} mb={12} />
        <Line w="50%" h={32} br={8} />
      </div>
    ),
    game: (
      <div className={`${styles.skeletonCard} ${className}`}>
        <Line h={260} br={12} mb={16} />
        <Line w="50%" h={40} br={8} mx="auto" />
      </div>
    ),
  }
  return variants[type] || variants.card
}

export default SkeletonLoader
