import './StatsSummary.css'

// Purely a display component that takes the numbers as props and renders them
function StatsSummary({ totalHabits, completedCount, theme }) {
  return (
    <section className="stats-summary">
      <div className="stat-card">
        <span className="stat-value">{totalHabits}</span>
        <span className="stat-label">Total Habits</span>
      </div>
      <div className="stat-card">
        <span className="stat-value">{completedCount}</span>
        <span className="stat-label">Completed Today</span>
      </div>
      <div className="stat-card">
        <span className="stat-value">{theme === 'light' ? 'Light' : 'Dark'}</span>
        <span className="stat-label">Theme Mode</span>
      </div>
    </section>
  )
}

export default StatsSummary
