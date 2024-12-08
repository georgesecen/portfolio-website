import { React, useEffect } from "react"
import "./customCursor.css"
import { githubLogo } from "../../../assets/images"

const CustomCursor = () => {
  useEffect(() => {
    const text = document.querySelector(".custom-cursor > p")

    // Put every character in the text in its own individual span tag
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
      const customCursor = document.getElementById("custom-cursor")
      const centerWidth = customCursor.offsetWidth / 2
      const centerHeight = customCursor.offsetHeight / 2

      // Position the center of the custom cursor at the position of the cursor
      // customCursor.style.translate = "translateY(" + (e.clientY - centerHeight) + "px)"
      // customCursor.style.transform += "translateX(" + (e.clientX - centerWidth) + "px)"
      customCursor.style.translate = e.clientX - centerWidth + "px " + (e.clientY - centerHeight) + "px"
    })
  }, [])

  return (
    <div className="custom-cursor" id="custom-cursor">
      <img src={githubLogo} alt="" />
      <p>. CHECK OUT PROJECT . CHECK OUT PROJECT </p>
    </div>
  )
}

export default CustomCursor
