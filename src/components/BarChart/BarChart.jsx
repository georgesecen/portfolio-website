import React, { useState } from "react"
import "./barChart.css"
import Bar from "./Bar/Bar"

/**
 * 3D Bar chart which will be used to display programming skills.
 * @param {Array<object>} series The data used to determine how each bar in the bar chart is rendered. Array should be in format [{value: number (0 -> 100), label: html/react element, color: string color (Must be available color)}]
 * @returns {React.JSX.Element} BarChart React component.
 */
const BarChart = ({ series }) => {
  const [animateChart, setAnimateChart] = useState(false)

  return (
    <div className="barchart">
      {series.map((data, index) => {
        // Only set the bar value to its real value if animateChart is true as it will then make the bar animate to its real value, otherwise
        // it will just animate to 0 which the user will not be able to see
        return <Bar key={index} value={animateChart ? data.value : 0} label={data.label} color={data.color}></Bar>
      })}
      <button
        onClick={() => {
          setAnimateChart(!animateChart)
        }}
      >
        Aniamte chart
      </button>
    </div>
  )
}

export default BarChart
