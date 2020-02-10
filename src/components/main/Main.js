import React from "react";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

function Main(props) {
  return (
    <main>
      <CurrentWeather
        currentWeather={props.currentWeather}
        unit={props.unit}
        city={props.city}
      />
      <ForecastWeather
        forecastdata={props.forecastdata}
        changeDataLimit={props.changeDataLimit}
        limit={props.limit}
        unit={props.unit}
      />
    </main>
  );
}

export default Main;
