import mongoose from 'mongoose'

const activitySchema = new mongoose.Schema({
  title: String,
  description: String,
  time: String,
}, { _id: false })

const daySchema = new mongoose.Schema({
  day: Number,
  activities: [activitySchema],
}, { _id: false })

const generatedPlanSchema = new mongoose.Schema(
  {
    tripRequestId: { type: mongoose.Schema.Types.ObjectId, ref: 'TripRequest', required: true },
    destination: { type: String, required: true },
    transport: { type: String },
    estimatedCost: { type: String },
    itinerary: [daySchema],
  },
  { timestamps: true }
)

const GeneratedPlan = mongoose.model('GeneratedPlan', generatedPlanSchema)
export default GeneratedPlan
