const Footer = () => {
    return (
      <footer style={{
        backgroundColor: '#343a40',
        color: '#fff',
        textAlign: 'center',
        padding: '15px 20px',
        marginTop: '40px'
      }}>
        © {new Date().getFullYear()} Dhruv's Store. All rights reserved.
      </footer>
    )
  }
  
  export default Footer
  