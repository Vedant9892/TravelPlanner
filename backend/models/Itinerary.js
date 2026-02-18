import mongoose from 'mongoose'
const itinerarySchema = new mongoose.Schema(
  {
    tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
    day: { type: Number, required: true },
    activities: [{ title: String, description: String, time: String }],
  },
  { timestamps: true }
)
//itenary
const Itinerary = mongoose.model('Itinerary', itinerarySchema)
export default Itinerary
