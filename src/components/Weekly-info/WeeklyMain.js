import React from "react";
import CurrenIcon from "../WeatherIcon/IconWeather";
import { GetWeekDay } from "../Time-Creator/Time";
import { useTranslation } from "react-i18next";
import { RenderWeathers, RenderWeeks } from "../Helper/Language-helper";
const WeeklyMain = ({ weeklyItem }) => {
  const { t } = useTranslation();

  return (
    <main>
      <h3 className="weekly_header">{t("weekly")}</h3>
      <section>
        {weeklyItem.forecasts.map((item) => {
          return (
            <div className="weather2" key={item._id}>
              <h3 className="info_date">
                {RenderWeeks(GetWeekDay(item.date_ts, "long"))}
              </h3>
              <div className="data">{CurrenIcon(item.parts.day.icon)}</div>
              <div className="number">
                {item.parts.day_short.temp}°C <span>/ </span>
                {item.parts.day_short.temp_min}°C
              </div>
              <div className="rain_info">
                <i className="fas fa-tint">
                  <span> </span>
                  <span>{Math.round(15)}</span> %
                </i>
              </div>

              <div className="cloud">{item.parts.day.condition}</div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default WeeklyMain;
