import { createContext, useState } from 'react'
import { loginUser } from '../services/api_1'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null)

  const login = async (username, password) => {
    try {
      const res = await loginUser({ username, password })
      const jwt = res.data.token
      localStorage.setItem('token', jwt)
      setToken(jwt)
      return true
    } catch (err) {
      console.error('Login failed:', err)
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
