import { React, useEffect } from "react"
import "./bar.css"

const Bar = ({ value, label, color }) => {
  // Create random names for growing bar tags as there will be multiple bars so we need to make sure
  // we are animating the correct bar
  const id = Math.floor(Math.random() * 9999)

  useEffect(() => {
    // Set default value of bar
    animateBar(value)

    // Get all the growing bars that belong to this bar
    const growingBars = document.getElementsByName(id)

    growingBars.forEach((bar) => {
      // Set the border color and percentage color of perecentage text
      bar.getElementsByTagName("span")[0].classList.add(`${color}-percentage-text`)

      // Set the background color of the growing bar
      bar.classList.add(`${color}-bar`)
    })
  }, [])

  // Function animates growing bars to specified percentage
  function animateBar(percentage) {
    // Get all the growing bars that belong to this bar
    const growingBars = document.getElementsByName(id)

    // Change content for each bar and translate y cordinate accordingly
    growingBars.forEach((bar) => {
      // Set the percentage text shown on the growing bar to percentage
      bar.getElementsByTagName("span")[0].innerText = percentage

      // To get the percentage we want we move the growing bar down 100 - percentage
      bar.style.translate = `0 ${100 - percentage}%`
    })
  }

  return (
    <div className="bar-container">
      <div className="bar">
        {/* Only left, right, and top face are visible to the user, however bottom face adds box shadow to make shape more 3d */}
        <div className="left-face">
          {/* The growing bar is the colored slider which translates up and down the rectangle face */}
          <div className="growing-bar" name={id}>
            <span>{value}</span>
          </div>
        </div>
        <div className="right-face">
          {/* The growing bar is the colored slider which translates up and down the rectangle face */}
          <div className="growing-bar" name={id}>
            <span>{value}</span>
          </div>
        </div>
        <div className="top-face"></div>
        <div className="bottom-face"></div>
      </div>
      <div className="label">{label}</div>
    </div>
  )
}

export default Bar
