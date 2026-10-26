import { useState, useEffect, useRef, useCallback } from 'react'

const GAME_DURATION = 20
const COLLECTOR_WIDTH = 90
const GAME_WIDTH = 400
const GAME_HEIGHT = 340

const getReward = (score) => {
  if (score >= 30) return { xp: 35, extra: '+ 1 Gem', label: 'Amazing!' }
  if (score >= 20) return { xp: 25, extra: null, label: 'Great job!' }
  if (score >= 10) return { xp: 15, extra: null, label: 'Good job!' }
  return { xp: 5, extra: null, label: 'Keep going!' }
}

const useGame = () => {
  const [gameState, setGameState] = useState('idle')
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION)
  const [coins, setCoins] = useState([])
  const [collectorX, setCollectorX] = useState(GAME_WIDTH / 2 - COLLECTOR_WIDTH / 2)
  const [reward, setReward] = useState(null)

  const timerRef = useRef(null)
  const coinTimerRef = useRef(null)
  const frameRef = useRef(null)
  const coinIdRef = useRef(0)
  const scoreRef = useRef(0)
  const collectorRef = useRef(collectorX)
  const gameStateRef = useRef('idle')

  useEffect(() => { collectorRef.current = collectorX }, [collectorX])
  useEffect(() => { gameStateRef.current = gameState }, [gameState])

  const spawnCoin = useCallback(() => {
    const x = Math.random() * (GAME_WIDTH - 50) + 10
    const isGem = Math.random() < 0.12
    coinIdRef.current += 1
    setCoins(prev => [...prev, { id: coinIdRef.current, x, y: -40, isGem, speed: 2 + Math.random() * 2.5 }])
  }, [])

  const endGame = useCallback(() => {
    gameStateRef.current = 'result'
    setGameState('result')
    setReward(getReward(scoreRef.current))
    clearInterval(timerRef.current)
    clearInterval(coinTimerRef.current)
    cancelAnimationFrame(frameRef.current)
    setCoins([])
  }, [])

  const startGame = useCallback(() => {
    setScore(0); scoreRef.current = 0
    setTimeLeft(GAME_DURATION)
    setCoins([])
    setCollectorX(GAME_WIDTH / 2 - COLLECTOR_WIDTH / 2)
    setReward(null)
    setGameState('playing')
    gameStateRef.current = 'playing'
  }, [])

  const resetGame = useCallback(() => {
    clearInterval(timerRef.current)
    clearInterval(coinTimerRef.current)
    cancelAnimationFrame(frameRef.current)
    setGameState('idle'); gameStateRef.current = 'idle'
    setScore(0); scoreRef.current = 0
    setTimeLeft(GAME_DURATION)
    setCoins([])
    setReward(null)
    setCollectorX(GAME_WIDTH / 2 - COLLECTOR_WIDTH / 2)
  }, [])

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') return
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { endGame(); return 0 }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [gameState, endGame])

  // Coin spawner
  useEffect(() => {
    if (gameState !== 'playing') return
    coinTimerRef.current = setInterval(spawnCoin, 900)
    return () => clearInterval(coinTimerRef.current)
  }, [gameState, spawnCoin])

  // Physics loop
  useEffect(() => {
    if (gameState !== 'playing') return
    const loop = () => {
      if (gameStateRef.current !== 'playing') return
      setCoins(prev => {
        const next = []
        prev.forEach(c => {
          const ny = c.y + c.speed
          const hitX = c.x + 20 >= collectorRef.current && c.x <= collectorRef.current + COLLECTOR_WIDTH
          const hitY = ny >= GAME_HEIGHT - 58 && ny <= GAME_HEIGHT - 20
          if (hitX && hitY) {
            const pts = c.isGem ? 3 : 1
            scoreRef.current += pts
            setScore(scoreRef.current)
          } else if (ny < GAME_HEIGHT) {
            next.push({ ...c, y: ny })
          }
        })
        return next
      })
      frameRef.current = requestAnimationFrame(loop)
    }
    frameRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frameRef.current)
  }, [gameState])

  const moveCollector = useCallback((dir) => {
    const step = 28
    setCollectorX(x => dir === 'left' ? Math.max(0, x - step) : Math.min(GAME_WIDTH - COLLECTOR_WIDTH, x + step))
  }, [])

  const setCollectorPos = useCallback((x) => {
    setCollectorX(Math.max(0, Math.min(GAME_WIDTH - COLLECTOR_WIDTH, x)))
  }, [])

  return {
    gameState, score, timeLeft, coins, collectorX, reward,
    GAME_WIDTH, GAME_HEIGHT, COLLECTOR_WIDTH,
    startGame, endGame, resetGame, moveCollector, setCollectorPos,
  }
}

export default useGame
