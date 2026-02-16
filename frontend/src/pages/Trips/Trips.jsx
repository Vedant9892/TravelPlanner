import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTrips } from '../../services/api'
import TripCard from '../../components/TripCard/TripCard'

function Trips() {
  const [trips, setTrips] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getTrips()
      .then((data) => setTrips(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading trips...</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1>My Trips</h1>
        <Link to="/create" style={styles.createBtn}>Create Trip</Link>
      </div>
      {trips.length === 0 ? (
        <p style={styles.empty}>No trips yet. Create your first trip!</p>
      ) : (
        <div style={styles.grid}>
          {trips.map((trip) => (
            <TripCard key={trip._id} trip={trip} />
          ))}
        </div>
      )}
    </div>
  )
}

const styles = {
  page: { maxWidth: '900px', margin: '0 auto' },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  createBtn: {
    padding: '0.5rem 1rem',
    backgroundColor: '#1e3a5f',
    color: '#fff',
    borderRadius: '6px',
    textDecoration: 'none',
  },
  empty: { color: '#64748b', marginTop: '2rem' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '1.5rem',
  },
}

export default Trips
