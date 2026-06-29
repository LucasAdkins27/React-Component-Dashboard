import HabitItem from '../HabitItem/HabitItem.jsx'
import './HabitList.css'

// HabitList's only job is to loop through the habits array (received as a prop) and render one HabitItem per habit. The callbacks are simply forwarded down another level so HabitItem can trigger updates in App
function HabitList({ habits, onToggleHabit, onDeleteHabit }) {
  if (habits.length === 0) {
    return <p className="empty-message">No habits yet. Add one above to get started!</p>
  }

  return (
    <section className="habit-list">
      <h2 className="list-title">Your Habits</h2>
      <ul className="list-items">
        {habits.map((habit) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            onToggleHabit={onToggleHabit}
            onDeleteHabit={onDeleteHabit}
          />
        ))}
      </ul>
    </section>
  )
}

export default HabitList
