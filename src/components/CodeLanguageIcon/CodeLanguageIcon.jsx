import React from "react"
import "./codeLanguageIcon.css"

// Get all the programming language logos
import * as logos from "../../assets/images"

const CodeLanguageIcon = ({ language }) => {
  // Create map so the logo displayed is for the language the user entered via props
  // {language name : [language logo, language color]}
  const languages = {
    angular: [logos.angularLogo, "rgb(221, 0, 49)"],
    java: [logos.javaLogo, "rgb(231, 111, 0)"],
    javascript: [logos.javascriptLogo, "rgb(247, 223, 30)"],
    mysql: [logos.mysqlLogo, "rgb(0, 117, 143)"],
    python: [logos.pythonLogo, "#3776ab"],
    react: [logos.reactLogo, "rgb(83, 193, 222)"],
    typescript: [logos.typescriptLogo, "rgb(0, 122, 204)"],
  }

  return (
    <div className="code-language-icon" style={{ borderColor: languages[language][1] }}>
      <img src={languages[language][0]} alt="" />
      <p>{language}</p>
    </div>
  )
}

export default CodeLanguageIcon
