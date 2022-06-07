import { useState, useEffect } from "react"
import SearchCity from "./SearchCity"
import WeatherContent from "./WeatherContent"

function App() {
  const [currentWeather, setCurrentWeather] = useState('')

  return (
    <div className="container">
      <div className="weather-content">
        <SearchCity setCurrentWeather={setCurrentWeather}/>
        <WeatherContent currentWeather={currentWeather}/>
      </div>
    </div>
  )
}

export default App
