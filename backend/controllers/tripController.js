import Trip from '../models/Trip.js'

// GET /api/trips - get all trips
export async function getAllTrips(req, res) {
  try {
    const trips = await Trip.find().sort({ createdAt: -1 })
    res.json(trips)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// GET /api/trips/:id - get one trip
export async function getTripById(req, res) {
  try {
    const trip = await Trip.findById(req.params.id)
    if (!trip) return res.status(404).json({ error: 'Trip not found' })
    res.json(trip)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// POST /api/trips - create trip
export async function createTrip(req, res) {
  try {
    const trip = await Trip.create(req.body)
    res.status(201).json(trip)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// PUT /api/trips/:id - update trip
export async function updateTrip(req, res) {
  try {
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!trip) return res.status(404).json({ error: 'Trip not found' })
    res.json(trip)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// DELETE /api/trips/:id - delete trip
export async function deleteTrip(req, res) {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id)
    if (!trip) return res.status(404).json({ error: 'Trip not found' })
    res.json({ message: 'Trip deleted' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
