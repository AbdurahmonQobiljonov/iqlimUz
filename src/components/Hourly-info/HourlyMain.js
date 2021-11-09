import React from "react";
import { useTranslation } from "react-i18next";
import { GetTime } from "../Time-Creator/Time";
const HourlyMain = ({ CurrenIcon }) => {
  const { t } = useTranslation();

  return (
    <div className="hourly_info">
      <h3 className="hourly_header">{t("Hourly")}</h3>
      <div className="row">
        <div className="hour_box">
          <h5>{GetTime(221321323)}</h5>

          {CurrenIcon(201)}

          <p>{Math.round(273 - 273.15)}°C</p>
          <i className="fas fa-tint">
            <span> </span>
            15 %
          </i>
        </div>
      </div>
    </div>
  );
};

export default HourlyMain;
