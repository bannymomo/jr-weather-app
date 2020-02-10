import React from "react";
import umberella from "../../assets/icon/icon-umberella.png";
import wind from "../../assets/icon/icon-wind.png";
import compass from "../../assets/icon/icon-compass.png";

function CurrentWeather(props) {
  const unit = props.unit;
  const temp =
    unit === "celsius"
      ? props.currentWeather.maxCelsius + " C"
      : props.currentWeather.maxFahrenheit + " F";

  return (
    <section
      className="weather-condition"
      data-aos="fade-right"
      data-aos-delay="400"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <div className="weather-condition__location">{props.city}</div>
      <div className="weather-condition__state">Clear</div>
      <div className="weather-condition__temp">{temp}</div>
      <div className="weather-condition__desc">
        <div>
          <img src={umberella} alt="umberella" />
          <span className="citem">{props.currentWeather.humidity}%</span>
        </div>
        <div>
          <img src={wind} alt="wind" />
          <span className="citem">{props.currentWeather.windSpeed}km/h</span>
        </div>
        <div>
          <img src={compass} alt="compass" />
          <span className="citem">{props.currentWeather.windDirection}</span>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;
