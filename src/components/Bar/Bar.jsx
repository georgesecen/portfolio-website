import { React } from "react"
import "./bar.css"
import CodeLanguageIcon from "../CodeLanguageIcon/CodeLanguageIcon"

const Bar = () => {
  // Create random names for growing bar tags as there will be multiple bars so we need to make sure
  // we are animating the correct bar
  const id = Math.floor(Math.random() * 9999)

  // Function animates growing bars to specified percentage
  function animateBar(percentage) {
    // Get all the growing bars that belong to this bar
    const growingBars = document.getElementsByName(id)

    // Change content for each bar and translate y cordinate accordingly
    growingBars.forEach((bar) => {
      bar.setAttribute("value", percentage)

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
          <div className="growing-bar" value={0} name={id}></div>
        </div>
        <div className="right-face">
          {/* The growing bar is the colored slider which translates up and down the rectangle face */}
          <div className="growing-bar" value={0} name={id}></div>
        </div>
        <div className="top-face"></div>
        <div className="bottom-face"></div>
      </div>
      <div
        onClick={() => {
          animateBar(100)
        }}
        className="label"
      >
        Test text
      </div>
    </div>
  )
}

export default Bar
