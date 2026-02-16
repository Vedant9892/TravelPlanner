// Base URL for API calls (Vite proxy forwards /api to backend)
const API_BASE = '/api'

export async function getTrips() {
  const res = await fetch(`${API_BASE}/trips`)
  if (!res.ok) throw new Error('Failed to fetch trips')
  return res.json()
}

export async function getTripById(id) {
  const res = await fetch(`${API_BASE}/trips/${id}`)
  if (!res.ok) throw new Error('Failed to fetch trip')
  return res.json()
}

export async function createTrip(data) {
  const res = await fetch(`${API_BASE}/trips`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Failed to create trip')
  return res.json()
}

export async function updateTrip(id, data) {
  const res = await fetch(`${API_BASE}/trips/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Failed to update trip')
  return res.json()
}

export async function deleteTrip(id) {
  const res = await fetch(`${API_BASE}/trips/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Failed to delete trip')
  return res.json()
}
