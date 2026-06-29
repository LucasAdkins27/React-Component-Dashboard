import './AboutView.css'

// About page content
function AboutView() {
  return (
    <section className="about-view">
      <h2>About This Project</h2>
      <p>
        This Habit Dashboard was built for the React Component Dashboard assignment to
        practice functional components, props, state management with hooks, and
        controlled forms.
      </p>
      <ul>
        <li>Built with React functional components and Hooks</li>
        <li>State managed entirely with useState (no external state libraries)</li>
        <li>Views are switched manually with a state variable, not React Router</li>
        <li>Habit data lives only in memory for this session</li>
      </ul>
    </section>
  )
}

export default AboutView
