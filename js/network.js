const API = {
  URL: {
    WEATHER: 'https://api.openweathermap.org/data/2.5/weather',
    FORECAST: 'https://api.openweathermap.org/data/2.5/forecast',
  },
  KEY: '39f9c4703a56fdbd7410ee22a7d0e33a',
};

function getFetchUrl(api, currentCity) {
  const currentWeatherUrl = `${api}?q=${currentCity}&appid=${API.KEY}&units=metric`;
  const forecastUrl = `${api}?q=${currentCity}&appid=${API.KEY}&units=metric`;

  return (api === API.URL.WEATHER) ? currentWeatherUrl : forecastUrl;
}

async function forecastRequest(url, cityName ) {
  const fetchUrl = getFetchUrl(url, cityName);

  const fetchData = await fetch(fetchUrl);

  return await fetchData.json();
}



export { API, getFetchUrl, forecastRequest };