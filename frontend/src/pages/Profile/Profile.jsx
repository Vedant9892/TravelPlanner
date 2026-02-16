import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../../services/api'
import './Profile.css'

function Profile() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
      return
    }
    getCurrentUser(token)
      .then((data) => setUser(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [navigate])

  if (loading) {
    return (
      <div className="profile-page">
        <div className="card">
          <p className="profile-loading">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="profile-page">
        <div className="card">
          <p className="profile-error">{error}</p>
          <button type="button" className="btn-secondary" onClick={() => navigate('/login')}>
            Go to Login
          </button>
        </div>
      </div>
    )
  }

  if (!user) return null

  const createdDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '—'

  return (
    <div className="profile-page">
      <div className="profile-card card">
        <div className="profile-avatar-wrap">
          {user.profileImage ? (
            <img src={user.profileImage} alt={user.name} className="profile-avatar" />
          ) : (
            <div className="profile-avatar placeholder">{user.name?.charAt(0)?.toUpperCase() || '?'}</div>
          )}
        </div>
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-email">{user.email}</p>
        <p className="profile-meta">Account created: {createdDate}</p>
      </div>
    </div>
  )
}

export default Profile
