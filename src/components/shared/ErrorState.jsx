import styles from './shared.module.css'
const ErrorState = ({ title = 'Unable to Load Level Progress', message = "We couldn't load your level information right now.", onRetry }) => (
  <div className={styles.errorState}>
    <div className={styles.errorIcon}>⚠️</div>
    <div className={styles.errorTitle}>{title}</div>
    <div className={styles.errorMsg}>{message}</div>
    {onRetry && <button className="ve-btn ve-btn-outline" onClick={onRetry} style={{ marginTop: 8 }}>Try Again</button>}
  </div>
)
export default ErrorState
