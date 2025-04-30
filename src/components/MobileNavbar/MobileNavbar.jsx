import React, { useState } from 'react'
import "./mobileNavbar.css"


/**
 * Mobile navbar is displayed on smaller devices and gives smaller devices access to the navigation.
 * @returns {JSX.Element} MobileNavbar React component.
 */
const MobileNavbar = () => {

  // Keep track if the mobile navbar is currently displayed
  const [active, setActive] = useState(false)

  // Function adds class to body to stop it from scrolling when mobile navbar is active
  function displayMobileNavigation(active){

    // Get the body element
    const body = document.body

    // If mobile nav is to be active
    if (active){
        body.classList.add("active-mobile-nav")
    }

    // Otherwise mobile nav to to disseapear
    else{
        body.classList.remove("active-mobile-nav")
    }

    setActive(active)
  }

  return (
    <div className={`mobile-navigation ${active ? "active" : ""}`}>
        
        {/* Nav button */}
        {/* Idea from https://codepen.io/shieldsma91/pen/zLpbLX */}
        <div onClick={() => displayMobileNavigation(!active)} className='nav-button'>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className='menu'>
            <a onClick={() => displayMobileNavigation(false)} href="#introduction-section">
                Home
            </a>
            <a onClick={() => displayMobileNavigation(false)} href="#skills-section">
                Skills
            </a>
            <a onClick={() => displayMobileNavigation(false)} href="#projects-section">
                Projects
            </a>
            <a onClick={() => displayMobileNavigation(false)} href="#experience-section">
                Experience
            </a>
            <a onClick={() => displayMobileNavigation(false)} href="#contact-section">
                Contact
            </a>
        </div>

    </div>
  )
}

export default MobileNavbar