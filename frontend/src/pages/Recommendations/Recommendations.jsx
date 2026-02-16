import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPlan } from '../../services/api'
import ItineraryCard from '../../components/ItineraryCard/ItineraryCard'

function Recommendations() {
  const { id } = useParams()
  const [plan, setPlan] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPlan(id)
      .then((data) => setPlan(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Loading your plan...</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>
  if (!plan) return <p>Plan not found.</p>

  return (
    <div style={styles.page}>
      <h1>Your Trip Recommendations</h1>
      <div style={styles.summary}>
        <p><strong>Destination:</strong> {plan.destination}</p>
        <p><strong>Transport:</strong> {plan.transport}</p>
        <p><strong>Estimated cost:</strong> {plan.estimatedCost}</p>
      </div>
      <h2 style={styles.dayTitle}>Day-by-day itinerary</h2>
      {plan.itinerary && plan.itinerary.length > 0 ? (
        plan.itinerary.map((day, i) => (
          <ItineraryCard key={i} day={day.day} activities={day.activities} />
        ))
      ) : (
        <p style={styles.empty}>No itinerary generated yet.</p>
      )}
    </div>
  )
}

const styles = {
  page: { maxWidth: '700px', margin: '0 auto' },
  summary: {
    padding: '1rem',
    backgroundColor: '#f1f5f9',
    borderRadius: '8px',
    marginBottom: '1.5rem',
  },
  dayTitle: { marginBottom: '1rem', fontSize: '1.25rem' },
  empty: { color: '#64748b' },
}

export default Recommendations
