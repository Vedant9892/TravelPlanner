import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>AI Trip Planner</Link>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/plan" style={styles.link}>Plan Trip</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1.5rem',
    backgroundColor: '#1e3a5f',
    color: '#fff',
  },
  logo: { color: '#fff', fontWeight: 'bold', fontSize: '1.25rem', textDecoration: 'none' },
  links: { display: 'flex', gap: '1.5rem' },
  link: { color: '#e2e8f0', textDecoration: 'none' },
}

export default Navbar
