import TripRequest from '../models/TripRequest.js'
import GeneratedPlan from '../models/GeneratedPlan.js'
import { generateItinerary } from '../services/aiService.js'

// POST /api/plan - create trip request and return dummy generated plan
export async function createPlan(req, res) {
  try {
    const request = await TripRequest.create(req.body)
    const dummyPlan = await generateItinerary(request)

    const plan = await GeneratedPlan.create({
      tripRequestId: request._id,
      destination: dummyPlan.destination,
      transport: dummyPlan.transport,
      estimatedCost: dummyPlan.estimatedCost,
      itinerary: dummyPlan.itinerary,
    })

    res.status(201).json({ planId: plan._id })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// GET /api/plan/:id - get generated plan
export async function getPlan(req, res) {
  try {
    const plan = await GeneratedPlan.findById(req.params.id)
    if (!plan) return res.status(404).json({ error: 'Plan not found' })
    res.json(plan)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
