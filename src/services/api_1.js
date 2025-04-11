import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com'

// 🔐 Login
export const loginUser = (credentials) => {
  return axios.post(`${BASE_URL}/auth/login`, credentials)
}

// 📦 Get all products
export const getAllProducts = () => {
  return axios.get(`${BASE_URL}/products`)
}

// 📦 Get product by ID
export const getProductById = (id) => {
  return axios.get(`${BASE_URL}/products/${id}`)
}

// 🧾 Get all categories
export const getCategories = () => {
  return axios.get(`${BASE_URL}/products/categories`)
}

// 📦 Get products by category
export const getProductsByCategory = (category) => {
  return axios.get(`${BASE_URL}/products/category/${category}`)
}
