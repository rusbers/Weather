function WeatherInfo(weatherData) {
  this.degree = Math.ceil(weatherData.main.temp);
  this.iconLink = `url(https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  this.city = weatherData.name;
  this.howFeels = Math.ceil(weatherData.main.feels_like);
  this.weather = weatherData.weather[0].main;
  this.sunsetTime = weatherData.sys.sunset;
  this.sunriseTime = weatherData.sys.sunrise;
}

function ForecastData(forecastDay) { 
  this.time = forecastDay.dt;
  this.temperature = Math.ceil(forecastDay.main.temp);
  this.feelsLike = Math.ceil(forecastDay.main.feels_like);
  this.icon = `url(https://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png)`;
  this.weather = forecastDay.weather[0].main;
}

const getFavoriteCities = () => {
  const favoriteCities = JSON.parse(localStorage.getItem('favorite cities'));

  return (favoriteCities) ? favoriteCities : [];
}

export { WeatherInfo, ForecastData, getFavoriteCities };


