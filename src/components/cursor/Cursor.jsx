import { React, useEffect } from "react"
import "./cursor.css"

const Cursor = () => {
  // Make the text circular
  useEffect(() => {
    const text = document.querySelector(".custom-cursor > p")

    // Put every letter in the text in its own individual span tag
    text.innerHTML = text.textContent.replaceAll(/./g, "<span>$&</span>")

    // Get all of the span tags which each contain a letter of the text
    const letters = document.querySelectorAll(".custom-cursor > p > span")

    // Calculate how much rotation we need to give to each letter so when we spread the letters out from the
    // center the text looks circular
    const rotation = 360 / letters.length

    // Add roation to every letter so when we space out the span tags from origin it puts text in a circle
    letters.forEach((item, index) => {
      item.style.transform = "rotate(" + index * rotation + "deg)"
    })

    document.addEventListener("mousemove", function (e) {
      // Get the center position of the custom cursor
      const customCursor = document.getElementById("cursors")
      const centerWidth = customCursor.offsetWidth / 2
      const centerHeight = customCursor.offsetHeight / 2

      // Position the center of the custom cursor at the position of the cursor
      customCursor.style.transform = "translateY(" + (e.clientY - centerHeight) + "px)"
      customCursor.style.transform += "translateX(" + (e.clientX - centerWidth) + "px)"
    })
  }, [])

  return (
    <div className="custom-cursor" id="cursors">
      <p>. CHECK OUT PROJECT . CHECK OUT PROJECT </p>
    </div>
  )
}

export default Cursor
