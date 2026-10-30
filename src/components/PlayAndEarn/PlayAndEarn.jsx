import React from 'react'
import GameContainer from './GameContainer'
import styles from './PlayAndEarn.module.css'

const PlayAndEarn = () => {
  return (
    <div className={styles.arcadeWrapper}>
      <GameContainer />
    </div>
  )
}

export default PlayAndEarn
