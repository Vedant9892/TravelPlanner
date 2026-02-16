import { useState } from 'react'

const TRAVEL_STYLES = ['adventure', 'family', 'luxury', 'relaxing']
const AGE_GROUPS = ['18-25', '26-35', '36-45', '46-55', '55+']

function TripForm({ onSubmit, loading }) {
  const [destination, setDestination] = useState('')
  const [days, setDays] = useState(3)
  const [budget, setBudget] = useState('')
  const [ageGroup, setAgeGroup] = useState('26-35')
  const [travelers, setTravelers] = useState(1)
  const [travelStyle, setTravelStyle] = useState('adventure')

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit({
      destination: destination.trim() || undefined,
      days: Number(days),
      budget: budget.trim() || undefined,
      ageGroup,
      travelers: Number(travelers),
      travelStyle,
    })
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Destination (optional)
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="e.g. Paris, Japan"
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Number of days *
        <input
          type="number"
          min={1}
          max={30}
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Budget (optional)
        <input
          type="text"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="e.g. $500, medium"
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Age group
        <select
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
          style={styles.input}
        >
          {AGE_GROUPS.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </label>
      <label style={styles.label}>
        Number of travelers
        <input
          type="number"
          min={1}
          value={travelers}
          onChange={(e) => setTravelers(Number(e.target.value))}
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Travel style
        <select
          value={travelStyle}
          onChange={(e) => setTravelStyle(e.target.value)}
          style={styles.input}
        >
          {TRAVEL_STYLES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>
      <button type="submit" disabled={loading} style={styles.btn}>
        {loading ? 'Generating...' : 'Get recommendations'}
      </button>
    </form>
  )
}

const styles = {
  form: { marginTop: '1rem' },
  label: { display: 'block', marginBottom: '1rem', fontWeight: '500' },
  input: {
    display: 'block',
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.25rem',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
  },
  btn: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#1e3a5f',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    marginTop: '0.5rem',
  },
}

export default TripForm
