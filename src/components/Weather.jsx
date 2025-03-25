import React, { useEffect, useState } from "react";
import axios from "axios";

export const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
        q: 'delhi',
        units: 'metric',
        cnt: 3,
        appid: 'e7a2e37bb0cf042d33d08391800e655a',
      },
    })
    .then(response => {
      const data = response.data;
      console.log(data);
      setWeather({
        currentTemp: data.list[0].main.temp,
        condition : data.list[0].weather[0].description,
        forecast: data.list.slice(1, 3).map(item => ({
          temp: item.main.temp,
          date: new Date(item.dt_txt).toLocaleDateString(),
        }))
      });
    })
    .catch(error => console.error('Error fetching weather:', error));
  }, []);

  return (
    <div className="weather-container">
      {weather ? (
        <>
          <div className="weather-main">Current Temperature</div>
          <div className="weather-temp">{weather.currentTemp}°C</div>
          <div className="weather-condition">weather condition : {weather.condition} </div>
          <div className="weather-cards">
            {weather.forecast.map((day, index) => (
              <div key={index} className="weather-card">
                <h4>{day.date}</h4>
                <p>{day.temp}°C</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Weather;