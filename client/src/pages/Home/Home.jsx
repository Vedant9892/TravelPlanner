import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Itinerary Trip Planner</h1>
      <p style={styles.subtitle}>Plan your trips and manage itineraries in one place.</p>
      <div style={styles.actions}>
        <Link to="/trips" style={styles.primaryBtn}>View Trips</Link>
        <Link to="/create" style={styles.secondaryBtn}>Create a Trip</Link>
      </div>
    </div>
  )
}

const styles = {
  page: {
    textAlign: 'center',
    padding: '2rem 0',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#64748b',
    marginBottom: '2rem',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#1e3a5f',
    color: '#fff',
    borderRadius: '6px',
    textDecoration: 'none',
  },
  secondaryBtn: {
    padding: '0.75rem 1.5rem',
    border: '1px solid #1e3a5f',
    color: '#1e3a5f',
    borderRadius: '6px',
    textDecoration: 'none',
  },
}

export default Home
