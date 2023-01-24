import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

function Navbar() {
  return (
    <div className='mainNav'>
        <div className='navLogo'>
            <h3>OneSchool</h3>
        </div>
        <div className='navLi'>
            <Link className='lii' to={"/"}>Home</Link>
            <Link className='lii' to={"/add"}>Add</Link>
        </div>
        <div>
            <button className='btn'>CONTACT US</button>
        </div>
    </div>
  )
}

export default Navbar