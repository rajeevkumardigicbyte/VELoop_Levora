import { useState, useEffect, useRef, useCallback } from 'react'
import { userData, levels } from '../data/levelData'

const useLevelData = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showLevelUp, setShowLevelUp] = useState(false)

  const load = useCallback(() => {
    setLoading(true)
    setError(null)
    const timer = setTimeout(() => {
      try {
        const xpPercent = Math.round((userData.currentXP / userData.requiredXP) * 100)
        const xpRemaining = userData.requiredXP - userData.currentXP
        const currentLevelData = levels.find(l => l.level === userData.currentLevel)
        const nextLevelData = levels.find(l => l.level === userData.nextLevel)
        setData({ ...userData, xpPercent, xpRemaining, currentLevelData, nextLevelData, allLevels: levels })
        setLoading(false)
      } catch (err) {
        setError('Unable to load level data')
        setLoading(false)
      }
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => { const cleanup = load(); return cleanup }, [load])

  return {
    data, loading, error, showLevelUp,
    triggerLevelUp: () => setShowLevelUp(true),
    closeLevelUp: () => setShowLevelUp(false),
    retryLoad: load,
  }
}

export default useLevelData
