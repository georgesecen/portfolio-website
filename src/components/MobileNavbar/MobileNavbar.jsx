import React, { useState } from 'react'
import "./mobileNavbar.css"

const MobileNavbar = () => {

  // Keep track if the mobile navbar is currently displayed
  const [active, setActive] = useState(false)

  return (
    <div className={`mobile-navigation ${active ? "active" : ""}`}>
        
        {/* Nav button */}
        {/* Idea from https://codepen.io/shieldsma91/pen/zLpbLX */}
        <div onClick={() => setActive(!active)} className='nav-button'>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className='menu'>
            <a onClick={() => setActive(false)} href="#introduction-section">
                Home
            </a>
            <a onClick={() => setActive(false)} href="#skills-section">
                Skills
            </a>
            <a onClick={() => setActive(false)} href="#projects-section">
                Projects
            </a>
            <a onClick={() => setActive(false)} href="#experience-section">
                Experience
            </a>
            <a onClick={() => setActive(false)} href="#contact-section">
                Contact
            </a>
        </div>

    </div>
  )
}

export default MobileNavbar