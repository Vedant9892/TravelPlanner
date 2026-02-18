import mongoose from 'mongoose'

let MONGODB_URI = (process.env.MONGODB_URI || '').trim().replace(/^["']|["']$/g, '')
if (!MONGODB_URI || (!MONGODB_URI.startsWith('mongodb://') && !MONGODB_URI.startsWith('mongodb+srv://'))) {
  MONGODB_URI = 'mongodb://localhost:27017/itinerary-planner'
  console.warn('MONGODB_URI missing or invalid in .env; using localhost. Expected: mongodb://... or mongodb+srv://...')
}
export async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')
  } catch (err) {
    if (err.message && err.message.includes('bad auth')) {
      console.error('MongoDB auth failed. Check in .env:')
      console.error('  - Correct username and password for Atlas')
      console.error('  - If password has special chars (@ # $ % etc), URL-encode them (e.g. @ → %40)')
      console.error('  - In Atlas: Database Access → user → Edit → reset password if needed')
    } else {
      console.error('MongoDB connection error:', err.message)
    }
    throw err
  }
}
