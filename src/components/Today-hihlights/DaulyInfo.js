import React from "react";
import { useTranslation } from "react-i18next";

const DaulyInfo = ({ hihgLights }) => {
  const { t } = useTranslation();
  return (
    <>
      {hihgLights.map((item) => (
        <div key={item.id}>
          <div className="utlifiolet">
            <div className="ulti-main">
              <img src={item.infoIcon} alt="" />
              <p>{t(item.title)}</p>
            </div>
            <div className="ulti_text">
              <h4>{item.mainHigh}</h4>
            </div>
          </div>
          {item.dividing}
          {item.dividingP}
        </div>
      ))}
    </>
  );
};

export default DaulyInfo;
