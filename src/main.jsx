import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'

ReactDOM.createRoot(document.getElementById('root'))
  .render(<App />)

/*
1. App
  2. SearchCity ------------ 
  2. WeatherContent         |
    3. Tabs                 |
      4. <WeatherNow />  ---
      4. <WeatherDetails />
      4. <Forecast />
       5. ForecastItem
    3. Locations
     4.LocationItem
*/


  // App
  //   (onRender) => {
  //     (first) => {
  //        const favoriteCities = getFavoriteCiteiesList() from localStorage

  //        if (!favoriteCities) return

  //         render(favoriteCities) in <Locations/> (where each location will be a list item as <LocationItem/>)
  //     }

  //     (second) => {
  //       const currentCity = getCurrentCity() from Cookies

  //       if (!currentCity) return

  //       render(currentCity) in <WeatherNow />
  //     }
  //   }
