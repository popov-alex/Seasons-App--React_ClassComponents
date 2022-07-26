import React from "react";
import "./SeasonComponent.css";
import ReactDOM from "react-dom";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it's chilly",
    iconName: "snowflake",
  },
};

const seasonCheck = (lat, month) => {
  console.log(lat, month);
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonComponent = (props) => {
  const season = seasonCheck(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-component ${season}`}>
      <i className={`left-icon ${iconName} massive icon`} />
      <h1>{text}</h1>
      <i className={`right-icon ${iconName} massive icon`} />
    </div>
  );
};

export default SeasonComponent;
