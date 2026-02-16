import mongoose from 'mongoose'

// Store only image URL (from Supabase); file is stored in Supabase
const tripSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    destination: { type: String },
    imageUrl: { type: String },
    // Optional: link to user when auth is added
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

const Trip = mongoose.model('Trip', tripSchema)
export default Trip
