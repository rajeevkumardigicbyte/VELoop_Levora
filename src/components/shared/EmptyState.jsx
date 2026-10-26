import styles from './shared.module.css'
const EmptyState = ({ icon = '📊', title = 'Nothing here yet', message = 'Start earning to see your activity.', ctaLabel, onCta }) => (
  <div className={styles.emptyState}>
    <div className={styles.emptyIcon}>{icon}</div>
    <div className={styles.emptyTitle}>{title}</div>
    <div className={styles.emptyMsg}>{message}</div>
    {ctaLabel && onCta && <button className="ve-btn ve-btn-gold" onClick={onCta} style={{ marginTop: 8 }}>{ctaLabel} →</button>}
  </div>
)
export default EmptyState
