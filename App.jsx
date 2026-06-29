import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import StatsSummary from './components/StatsSummary/StatsSummary.jsx'
import AddHabitForm from './components/AddHabitForm/AddHabitForm.jsx'
import HabitList from './components/HabitList/HabitList.jsx'
import AboutView from './components/AboutView/AboutView.jsx'
import './App.css'

const initialHabits = [
  { id: 1, name: 'Drink water', category: 'Health', frequency: 'Daily', completed: false },
  { id: 2, name: 'Read 20 pages', category: 'Learning', frequency: 'Daily', completed: true },
  { id: 3, name: 'Go for a run', category: 'Fitness', frequency: 'Weekly', completed: false },
]

function App() {
  const [habits, setHabits] = useState(initialHabits)

  const [currentView, setCurrentView] = useState('dashboard') 

  const [theme, setTheme] = useState('light') 

  function addHabit(newHabit) {
    const habitWithId = {
      id: Date.now(),
      completed: false,
      ...newHabit,
    }
    setHabits((prevHabits) => [...prevHabits, habitWithId])
  }

  function toggleHabit(id) {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    )
  }

  function deleteHabit(id) {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id))
  }

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const completedCount = habits.filter((habit) => habit.completed).length

  return (
    <div className={`app-shell ${theme === 'dark' ? 'dark' : ''}`}>
      <Header
        currentView={currentView}
        onChangeView={setCurrentView}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="app-main">
        {currentView === 'dashboard' ? (
          <>
            <StatsSummary
              totalHabits={habits.length}
              completedCount={completedCount}
              theme={theme}
            />
            <AddHabitForm onAddHabit={addHabit} />
            <HabitList
              habits={habits}
              onToggleHabit={toggleHabit}
              onDeleteHabit={deleteHabit}
            />
          </>
        ) : (
          <AboutView />
        )}
      </main>
    </div>
  )
}

export default App
