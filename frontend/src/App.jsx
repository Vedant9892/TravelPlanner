import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Chatbot from './components/Chatbot/Chatbot'
import Home from './pages/Home/Home'
import PlanTrip from './pages/PlanTrip/PlanTrip'
import Recommendations from './pages/Recommendations/Recommendations'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1, padding: '1.5rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<PlanTrip />} />
          <Route path="/recommendations/:id" element={<Recommendations />} />
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
