import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1 className="hero-title">AI Trip Planner</h1>
        <p className="hero-subtitle">
          Get smart itinerary recommendations based on your destination, budget, travel style, and more.
        </p>
        <Link to="/plan" className="hero-cta">Plan My Trip</Link>
      </section>
    </div>
  )
}

export default Home
