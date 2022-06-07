function WeatherInfo(weatherData) {
  this.degree = Math.ceil(weatherData.main.temp);
  this.iconLink = `url(https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  this.city = weatherData.name;
  this.howFeels = Math.ceil(weatherData.main.feels_like);
  this.weather = weatherData.weather[0].main;
  this.sunsetTime = weatherData.sys.sunset;
  this.sunriseTime = weatherData.sys.sunrise;
}

export { WeatherInfo };