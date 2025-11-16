import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import NavBar from '../components/NavBar'

const Login = () => {
  const [name,setName] = useState('')
  const nav = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      window.localStorage.setItem('username', name.trim())
    }
    nav('/')
  }

  return (
    <div style={{maxWidth:520,margin:'40px auto',padding:12}}>
      <NavBar showHome={false} />
      <h1>Rate your study</h1>
      <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:12}}>
        <input
          placeholder="Enter username"
          value={name}
          onChange={e=>setName(e.target.value)}
          style={{padding:10,fontSize:16}}
        />
        <button type="submit" style={{padding:10,fontSize:16}}>Continue</button>
      </form>
    </div>
  )
}

export default Login