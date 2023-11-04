import React from 'react'
import "./Navigation.module.css"

const Navigation = () => {
  return (
    <>
        <nav className='navigation'>
      <div className="logo">
        <img src="/Images/Frame 2 1.png" alt="do some coding logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    </>
  )
}

export default Navigation
