const API_BASE = '/api'

// POST /api/plan - create trip request, get generated plan id
export async function createPlan(formData) {
  const res = await fetch(`${API_BASE}/plan`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  if (!res.ok) throw new Error('Failed to create plan')
  return res.json()
}

// GET /api/plan/:id - get generated plan
export async function getPlan(id) {
  const res = await fetch(`${API_BASE}/plan/${id}`)
  if (!res.ok) throw new Error('Failed to fetch plan')
  return res.json()
}
