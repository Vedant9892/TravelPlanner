import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TripForm from '../../components/TripForm/TripForm'
import { createPlan } from '../../services/api'

function PlanTrip() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function handleSubmit(formData) {
    setError(null)
    setLoading(true)
    createPlan(formData)
      .then((data) => navigate(`/recommendations/${data.planId}`))
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }

  return (
    <div style={styles.page}>
      <h1>Plan Your Trip</h1>
      <p style={styles.hint}>Enter your preferences. We'll generate a personalized itinerary.</p>
      {error && <p style={styles.error}>{error}</p>}
      <TripForm onSubmit={handleSubmit} loading={loading} />
    </div>
  )
}

const styles = {
  page: { maxWidth: '560px', margin: '0 auto' },
  hint: { color: '#64748b', marginBottom: '1.5rem' },
  error: { color: '#dc2626', marginBottom: '1rem' },
}

export default PlanTrip
