import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { loginUser } from '../../services/api'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    loginUser({ email, password })
      .then((data) => {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        navigate('/')
      })
      .catch((err) => {
        setError(err.message || 'Login failed')
        setLoading(false)
      })
  }

  return (
    <div style={styles.page}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        {error && <p style={styles.error}>{error}</p>}
        <label style={styles.label}>
          Email *
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Password *
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        <button type="submit" disabled={loading} style={styles.btn}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p style={styles.footer}>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  )
}

const styles = {
  page: { maxWidth: '400px', margin: '0 auto' },
  form: { marginTop: '1rem' },
  label: { display: 'block', marginBottom: '1rem', fontWeight: '500' },
  input: { display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.25rem', border: '1px solid #cbd5e1', borderRadius: '6px' },
  btn: { padding: '0.6rem 1.2rem', backgroundColor: '#1e3a5f', color: '#fff', border: 'none', borderRadius: '6px', marginTop: '0.5rem' },
  error: { color: '#dc2626', marginBottom: '1rem' },
  footer: { marginTop: '1.5rem', color: '#64748b' },
}

export default Login
