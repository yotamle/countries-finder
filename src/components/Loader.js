import Spinner from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default function Loader() {
  return (
    <div className="loader">
      <Spinner
        type="TailSpin"
        color="#fff"
        width={80}
        height={80}
      />
    </div>
  )
}
