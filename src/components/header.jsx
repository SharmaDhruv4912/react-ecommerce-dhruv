import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BasketContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'

const Header = () => {
  const { basketItems } = useContext(BasketContext)
  const { isAuthenticated, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <header style={{ background: '#343a40', padding: '15px 30px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', color: '#fff' }}>🛍️ My Shop</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: '#fff' }}>Home</Link>
          <Link to="/cart" style={{ color: '#fff' }}>Bag ({basketItems.length})</Link>
          {!isAuthenticated ? (
            <Link to="/login" style={{ color: '#fff' }}>Login</Link>
          ) : (
            <button onClick={() => { logout(); navigate('/login') }} style={{ border: '1px solid #fff', color: '#fff', background: 'transparent' }}>Logout</button>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
