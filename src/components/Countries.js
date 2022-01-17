import { useEffect, useState } from "react"
import axios from "axios"
import ShowCountries from "./ShowCountries"
import Loader from "./Loader"

function Countries() {
  const [countries, setCountry] = useState()
  const [searchValue, setSearchValue] = useState("")

  useEffect(getAllCountries, [])

  function getAllCountries() {
    axios
      .get("https://restcountries.com/v3.1/all/")
      .then((result) => setCountry(result.data))
  }

  if (!countries) return <Loader />
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  )
  return (
    <div>
      <ShowCountries list={filteredCountries} search={setSearchValue} />
    </div>
  )
}

export default Countries
