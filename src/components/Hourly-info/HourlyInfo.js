import React from "react";
import CurrenIcon from "../WeatherIcon/IconWeather";
import HourlyMain from "./HourlyMain";
const HourlyInfo = () => {
  return (
    <div className="container">
      <HourlyMain CurrenIcon={CurrenIcon} />
    </div>
  );
};

export default HourlyInfo;
