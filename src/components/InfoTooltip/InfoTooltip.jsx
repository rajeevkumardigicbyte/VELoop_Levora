import { useState } from 'react'
import styles from './InfoTooltip.module.css'
const InfoTooltip = ({ text }) => {
  const [v, setV] = useState(false)
  return (
    <span className={styles.wrap} onMouseEnter={() => setV(true)} onMouseLeave={() => setV(false)} onClick={() => setV(x => !x)}>
      <span className={styles.icon}>ⓘ</span>
      {v && <span className={styles.tip} role="tooltip">{text}</span>}
    </span>
  )
}
export default InfoTooltip
