// Placeholder for future AI chatbot. No AI logic yet.
function Chatbot() {
  return (
    <div style={styles.wrapper}>
      <button style={styles.button} title="Chatbot (coming soon)">
        💬
      </button>
    </div>
  )
}

const styles = {
  wrapper: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: 100,
  },
  button: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#1e3a5f',
    color: '#fff',
    fontSize: '1.5rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
}

export default Chatbot
