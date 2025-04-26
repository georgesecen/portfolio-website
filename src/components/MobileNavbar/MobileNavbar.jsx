import React, { useState } from 'react'
import "./mobileNavbar.css"

const MobileNavbar = () => {

  // Keep track if the mobile navbar is currently displayed
  const [active, setActive] = useState(false)

  return (
    <div className='mobile-navigation'>
        
        {/* Nav button */}
        {/* Idea from https://codepen.io/shieldsma91/pen/zLpbLX */}
        <div onClick={() => setActive(!active)} className={`nav-button ${active ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>

    </div>
  )
}

export default MobileNavbar