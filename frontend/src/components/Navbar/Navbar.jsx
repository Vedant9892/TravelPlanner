import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate()
  const userJson = localStorage.getItem('user')
  const user = userJson ? JSON.parse(userJson) : null

  function handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/')
    window.location.reload()
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">AI Trip Planner</Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/plan" className="navbar-link">Plan Trip</Link>
        {user ? (
          <>
            <Link to="/profile" className="navbar-avatar-wrap" title="Profile">
              {user.profileImage ? (
                <img src={user.profileImage} alt="" className="navbar-avatar" />
              ) : (
                <span className="navbar-avatar-placeholder">{user.name?.charAt(0)?.toUpperCase() || '?'}</span>
              )}
            </Link>
            <button type="button" className="navbar-logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/register" className="navbar-link">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
