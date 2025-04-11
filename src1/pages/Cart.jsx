import { useContext } from 'react'
import { BasketContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { basketItems, adjustQuantity, deleteFromBag } = useContext(BasketContext)
  const navigate = useNavigate()

  const total = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)

  return (
    <div className="container">
      <h2>👜 My Bag</h2>

      {basketItems.length === 0 ? (
        <p>Your bag is currently empty.</p>
      ) : (
        <>
          {basketItems.map(item => (
            <div key={item.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #ccc',
              padding: '15px 0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={item.image} alt={item.title} width="50" />
                <div>
                  <strong>{item.title}</strong><br />
                  ₹{item.price} × {item.quantity} = ₹{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => adjustQuantity(item.id, -1)}>➖</button>
                <span>{item.quantity}</span>
                <button onClick={() => adjustQuantity(item.id, 1)}>➕</button>
                <button onClick={() => deleteFromBag(item.id)} style={{ color: 'red' }}>Remove</button>
              </div>
            </div>
          ))}

          <h3 style={{ marginTop: '20px' }}>🧾 Total: ₹{total}</h3>

          <button onClick={() => navigate('/checkout')} style={{ marginTop: '10px' }}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  )
}

export default Cart
