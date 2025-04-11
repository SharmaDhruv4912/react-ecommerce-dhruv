import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/api_1'
import { BasketContext } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { addProductToBag } = useContext(BasketContext)

  useEffect(() => {
    getProductById(id).then(res => setProduct(res.data))
  }, [id])

  if (!product) return <p>Loading...</p>

  return (
    <div style={{ padding: '20px' }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <button
        onClick={() => addProductToBag(product)}
        style={{ marginTop: '20px', padding: '10px 20px' }}
      >
        Add to Bag
      </button>
    </div>
  )
}

export default ProductDetail
