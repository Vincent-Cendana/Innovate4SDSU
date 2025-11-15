import React from 'react'
import {useNavigate} from 'react-router-dom'

const NavBar = ({showHome=true}) => {
	const nav = useNavigate()
	return (
		<div style={{display:'flex',alignItems:'center',gap:12,padding:12,borderBottom:'1px solid #eee'}}>
			<button onClick={() => nav(-1)} style={{padding:'6px 10px'}}>Back</button>
			{showHome && <button onClick={() => nav('/')} style={{padding:'6px 10px'}}>Home</button>}
			<div style={{flex:1}} />
		</div>
	)
}

export default NavBar
