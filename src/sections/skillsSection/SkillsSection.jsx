import React from 'react'
import { BarChart, CodeLanguageIcon } from '../../components'
import "./skillsSection.css"

const skillsSection = () => {
  return (
    <div>
        <h1>Skills</h1>
        <p>A list of languages that I am familar with and have used in prior projects. The higher the value the more skilled I am in that language</p>
        <BarChart series={[
            {value: 100, label: <CodeLanguageIcon language="java" />, color: "blue"},
            {value: 90, label: <CodeLanguageIcon language="python" />, color: "purple"}
        ]} />
    </div>
  )
}

export default skillsSection