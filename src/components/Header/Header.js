import React from "react";
import CurrenIcon from "../WeatherIcon/IconWeather";
import BgConwert from "./Bg-styles/BgConwert";
import HeaderMain from "./Header-Main";

const Header = ({ weather }) => {
  if (!weather) return null;

  console.log(weather);
  return (
    <>
      <BgConwert />
      <HeaderMain weather={weather} CurrenIcon={CurrenIcon} />
    </>
  );
};

export default Header;
