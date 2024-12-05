import { React, useEffect, useRef } from "react"
import "./navbar.css"

const Navbar = () => {
  // Keep track of currently active nav bar item
  let active = useRef()

  // Animating the navbar
  useEffect(() => {
    // Get the slider and all nav bar items
    const slider = document.getElementById("slider")
    const navItems = document.getElementsByName("nav-item")

    active = navItems[0]

    // Set default size and position of slider same as left most nav item
    slider.style.width = navItems[0].clientWidth + "px"
    slider.style.height = navItems[0].clientHeight + "px"
    slider.style.left = navItems[0].offsetLeft + "px"

    navItems.forEach((item, index) => {
      item.onclick = function () {
        // Set size and position of slider to size of clicked nav item
        slider.style.width = item.clientWidth + "px"
        slider.style.height = item.clientHeight + "px"
        slider.style.left = item.offsetLeft + "px"

        // Remove active state from currently selected nav item and add to clicked nav item
        active.classList.remove("active")
        item.classList.add("active")
        active = item
      }
    })
  }, [])

  return (
    <div className="navbar">
      <span className="slider" id="slider"></span>
      <a href="#" name="nav-item" className="active">
        Home
      </a>
      <a href="#" name="nav-item">
        Experience
      </a>
      <a href="#" name="nav-item">
        Projects
      </a>
      <a href="#" name="nav-item">
        Contact
      </a>
    </div>
  )
}

export default Navbar
