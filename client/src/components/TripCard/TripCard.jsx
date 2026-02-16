import { Link } from 'react-router-dom'

function TripCard({ trip }) {
  return (
    <Link to={`/trips/${trip._id}`} style={styles.card}>
      {trip.imageUrl && (
        <img src={trip.imageUrl} alt={trip.title} style={styles.image} />
      )}
      <div style={styles.content}>
        <h3 style={styles.title}>{trip.title}</h3>
        <p style={styles.desc}>{trip.description || 'No description'}</p>
        {trip.destination && (
          <p style={styles.destination}>{trip.destination}</p>
        )}
      </div>
    </Link>
  )
}

const styles = {
  card: {
    display: 'block',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    overflow: 'hidden',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'box-shadow 0.2s',
  },
  image: {
    width: '100%',
    height: '140px',
    objectFit: 'cover',
  },
  content: {
    padding: '1rem',
  },
  title: {
    fontSize: '1.125rem',
    marginBottom: '0.5rem',
  },
  desc: {
    fontSize: '0.875rem',
    color: '#64748b',
    marginBottom: '0.25rem',
  },
  destination: {
    fontSize: '0.8rem',
    color: '#94a3b8',
  },
}

export default TripCard
