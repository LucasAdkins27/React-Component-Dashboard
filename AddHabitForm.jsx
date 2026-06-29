import { useState } from 'react'
import './AddHabitForm.css'


function AddHabitForm({ onAddHabit }) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('Health')
  const [frequency, setFrequency] = useState('Daily')

  function handleSubmit(event) {
    event.preventDefault() // stop the default full-page form submission

    const trimmedName = name.trim()
    if (trimmedName === '') {
      return // ignore empty submissions
    }

    // Hand the new habit data up to App via the callback prop. App is the one that actually updates the habits array.
    onAddHabit({ name: trimmedName, category, frequency })

    // Reset the controlled inputs back to their defaults
    setName('')
    setCategory('Health')
    setFrequency('Daily')
  }

  return (
    <form className="add-habit-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Add a New Habit</h2>

      <div className="form-row">
        <label htmlFor="habit-name">Habit name</label>
        <input
          id="habit-name"
          type="text"
          placeholder="e.g. Stretch for 10 minutes"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="form-row-group">
        <div className="form-row">
          <label htmlFor="habit-category">Category</label>
          <select
            id="habit-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="Health">Health</option>
            <option value="Fitness">Fitness</option>
            <option value="Learning">Learning</option>
            <option value="Productivity">Productivity</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="habit-frequency">Frequency</label>
          <select
            id="habit-frequency"
            value={frequency}
            onChange={(event) => setFrequency(event.target.value)}
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
      </div>

      <button type="submit" className="submit-button">
        Add Habit
      </button>
    </form>
  )
}

export default AddHabitForm
