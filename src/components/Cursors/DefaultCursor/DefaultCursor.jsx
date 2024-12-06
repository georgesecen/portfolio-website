import { React, useEffect } from "react"
import "./defaultCursor.css"

const DefaultCursor = () => {
  useEffect(() => {
    document.addEventListener("mousemove", function (e) {
      // Get the center position of the default cursor
      const defaultCursor = document.getElementById("default-cursor")
      const centerWidth = defaultCursor.offsetWidth / 2
      const centerHeight = defaultCursor.offsetHeight / 2

      // Position the center of the default cursor element at the position of the cursor actual
      defaultCursor.style.translate = e.clientX - centerWidth + "px " + (e.clientY - centerHeight) + "px"
    })
  }, [])
  return (
    <div className="default-cursor" id="default-cursor">
      <div></div>
    </div>
  )
}

export default DefaultCursor
