import React from 'react'
import{useTranslation,Trans} from'react-i18next'

const langs = {
  en:"English",
  ar:"عربي",
  gr:"ΕΛΛΗΝΑΣ",
  sp:"Spanich"
}
export default function App() {
  const {i18n} = useTranslation()
  return (
    <center>
      <h1><Trans i18nKey="Welcome">Welcome</Trans></h1>
      <h3><Trans i18nKey="do"></Trans></h3>
      {Object.keys(langs).map((lang)=>(
        <button className="btn btn-primary" style={{margin:"25px"}}onClick={()=>i18n.changeLanguage(lang)}>{langs[lang]}</button>
      ))}
    </center>
  )
}
