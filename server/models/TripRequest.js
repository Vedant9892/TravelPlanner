import mongoose from 'mongoose'

const tripRequestSchema = new mongoose.Schema(
  {
    destination: { type: String },
    days: { type: Number, required: true },
    budget: { type: String },
    ageGroup: { type: String },
    travelers: { type: Number, default: 1 },
    travelStyle: { type: String },
  },
  { timestamps: true }
)

const TripRequest = mongoose.model('TripRequest', tripRequestSchema)
export default TripRequest
