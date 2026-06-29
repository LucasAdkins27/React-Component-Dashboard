import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx'
import './Header.css'

// The Header component displays the title and theme toggle, as well as the view switcher.
function Header({ currentView, onChangeView, theme, onToggleTheme }) {
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="header-title">🌱 Habit Dashboard</h1>
        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
      </div>

      <nav className="view-switcher">
        <button
          className={`view-button ${currentView === 'dashboard' ? 'active' : ''}`}
          onClick={() => onChangeView('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={`view-button ${currentView === 'about' ? 'active' : ''}`}
          onClick={() => onChangeView('about')}
        >
          About
        </button>
      </nav>
    </header>
  )
}

export default Header
