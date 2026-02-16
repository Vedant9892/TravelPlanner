import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>AI Trip Planner</h1>
      <p style={styles.subtitle}>
        Get smart itinerary recommendations based on your destination, budget, travel style, and more.
      </p>
      <Link to="/plan" style={styles.cta}>Plan My Trip</Link>
    </div>
  )
}

const styles = {
  page: { textAlign: 'center', padding: '2rem 0' },
  title: { fontSize: '2rem', marginBottom: '0.5rem' },
  subtitle: { color: '#64748b', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' },
  cta: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#1e3a5f',
    color: '#fff',
    borderRadius: '6px',
    textDecoration: 'none',
  },
}

export default Home
