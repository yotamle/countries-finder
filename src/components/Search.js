import { FaSearch } from "react-icons/fa"

function Search(props) {
  return (
    <div className="search">
      <label htmlFor="search">
        <FaSearch className="search-icon" />
      </label>
      <input
        id="search"
        type="search"
        placeholder="Search country by name..."
        onChange={(e) => props.search(e.target.value)}
      />
    </div>
  )
}

export default Search
