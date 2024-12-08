import React from "react"
import "./bar.css"

const Bar = () => {
  return (
    <div className="bar">
      {/* Only left, right, and top face are visible to the user */}
      <div className="left-face"></div>
      <div className="right-face"></div>
      <div className="top-face"></div>
    </div>
  )
}

export default Bar
