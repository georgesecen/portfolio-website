import React from "react"
import handleViewport from "react-in-viewport"
import "./barChart.css"
import Bar from "./Bar/Bar"

/**
 * 3D Bar chart which will be used to display programming skills.
 * @param {Array<object>} series The data used to determine how each bar in the bar chart is rendered. Array should be in format [{value: number (0 -> 100), label: html/react element, color: string color (Must be available color)}]
 * @returns {React.JSX.Element} BarChart React component.
 */
const BarChart = ({ series }) => {

  return (
    <div className="barchart">
      {series.map((data, index) => {

        // https://www.npmjs.com/package/react-in-viewport
        // https://github.com/roderickhsiao/react-in-viewport#readme

        // So that the Bar component can animate based on if its scrolled in/out of view
        const ViewportBlock = handleViewport(Bar, /** options: {}, config: {} **/)

        return <ViewportBlock  key={index} value={data.value} label={data.label} color={data.color} />
      })}
    </div>
  )
}

export default BarChart
