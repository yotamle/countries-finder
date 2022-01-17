import { Link } from 'react-router-dom'

function CountryItem(props) {
  const { name, flags, capital, region, population } = props

  return (
    <div className="country-item">
      <Link to={`/${name.common}`} state={props}>
        <div
          className="country-flag"
          style={{ backgroundImage: `url(${flags.svg})` }}
        ></div>
        <div className="flex">
          <div>
            <h2 className="country-title">{name.common}</h2>
          </div>
          <div className="country-prop">
            <div>
              <b>Population: </b>
              <span>{population.toLocaleString()}</span>
            </div>
            <div>
              <b>Region: </b>
              <span>{region}</span>
            </div>
            <div>
              <b>Capital: </b>
              <span>{capital}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CountryItem
