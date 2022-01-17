import { FaLongArrowAltLeft } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"

function CountryPopUp() {
  const location = useLocation()
  const { ...country } = location.state
  console.log(country)

  return (
    <div className="country-popup">
      <Link to="/">
        <butto className="btn">
          <FaLongArrowAltLeft /> Back
        </butto>
      </Link>
      <div className="country">
        <div
          className="flag"
          style={{ backgroundImage: `url(${country.flags.png})` }}
        ></div>

        <div>
          <h2>{country.name.common}</h2>

          <div className="country-details">
            <div>
              <b>Population: </b>
              <span>{country.population.toLocaleString()}</span>
            </div>

            <div>
              <b>Region: </b>
              <span>{country.region}</span>
            </div>

            <div>
              <b>Capital: </b>
              <span>{country.capital}</span>
            </div>

            <div>
              <b>Sub Region: </b>
              <span>{country.subregion}</span>
            </div>

            <div>
              <b>Top Level Domain: </b>
              <span>{country.tld}</span>
            </div>
          </div>
          <div className='flex-row'>
            <b>Languages: </b>
            {Object.values(country.languages).map((l) => (
              <span className="lbtn" key={l}>
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryPopUp

