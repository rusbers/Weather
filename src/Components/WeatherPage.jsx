import SearchCity from "./SearchCity"
import WeatherOptions from "./WeatherOptions"
import { Link } from "react-router-dom"

function WeatherPage() {
  return (
    <div className="content__weather">
      <SearchCity />
      <WeatherOptions />
      <div className="link">
        <Link to="/help-page">How does it work?</Link>
      </div>
    </div>
  )
}

export { WeatherPage }