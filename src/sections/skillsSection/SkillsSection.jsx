import React from 'react'
import { BarChart, CodeLanguageIcon } from '../../components'
import "./skillsSection.css"

const SkillsSection = () => {

  return (
    <div id='skills-section' className='skills-section'>
        <h1>Skills</h1>
        <p>A chart of languages that I am familar with and have used in prior projects. The higher the value the more skilled I am in that language</p>
        <div>
          <BarChart series={[
              {value: 100, label: <CodeLanguageIcon language="java" />, color: "yellow"},
              {value: 90, label: <CodeLanguageIcon language="python" />, color: "red"},
              {value: 90, label: <CodeLanguageIcon language="python" />, color: "purple"},
              {value: 90, label: <CodeLanguageIcon language="python" />, color: "green"},
              {value: 90, label: <CodeLanguageIcon language="python" />, color: "blue"},
              {value: 90, label: <CodeLanguageIcon language="python" />, color: "orange"},
              {value: 90, label: <CodeLanguageIcon language="python" />, color: "pink"},
              {value: 90, label: <CodeLanguageIcon language="python" />, color: "brown"},
              {value: 90, label: <CodeLanguageIcon language="python" />, color: "teal"},
          ]} />
        </div>
    </div>
  )
}

export default SkillsSection