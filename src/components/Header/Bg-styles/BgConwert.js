import React from "react";
import { BgStyle, NightStyles } from "./Bg-Style";
const BgConwert = () => {
  return (
    <>
      <div className="bg"></div>
      {BgStyle()}
      {BgStyle()}
      {/* {NightStyles(wether.sys.sunset, wether.sys.sunrise, wether.dt)} */}
    </>
  );
};

export default BgConwert;
