import {
  ClearSkyStyle,
  FewSkyStyle,
  DarCloudsStyle,
  RainStyle,
  FogStyle,
  ThunderStyle,
  SnowSky,
  NightStyle,
} from "../../StyledGlobal/globalStyle";

const BgStyle = () => {
  switch ("Clear") {
    case "Clear":
      return <ClearSkyStyle />;
    case "Snow":
      return <SnowSky />;
    case "Rain" || "Drizzle":
      return <RainStyle />;
    case "Thunderstorm":
      return <ThunderStyle />;
    case "Smoke":
      return <FogStyle />;
    case "Mist":
      return <FogStyle />;
    case "Haze":
      return <FogStyle />;
    case "Fog":
      return <FogStyle />;
    case "Sand":
      return <FogStyle />;
    case "Dust":
      return <FogStyle />;
    case "Squall":
      return <FogStyle />;
    case "Tornada":
      return <FogStyle />;
    case "few clouds":
      return <FewSkyStyle />;
    case "scattered clouds":
      return <DarCloudsStyle />;
    case "broken clouds":
      return <DarCloudsStyle />;
    case "overcast clouds":
      return <DarCloudsStyle />;

    default:
      break;
  }
};
function NightStyles(sunset, sunrise, currentDate) {
  return sunset >= currentDate && sunrise <= currentDate ? "" : <NightStyle />;
}

export { BgStyle, NightStyles };
