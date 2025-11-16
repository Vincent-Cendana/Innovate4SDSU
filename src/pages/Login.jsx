import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import NavBar from '../components/NavBar'
import {supabase} from '../data/supabase'
import {Link} from 'react-router-dom'

const Login = () => {
  const [name,setName] = useState('')
  const nav = useNavigate()

  /*useEffect(() => {
    const checkUser = async () => {
      const {data} = await supabase.auth.getUser()
      if(data.user != null) {
        nav('/home#/home');
      }
    }
    checkUser();
  }, []);*/

  const submit = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithOtp({
      email: name + '@sdsu.edu',
      options: {
        data: {
          username: name
        }
      }
    })
    console.log(`login result for ${name + '@sdsu.edu'}: data:${data}, error: ${error}}`);
    nav('/home#/home')
  }

  const continueAsGuest = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInAnonymously({
      options: {
        data: {
          username: "Guest User"
        }
      }
    });
    console.log(await supabase.auth.getUser());
    nav('/home#/home');
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
      <button
        onClick={continueAsGuest}
        style={{display:'inline-block',textAlign:'center',padding:12,fontSize:18,fontWeight:600,backgroundColor:'#eee',color:'#333',border:'none',borderRadius:6,cursor:'pointer',marginTop:8,textDecoration:'none'}}>
        Continue as Guest
      </button>
    </div>
  )
}

export default Login