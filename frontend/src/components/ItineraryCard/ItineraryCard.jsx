function ItineraryCard({ day, activities }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.day}>Day {day}</h3>
      <ul style={styles.list}>
        {activities && activities.length > 0 ? (
          activities.map((a, i) => (
            <li key={i} style={styles.item}>
              {a.time && <span style={styles.time}>{a.time}</span>}
              <strong>{a.title}</strong>
              {a.description && <span style={styles.desc}> — {a.description}</span>}
            </li>
          ))
        ) : (
          <li style={styles.item}>No activities</li>
        )}
      </ul>
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
  },
  day: { fontSize: '1.125rem', marginBottom: '0.5rem' },
  list: { listStyle: 'none', paddingLeft: 0 },
  item: { marginBottom: '0.5rem', fontSize: '0.95rem' },
  time: { marginRight: '0.5rem', color: '#64748b' },
  desc: { color: '#64748b' },
}

export default ItineraryCard
