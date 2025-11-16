import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import NavBar from '../components/NavBar'
import {supabase} from '../data/supabase'

const Login = () => {
  const [name,setName] = useState('')
  const nav = useNavigate()

  const submit = async (e) => {
    const { data, error } = await supabase.auth.signUp({
      email: 'example@email.com',
      password: 'password123',
    })
    e.preventDefault()
    if (name.trim()) {
      window.localStorage.setItem('username', name.trim())
    }
    nav('/home')
  }

  return (
    <div style={{maxWidth:520,margin:'40px auto',padding:12}}>
      <h1 style={{fontSize:32,fontWeight:700,marginBottom:24}}>Rate Your Study</h1>
      <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:12}}>
        <div style={{display:'flex',alignItems:'center',gap:6}}>
          <input
            placeholder="Enter username"
            value={name}
            onChange={e=>setName(e.target.value)}
            style={{padding:12,fontSize:18,border:'1px solid #ccc',borderRadius:6,fontFamily:'inherit',flex:1}}
          />
          <span style={{fontSize:18,color:'#666',fontWeight:500}}>@sdsu.edu</span>
        </div>
        <button type="submit" style={{padding:12,fontSize:18,fontWeight:600,backgroundColor:'#333',color:'#fff',border:'none',borderRadius:6,cursor:'pointer'}}>Continue</button>
      </form>
    </div>
  )
}

export default Login