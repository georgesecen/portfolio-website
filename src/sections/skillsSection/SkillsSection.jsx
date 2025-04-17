import React from 'react'
import { BarChart, CodeLanguageIcon } from '../../components'
import "./skillsSection.css"

/**
 * Skills section which displays my skills in the form of a 3D barchart.
 * @returns {React.JSX.Element} SkillsSection React component.
 */
const SkillsSection = () => {

  return (
    <div id='skills-section' className='skills-section' name="section">
        <h1>Skills</h1>
        <p>A chart of languages that I am familar with and have used in prior projects. The higher the value the more skilled I am in that language.</p>
        <div>
          <BarChart series={[
              {value: 100, label: <CodeLanguageIcon language="python" />, color: "yellow"},
              {value: 65, label: <CodeLanguageIcon language="angular" />, color: "red"},
              {value: 75, label: <CodeLanguageIcon language="typescript" />, color: "teal"},
              {value: 100, label: <CodeLanguageIcon language="html" />, color: "orange"},
              {value: 100, label: <CodeLanguageIcon language="css" />, color: "blue"},
              {value: 90, label: <CodeLanguageIcon language="react" />, color: "green"},
              {value: 90, label: <CodeLanguageIcon language="javascript" />, color: "yellow"},
              {value: 85, label: <CodeLanguageIcon language="java" />, color: "brown"},
              {value: 85, label: <CodeLanguageIcon language="mysql" />, color: "pink"},
          ]} />
        </div>
    </div>
  )
}

export default SkillsSection