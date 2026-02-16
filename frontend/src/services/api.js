const API_BASE = '/api'

// Auth: register (multipart/form-data)
export async function registerUser(formData) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    body: formData,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || 'Registration failed')
  return data
}

// Auth: login
export async function loginUser(body) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || 'Login failed')
  return data
}

// GET /api/auth/me - get current user (send token in Authorization header)
export async function getCurrentUser(token) {
  const res = await fetch(`${API_BASE}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || 'Failed to fetch profile')
  return data
}

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
