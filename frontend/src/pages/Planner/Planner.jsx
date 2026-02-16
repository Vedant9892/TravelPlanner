function Planner() {
  return (
    <div style={styles.page}>
      <h1>Planner</h1>
      <p style={styles.placeholder}>
        Build your day-by-day itinerary here. (Coming soon.)
      </p>
    </div>
  )
}

const styles = {
  page: { maxWidth: '600px', margin: '0 auto' },
  placeholder: { color: '#64748b', marginTop: '1rem' },
}

export default Planner
