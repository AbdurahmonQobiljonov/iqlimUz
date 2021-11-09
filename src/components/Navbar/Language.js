import React from "react";
import i18next from "i18next";
import rus from "../../picture/russia.png";
import uzb from "../../picture/uzbekistan.png";

const languages = [
  {
    code: "ru",
    name: "Ru",
    img: rus,
  },
  {
    code: "uz",
    name: "O'z",
    img: uzb,
  },
];

const Language = () => {
  return (
    <div className="lang">
      {languages.map(({ code, name, img }) => {
        return (
          <div
            key={code}
            className="ai_lang"
            onClick={() => {
              i18next.changeLanguage(code);
            }}
          >
            <img src={img} alt="" /> <span> {name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Language;
