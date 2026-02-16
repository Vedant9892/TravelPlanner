import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getTripById, deleteTrip } from '../../services/api'

function TripDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [trip, setTrip] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getTripById(id)
      .then((data) => setTrip(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  function handleDelete() {
    if (!window.confirm('Delete this trip?')) return
    deleteTrip(id)
      .then(() => navigate('/trips'))
      .catch((err) => alert(err.message))
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>
  if (!trip) return <p>Trip not found.</p>

  return (
    <div style={styles.page}>
      {trip.imageUrl && (
        <img src={trip.imageUrl} alt={trip.title} style={styles.image} />
      )}
      <h1>{trip.title}</h1>
      {trip.destination && <p style={styles.destination}>{trip.destination}</p>}
      <p style={styles.desc}>{trip.description || 'No description.'}</p>
      <div style={styles.actions}>
        <button onClick={() => navigate(`/trips`)} style={styles.backBtn}>
          Back to Trips
        </button>
        <button onClick={handleDelete} style={styles.deleteBtn}>
          Delete Trip
        </button>
      </div>
    </div>
  )
}

const styles = {
  page: { maxWidth: '600px', margin: '0 auto' },
  image: {
    width: '100%',
    maxHeight: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  destination: { color: '#64748b', marginBottom: '0.5rem' },
  desc: { marginBottom: '1.5rem' },
  actions: { display: 'flex', gap: '1rem' },
  backBtn: {
    padding: '0.5rem 1rem',
    backgroundColor: '#64748b',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
  },
  deleteBtn: {
    padding: '0.5rem 1rem',
    backgroundColor: '#dc2626',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
  },
}

export default TripDetails
