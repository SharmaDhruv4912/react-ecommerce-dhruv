import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '15px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: '0.2s',
    }}>
      <Link to={`/product/${product.id}`} style={{ color: 'inherit' }}>
        <img src={product.image} alt={product.title} style={{ height: '150px', objectFit: 'contain', marginBottom: '10px' }} />
        <h4 style={{ fontSize: '16px', minHeight: '48px' }}>{product.title.slice(0, 50)}...</h4>
        <p style={{ color: '#28a745', fontWeight: 'bold' }}>₹{product.price}</p>
      </Link>
    </div>
  )
}

export default ProductCard
