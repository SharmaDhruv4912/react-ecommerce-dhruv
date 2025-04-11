import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const { login } = useContext(AuthContext)
  const [form, setForm] = useState({ username: '', password: '' })
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const handleInput = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const result = await login(form.username, form.password)
    if (result) {
      navigate('/')
    } else {
      setErrorMsg('Login failed. Check credentials.')
    }
  }

  return (
    <div style={{ padding: '40px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          name="username"
          value={form.username}
          onChange={handleInput}
          placeholder="Username"
          required
        />
        <br /><br />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleInput}
          placeholder="Password"
          required
        />
        <br /><br />
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
