import React from 'react'
import useGame from '../../hooks/useGame'
import GameStart from './GameStart'
import GamePlay from './GamePlay'
import GameResult from './GameResult'
import styles from './PlayAndEarn.module.css'

const GameContainer = () => {
  const {
    gameState,
    score,
    timeLeft,
    coins,
    collectorX,
    reward,
    GAME_WIDTH,
    GAME_HEIGHT,
    COLLECTOR_WIDTH,
    startGame,
    endGame,
    resetGame,
    moveCollector,
    setCollectorPos,
  } = useGame()

  return (
    <div className={styles.gameCardWrapper}>
      {gameState === 'idle' && <GameStart onStart={startGame} />}
      {gameState === 'playing' && (
        <GamePlay
          score={score}
          timeLeft={timeLeft}
          coins={coins}
          collectorX={collectorX}
          GAME_WIDTH={GAME_WIDTH}
          GAME_HEIGHT={GAME_HEIGHT}
          COLLECTOR_WIDTH={COLLECTOR_WIDTH}
          moveCollector={moveCollector}
          setCollectorPos={setCollectorPos}
          onEndGame={endGame}
        />
      )}
      {gameState === 'result' && (
        <GameResult
          score={score}
          reward={reward}
          onPlayAgain={resetGame}
        />
      )}
    </div>
  )
}

export default GameContainer
