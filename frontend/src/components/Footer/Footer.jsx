function Footer() {
  return (
    <footer style={styles.footer}>
      <p>AI Trip Planner &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

const styles = {
  footer: {
    padding: '1rem 1.5rem',
    textAlign: 'center',
    backgroundColor: '#f1f5f9',
    color: '#64748b',
    fontSize: '0.875rem',
  },
}

export default Footer
