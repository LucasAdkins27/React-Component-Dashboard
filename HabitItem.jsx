import './HabitItem.css'

// The "leaf" component of this branch. It receives a single habit object plus two callback props, and reports user actions back up to App (it never mutates the habits array itself)
function HabitItem({ habit, onToggleHabit, onDeleteHabit }) {
  return (
    <li className={`habit-item ${habit.completed ? 'completed' : ''}`}>
      <label className="habit-checkbox-label">
        <input
          type="checkbox"
          checked={habit.completed}
          onChange={() => onToggleHabit(habit.id)}
        />
        <span className="habit-name">{habit.name}</span>
      </label>

      <div className="habit-meta">
        <span className="badge badge-category">{habit.category}</span>
        <span className="badge badge-frequency">{habit.frequency}</span>
        <button
          className="delete-button"
          onClick={() => onDeleteHabit(habit.id)}
          aria-label={`Delete ${habit.name}`}
        >
          ✕
        </button>
      </div>
    </li>
  )
}

export default HabitItem
