import { createContext, useState } from 'react'

export const BasketContext = createContext()

// function to update the quantity
const updateQuantity = (prev, id, delta) => {
  return prev
    .map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + delta }
        : item
    )
    .filter(item => item.quantity > 0)
}

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([])

  const addProductToBag = (product) => {
    setBasketItems(prev => {
      const found = prev.find(p => p.id === product.id)
      if (found) {
        return updateQuantity(prev, product.id, 1)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const deleteFromBag = (id) => {
    setBasketItems(prev => prev.filter(p => p.id !== id))
  }

  const adjustQuantity = (id, delta) => {
    setBasketItems(prev => updateQuantity(prev, id, delta))
  }

  return (
    <BasketContext.Provider value={{ basketItems, addProductToBag, deleteFromBag, adjustQuantity, setBasketItems }}>
      {children}
    </BasketContext.Provider>
  )
}
