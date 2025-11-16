import React, {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import NavBar from '../components/NavBar'
import {supabase} from '../data/supabase'

const Home = () => {
  const [q, setQ] = useState('')
  const nav = useNavigate()

  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchExamples = async () => {
      const {data, error} = await supabase
        .from("spots")
        .select("*")
      
      if(error) console.error("Error fetching spots:", error.message);
      else setSpots(data);
    }

    fetchExamples();
  }, []);

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
          placeholder="Search spots..."
          style={{width:'100%',padding:12,fontSize:16,background:'transparent',border:'1px solid #ccc',borderRadius:6,opacity:0.9}}
        />
      </form>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
        {spots.map(spot => (
          <div key={spot.spot_key} style={{border:'1px solid #eee',borderRadius:8,overflow:'hidden'}}>
            <img src={spot.image} alt={spot.name} style={{width:'100%',height:140,objectFit:'cover'}}/>
            <div style={{padding:10}}>
              <Link to={`/spot/${spot.name}`} style={{fontWeight:700,textDecoration:'none',color:'#333'}}>{spot.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
