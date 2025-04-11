import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      textAlign: 'center',
      background: '#fff'
    }}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            height: '160px',
            objectFit: 'contain',
            marginBottom: '10px',
            maxWidth: '100%'
          }}
        />
        <h4 style={{ fontSize: '14px', height: '40px', overflow: 'hidden' }}>{product.title}</h4>
        <p style={{ fontWeight: 'bold' }}>₹{product.price}</p>
      </Link>
    </div>
  )
}

export default ProductCard
