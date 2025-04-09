import React, { useEffect } from 'react'
import { BarChart, CodeLanguageIcon } from '../../components'
import "./skillsSection.css"

const SkillsSection = () => {

  return (
    <div id='skills-section' className='skills-section'>
        <h1>Skills</h1>
        <p>A list of languages that I am familar with and have used in prior projects. The higher the value the more skilled I am in that language</p>
        <div>
          <BarChart series={[
              {value: 100, label: <CodeLanguageIcon language="java" />, color: "blue"},
              {value: 90, label: <CodeLanguageIcon language="python" />, color: "purple"},
              {value: 90, label: <CodeLanguageIcon language="python" />, color: "purple"},
              {value: 90, label: <CodeLanguageIcon language="python" />, color: "purple"},
              {value: 90, label: <CodeLanguageIcon language="python" />, color: "purple"},
              {value: 90, label: <CodeLanguageIcon language="python" />, color: "purple"},
              {value: 90, label: <CodeLanguageIcon language="python" />, color: "purple"},
              {value: 90, label: <CodeLanguageIcon language="python" />, color: "purple"}
          ]} />
        </div>
    </div>
  )
}

export default SkillsSection