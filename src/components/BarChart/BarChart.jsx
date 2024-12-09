import React from "react"
import "./barChart.css"
import Bar from "./Bar/Bar"

// Series should be an array of maps. Each array index will be the data for a bar in the bar chart.
// Array should be in format [{value: number (0 -> 100), label: html/react element, color: string color (Must be available color)}]
const BarChart = ({ series }) => {
  return (
    <div className="barchart">
      {series.map((data, index) => {
        return <Bar key={index} value={data.value} label={data.label} color={data.color}></Bar>
      })}
    </div>
  )
}

export default BarChart
