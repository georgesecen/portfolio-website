import React from "react"
import "./bar.css"
import CodeLanguageIcon from "../CodeLanguageIcon/CodeLanguageIcon"

const Bar = () => {
  return (
    <div className="bar-container">
      <div className="bar">
        {/* Only left, right, and top face are visible to the user, however bottom face adds box shadow to make shape more 3d */}
        <div className="left-face">
          {/* The growing bar is the colored slider which translates up and down the rectangle face */}
          <div className="growing-bar"></div>
        </div>
        <div className="right-face">
          {/* The growing bar is the colored slider which translates up and down the rectangle face */}
          <div className="growing-bar"></div>
        </div>
        <div className="top-face"></div>
        <div className="bottom-face"></div>
      </div>
      <div className="label">Test text</div>
    </div>
  )
}

export default Bar
