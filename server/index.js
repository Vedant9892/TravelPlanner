import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import planRoutes from './routes/planRoutes.js'

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// API routes
app.use('/api/plan', planRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Server is running' })
})

// Connect to MongoDB and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('Could not start server:', err)
    process.exit(1)
  })
