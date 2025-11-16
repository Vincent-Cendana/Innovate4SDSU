import React from 'react'
import {useLocation, Link} from 'react-router-dom'
import NavBar from '../components/NavBar'
import examples from '../data/examples'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const SearchResults = () => {
  const q = useQuery().get('q') || ''
  const term = q.trim().toLowerCase()
  const matches = examples.filter(e => e.name.toLowerCase().includes(term))

  return (
    <div style={{maxWidth:800,margin:'0 auto',padding:12}}>
      <NavBar />
      <h2>Search results for "{q}"</h2>
      {matches.length === 0 && <div>No results found.</div>}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:12}}>
        {matches.map(ex => (
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

export default SearchResults
