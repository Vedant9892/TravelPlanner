import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createTrip } from '../../services/api'

function CreateTrip() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [destination, setDestination] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    createTrip({ title, description, destination, imageUrl: imageUrl || undefined })
      .then((trip) => navigate(`/trips/${trip._id}`))
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }

  return (
    <div style={styles.page}>
      <h1>Create a Trip</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
        <label style={styles.label}>
          Title *
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Destination
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Image URL (e.g. from Supabase)
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://..."
            style={styles.input}
          />
        </label>
        <div style={styles.actions}>
          <button type="submit" disabled={loading} style={styles.submitBtn}>
            {loading ? 'Creating...' : 'Create Trip'}
          </button>
          <button type="button" onClick={() => navigate(-1)} style={styles.cancelBtn}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

const styles = {
  page: { maxWidth: '500px', margin: '0 auto' },
  form: { marginTop: '1.5rem' },
  label: {
    display: 'block',
    marginBottom: '1rem',
    fontWeight: '500',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.25rem',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
  },
  actions: { display: 'flex', gap: '1rem', marginTop: '1.5rem' },
  submitBtn: {
    padding: '0.5rem 1.25rem',
    backgroundColor: '#1e3a5f',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
  },
  cancelBtn: {
    padding: '0.5rem 1.25rem',
    backgroundColor: '#e2e8f0',
    border: 'none',
    borderRadius: '6px',
  },
}

export default CreateTrip
