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
    const {data: {user}} = await supabase.auth.getUser();
    if(user == null) {
      const { data, error} = await supabase
    }

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
    <div className="container" style={{maxWidth:520,marginTop:40}}>
      <div className="card" style={{padding:20}}>
        <h1 style={{fontSize:28,fontWeight:700,marginBottom:16}}>Rate Your Study</h1>

        <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:12}}>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <input
              placeholder="Enter username"
              value={name}
              onChange={e=>setName(e.target.value)}
              className="input"
              style={{flex:1}}
            />
            <span style={{fontSize:16,color:'var(--muted)',fontWeight:500}}>@sdsu.edu</span>
          </div>

          <div style={{display:'flex',gap:12,marginTop:8}}>
            <button type="submit" className="btn btn-primary">Continue</button>
            <button type="button" className="btn btn-ghost" onClick={continueAsGuest}>Continue as Guest</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login