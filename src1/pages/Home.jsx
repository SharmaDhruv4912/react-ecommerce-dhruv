import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import {
  getAllProducts,
  getCategories,
  getProductsByCategory
} from '../services/api_1'

const Home = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    getCategories().then(res => setCategories(res.data))
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = selectedCategory === 'all'
        ? await getAllProducts()
        : await getProductsByCategory(selectedCategory)
      setProducts(res.data)
    }

    fetchProducts()
  }, [selectedCategory])

  return (
    <div className="container">
      <h2>Products</h2>

      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
      >
        <option value="all">All</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat}>{cat}</option>
        ))}
      </select>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default Home
