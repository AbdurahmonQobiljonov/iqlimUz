import React from "react";
import {
  RenderCitys,
  // RenderWeathers,
  RenderWeeks,
} from "../Helper/Language-helper";
import { GetWeekDay, GetMonth, GetTime } from "../Time-Creator/Time";
const HeaderMain = ({ weather, CurrenIcon }) => {
  return (
    <div className="weather">
      <h1>
        {weather.geo_object.locality.name},{" "}
        {RenderCitys(weather.geo_object.country.name.substr(0, 2))}
      </h1>
      <div className="box_main">
        <div className="icon">{CurrenIcon(weather.fact.icon)}</div>
        <div className="box_text">
          <h1 id="wether_cel_info">{weather.fact.temp}</h1>
          <sup>&#8304;</sup>
        </div>
        <div className="box_text_main">
          <p className="act" id="cel">
            C
          </p>
        </div>
      </div>
      <p className="weather_info">{weather.fact.condition}</p>
      <p className="weather_update_time">
        {RenderWeeks(GetWeekDay(weather.now, "long"))}. {GetMonth(weather.now)}
        <span className="hour">{GetTime(weather.now)}</span>
      </p>
    </div>
  );
};

export default HeaderMain;
