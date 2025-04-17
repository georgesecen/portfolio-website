import { React, useEffect, useRef } from "react"
import "./navbar.css"

const Navbar = () => {
  // Keep track of currently active nav bar item
  const active = useRef()

  // Animating the navbar
  useEffect(() => {
    // Get the slider, all nav bar items, and all sections
    const slider = document.getElementById("slider")
    const navItems = document.getElementsByName("nav-item")
    const sections = document.getElementsByName("section")

    // By default first nav item will be in active state
    active.current = navItems[0]

    // Set default size and position of slider same as left most nav item
    slider.style.width = navItems[0].clientWidth + "px"
    slider.style.height = navItems[0].clientHeight + "px"
    slider.style.left = navItems[0].offsetLeft + "px"

    // Updating the slider when nav links are clicked
    navItems.forEach((item) => {
      item.onclick = function () {
        updateSelectedNavItem(slider, item)
      }
    })

    // https://www.youtube.com/watch?v=-uZ8MT4r2jY
    // Updating the slider accordingly when user scrolls to each section
    window.onscroll = () => {
      sections.forEach((section) => {
        const top = window.scrollY
        const offset = section.offsetTop
        const height = section.offsetHeight
        const id = section.getAttribute("id")

        // Get corresponding nav item for this section
        const navItem = document.querySelector(`a[href='#${id}']`)

        // If we are currently on this section
        if (top >= offset && top < offset + height){
          
          // If we are on a new section update the active nav item to this section
          if (active.current != navItem){
            updateSelectedNavItem(slider, navItem)
          }
        }
      })
    }

  }, [])

  // Function updates the slider to be behind the navItem and gives the navItem the active class
  function updateSelectedNavItem(slider, navItem){
    // Set size and position of slider to size of clicked nav item
    slider.style.width = navItem.clientWidth + "px"
    slider.style.height = navItem.clientHeight + "px"
    slider.style.left = navItem.offsetLeft + "px"

    // Remove active state from currently selected nav item and add to clicked nav item
    active.current.classList.remove("active")
    navItem.classList.add("active")
    active.current = navItem
  }

  return (
    <div className="navbar">
      <span className="slider" id="slider"></span>
      <a href="#introduction-section" name="nav-item" className="active">
        Home
      </a>
      <a href="#skills-section" name="nav-item">
        Skills
      </a>
      <a href="#projects-section" name="nav-item">
        Projects
      </a>
      <a href="#experience-section" name="nav-item">
        Experience
      </a>
      <a href="#contact-section" name="nav-item">
        Contact
      </a>
    </div>
  )
}

export default Navbar
