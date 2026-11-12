import React from 'react'
import './Navbar.css'
import navProfile from '../../assets/Admin_Assets/navProfile.webp'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
        <h1>Driftwear</h1>
        <p>Admin panel</p>
        </div>
        <img src={navProfile} alt="" className='nav-profile' />
    </div>
  )
}

export default Navbar