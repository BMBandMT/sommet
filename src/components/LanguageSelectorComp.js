import React from "react"
import { LanguageSelector } from "gatsby-plugin-translate"
export const LanguageSelectorComp = () => {
  return (
    <div>
      <LanguageSelector sourceLanguage={true}>English</LanguageSelector>
      <LanguageSelector language="fr-fr">French</LanguageSelector>
    </div>
  )
}
export default LanguageSelectorComp
