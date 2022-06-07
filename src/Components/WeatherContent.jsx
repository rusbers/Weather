import Tabs from "./Tabs";
import Locations from "./Locations";

function WeatherContent(props) {
  const {currentWeather} = props;

  return (
    <div className="weather-content__inner">
      <Tabs currentWeather={currentWeather}/>
      <Locations />
    </div>
  )
}

export default WeatherContent