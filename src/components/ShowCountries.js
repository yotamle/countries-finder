import CountryItem from "./CountryItem"
import Search from "./Search"

function ShowCountries(props) {
  const countriesList = props.list
  return (
    <div>
      <Search search={props.search} />
      <div className="country-flex">
        {countriesList.map((country) => {
          return <CountryItem key={country.cca2} {...country} />
        })}
      </div>
    </div>
  )
}

export default ShowCountries
