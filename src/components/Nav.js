import React from "react";

function Nav(props) {
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      props.handleSearch();
    }
  };
  return (
    <nav>
      <input
        onKeyDown={handleKeyPress}
        value={props.inputValue}
        placeholder="brisbane,au"
        className="search-input"
        onChange={event => props.handleInputChange(event)}
      />
      <button onClick={props.handleSearch} className="search-btn">
        <i className="fa fa-search"></i>
      </button>

      <button onClick={props.changeDataUnit} className="temp-switch">
        <i className="fa fa-thermometer-empty thermometer"></i>
        <sup>°</sup>
        {props.unit === "celsius" ? "C" : "F"}
      </button>
    </nav>
  );
}

export default Nav;
