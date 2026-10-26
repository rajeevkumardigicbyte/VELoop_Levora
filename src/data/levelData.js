// ============================================================
// LEVEL DATA — VELoop Rewards
// NOTE: All values are DEVELOPMENT/DEMO data.
//       Replace with real API response when backend is ready.
// ============================================================

export const userData = {
  currentLevel: 4,
  currentXP: 6420,
  nextLevel: 5,
  requiredXP: 8000,
  levelName: 'Silver Scout',
  nextLevelName: 'Gold Guardian',
  totalXPEarned: 9420,
}

export const levels = [
  {
    level: 1,
    name: 'Bronze Starter',
    xpRequired: 500,
    reward: { type: 'VEs', amount: 50, icon: '💰' },
    status: 'completed',
    badge: '🥉',
    color: '#CD7F32',
  },
  {
    level: 2,
    name: 'Iron Climber',
    xpRequired: 1500,
    reward: { type: 'Gems', amount: 5, icon: '💎' },
    status: 'completed',
    badge: '⚙️',
    color: '#A8A9AD',
  },
  {
    level: 3,
    name: 'Steel Achiever',
    xpRequired: 3500,
    reward: { type: 'VEs', amount: 100, icon: '💰' },
    status: 'completed',
    badge: '🔩',
    color: '#7090A0',
  },
  {
    level: 4,
    name: 'Silver Scout',
    xpRequired: 8000,
    reward: { type: 'Gems', amount: 10, icon: '💎' },
    status: 'current',
    badge: '🥈',
    color: '#F5C842',
  },
  {
    level: 5,
    name: 'Gold Guardian',
    xpRequired: 15000,
    reward: { type: 'VEs', amount: 500, icon: '💰' },
    status: 'next',
    badge: '🥇',
    color: '#7B61FF',
  },
  {
    level: 6,
    name: 'Platinum Hero',
    xpRequired: 25000,
    reward: { type: 'Spins', amount: 2, icon: '🎰' },
    status: 'locked',
    badge: '💠',
    color: '#3A3F60',
  },
  {
    level: 7,
    name: 'Diamond Legend',
    xpRequired: 40000,
    reward: { type: 'SVEs', amount: 100, icon: '✨' },
    status: 'locked',
    badge: '💎',
    color: '#3A3F60',
  },
]

export const levelStateConfig = {
  completed: { label: 'Completed', color: 'var(--state-completed)', icon: '✓' },
  current:   { label: 'You Are Here', color: 'var(--state-current)', icon: '★' },
  next:      { label: 'Next Goal', color: 'var(--state-next)', icon: '→' },
  locked:    { label: 'Locked', color: 'var(--state-locked)', icon: '🔒' },
}
