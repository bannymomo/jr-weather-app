import React from "react";
import WeatherForecastRow from "./WeatherForecastRow";

function ForecastWeather(props) {
  return (
    <section
      className="weather-forecast"
      data-aos="fade-left"
      data-aos-delay="400"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <div className="forecast__switch">
        <button
          onClick={() => props.changeDataLimit(5)}
          className={
            props.limit === 5
              ? "forecast__switch_0 switch-active"
              : "forecast__switch_0"
          }
        >
          5 items
        </button>
        <button
          onClick={() => props.changeDataLimit(10)}
          className={
            props.limit === 10
              ? "forecast__switch_1 switch-active"
              : "forecast__switch_1"
          }
        >
          10 items
        </button>
      </div>
      {props.forecastdata.map(forecast => (
        <WeatherForecastRow
          key={forecast.day + forecast.time}
          day={forecast.day}
          time={forecast.time}
          unit={props.unit}
          tempHigh={
            props.unit === "celsius"
              ? forecast.maxCelsius + " C"
              : forecast.maxFahrenheit + " F"
          }
          tempLow={
            props.unit === "celsius"
              ? forecast.minCelsius + " C"
              : forecast.minFahrenheit + " F"
          }
        />
      ))}
    </section>
  );
}

export default ForecastWeather;
