import './ThemeToggle.css'

// A small, focused component. It receives the current theme and a callback from its parent (Header) - it does not know or care how theme is stored.
function ThemeToggle({ theme, onToggleTheme }) {
  return (
    <button className="theme-toggle" onClick={onToggleTheme}>
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  )
}

export default ThemeToggle
