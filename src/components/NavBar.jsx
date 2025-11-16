import React from 'react'
import {useNavigate} from 'react-router-dom'

const NavBar = ({showHome=true}) => {
	const nav = useNavigate()
	return (
		<header className="app-header">
			<button className="btn btn-ghost" onClick={() => nav(-1)}>Back</button>
			{showHome && <button className="btn btn-ghost" onClick={() => nav('/home')}>Home</button>}
			<div style={{flex:1}} />
			<div className="app-title">Rate Your Study</div>
		</header>
	)
}

export default NavBar
