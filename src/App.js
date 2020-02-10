import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import getWeatherData from "./utils/axios";
import { format } from "date-fns";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      city: "",
      weatherForecasts: [],
      weatherCurrent: {},
      dataLimit: 5,
      dataUnit: "celsius"
    };
  }

  componentDidMount() {
    getWeatherData("brisbane", "au")
      .then(this.updateWeather)
      .catch(error => {
        console.log(error);
      });
  }

  updateWeather = response => {
    const current = response.data.data.current;
    const forecastArray = response.data.data.forecast
      .slice(0, 10)
      .map(forecast => {
        const date = new Date(forecast.time * 1000);
        const day = format(date, "EEE");
        const time = format(date, "HH:mm");
        return {
          ...forecast,
          day: day,
          time: time
        };
      });

    this.setState({
      weatherForecasts: forecastArray,
      weatherCurrent: current,
      city: response.data.data.city.name
    });
  };

  changeDataLimit = limit => {
    this.setState({ dataLimit: limit });
  };

  changeDataUnit = () => {
    this.setState(state => ({
      dataUnit: state.dataUnit === "celsius" ? "Fahrenheit" : "celsius"
    }));
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSerach = () => {
    const str = this.state.inputValue;
    const strArray = str.split(",");
    const city = strArray[0];
    const cc = strArray[1];
    getWeatherData(city, cc)
      .then(this.updateWeather)
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div
        className="weather-channel__container"
        data-aos="zoom-out"
        data-aos-delay="400"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        <Header />
        <Nav
          inputValue={this.state.inputValue}
          changeDataUnit={this.changeDataUnit}
          unit={this.state.dataUnit}
          handleInputChange={this.handleInputChange}
          handleSearch={this.handleSerach}
        />
        <Main
          forecastdata={this.state.weatherForecasts.slice(
            0,
            this.state.dataLimit
          )}
          currentWeather={this.state.weatherCurrent}
          city={this.state.city}
          changeDataLimit={this.changeDataLimit}
          limit={this.state.dataLimit}
          unit={this.state.dataUnit}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
