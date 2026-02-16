// Placeholder for future AI integration. Returns dummy itinerary data only.

export async function generateItinerary(tripRequest) {
  const days = tripRequest.days || 3
  const destination = tripRequest.destination || 'Recommended City'
  const style = tripRequest.travelStyle || 'adventure'

  const itinerary = []
  for (let d = 1; d <= days; d++) {
    itinerary.push({
      day: d,
      activities: [
        { time: '09:00', title: 'Morning activity', description: `Sample activity for ${style} travel` },
        { time: '12:00', title: 'Lunch', description: 'Local cuisine' },
        { time: '14:00', title: 'Afternoon exploration', description: 'Sightseeing' },
        { time: '18:00', title: 'Evening', description: 'Dinner and rest' },
      ],
    })
  }

  return {
    destination,
    transport: 'Flight + local transport (dummy)',
    estimatedCost: tripRequest.budget ? `Around ${tripRequest.budget}` : 'To be estimated',
    itinerary,
  }
}
