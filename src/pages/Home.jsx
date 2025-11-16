import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import NavBar from '../components/NavBar'
import examples from '../data/examples'

const Home = () => {
  const [q, setQ] = useState('')
  const nav = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    nav(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <div style={{maxWidth:800,margin:'0 auto',padding:12}}>
      <NavBar />
      <h2>Welcome{typeof window !== 'undefined' && window.localStorage.getItem('username') ? `, ${window.localStorage.getItem('username')}` : ''}</h2>
      <form onSubmit={submit} style={{marginBottom:20}}>
        <input
          value={q}
          onChange={e=>setQ(e.target.value)}
          placeholder="Search examples..."
          style={{width:'100%',padding:12,fontSize:16,background:'transparent',border:'1px solid #ccc',borderRadius:6,opacity:0.9}}
        />
      </form>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
        {examples.map(ex => (
          <div key={ex.id} style={{border:'1px solid #eee',borderRadius:8,overflow:'hidden'}}>
            <img src={ex.image} alt={ex.name} style={{width:'100%',height:140,objectFit:'cover'}}/>
            <div style={{padding:10}}>
              <Link to={`/example/${ex.id}`} style={{fontWeight:700,textDecoration:'none',color:'#333'}}>{ex.name}</Link>
              <div style={{color:'#666',fontSize:13,marginTop:6}}>{ex.distance}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
