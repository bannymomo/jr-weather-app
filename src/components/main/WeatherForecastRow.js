import React from "react";
import AOS from "aos";
AOS.init();

function WeatherForecastRow(props) {
  return (
    <div className="weather-forecast__row">
      <span className="weather-forecast__day">{props.day}</span>
      <span className="weather-forecast__icon">
        <i className="fa fa-clock-o"></i> {props.time}
      </span>
      <span className="weather-forecast__high">{props.tempHigh}</span>
      <span className="weather-forecast__low">{props.tempLow}</span>
    </div>
  );
}

export default WeatherForecastRow;
