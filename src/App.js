import "./App.css"
import Countries from "./components/Countries"
import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"
import CountryPopup from './components/CountryPopup'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:countryName" element={<CountryPopup />} />
      </Routes>
    </div>
  )
}

export default App
