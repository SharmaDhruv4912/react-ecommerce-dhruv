import { useContext, useState } from 'react'
import { BasketContext } from '../context/CartContext'

const Checkout = () => {
  const { basketItems, setBasketItems } = useContext(BasketContext)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const totalAmount = basketItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ).toFixed(2)

  const handleConfirm = () => {
    setOrderPlaced(true)
    setBasketItems([])
    setTimeout(() => {
      setOrderPlaced(false)
    }, 4000)
  }

  return (
    <div className="container">
      <h2>✔️ Confirm Your Order</h2>

      {basketItems.length === 0 ? (
        <p>No items left in your bag.</p>
      ) : (
        <>
          <ul style={{ padding: 0 }}>
            {basketItems.map(item => (
              <li key={item.id} style={{
                marginBottom: '15px',
                borderBottom: '1px solid #eee',
                paddingBottom: '10px'
              }}>
                <strong>{item.title}</strong><br />
                Qty: {item.quantity} × ₹{item.price} = ₹{(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>

          <h3>Total Payable: ₹{totalAmount}</h3>
          <button onClick={handleConfirm} style={{ marginTop: '10px' }}>
            Confirm Purchase
          </button>
        </>
      )}

      {orderPlaced && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#333',
          color: '#fff',
          padding: '15px 20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)'
        }}>
          🎉 Woohoo! Your order is on the way!
        </div>
      )}
    </div>
  )
}

export default Checkout
