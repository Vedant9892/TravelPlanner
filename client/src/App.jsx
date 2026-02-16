import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Chatbot from './components/Chatbot/Chatbot'
import Home from './pages/Home/Home'
import Trips from './pages/Trips/Trips'
import TripDetails from './pages/TripDetails/TripDetails'
import CreateTrip from './pages/CreateTrip/CreateTrip'
import Planner from './pages/Planner/Planner'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1, padding: '1.5rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/trips/:id" element={<TripDetails />} />
          <Route path="/create" element={<CreateTrip />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}

export default App
