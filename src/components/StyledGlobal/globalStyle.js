import { createGlobalStyle } from "styled-components";
import Weather from "../../picture/sunshine.jpg";
import FewSky from "../../picture/few-clouds.jpg";
import darkClouds from "../../picture/banner.jpeg";
import rainFoto from "../../picture/rain.jpg";
import Fog from "../../picture/fog.webp";
import Thunder from "../../picture/thunder.jpg";
import Snow from "../../picture/snow.jpg";
import Night from "../../picture/night.jpg";
const ClearSkyStyle = createGlobalStyle`
.bg{
     background: linear-gradient(180deg, rgba(71, 97, 129, 0.2), rgb(72, 96, 122)),
      url(${Weather}); 
      background-size: cover;
      min-height: 100vh;
      width: 100%;
    
      position: absolute;
      z-index: -11;
      background-position: center;
      animation: kenburns-top 15s ease-in-out infinite;
}
body{
    background: rgba(72, 96, 122, 0.999);
}
`;
const SnowSky = createGlobalStyle`
.bg{
     background: linear-gradient(180deg, rgba(71, 97, 129, 0.2), rgb(72, 96, 122)),
      url(${Snow}); 
      background-size: cover;
      min-height: 100vh;
      width: 100%;
    
      position: absolute;
      z-index: -11;
      background-position: center;
      animation: kenburns-top 15s ease-in-out infinite;
}
body{
    background: rgba(72, 96, 122, 0.999);
}
`;
const FewSkyStyle = createGlobalStyle`
.bg{
     background: linear-gradient(180deg, rgba(71, 97, 129, 0.2), rgb(72, 96, 122)),
      url(${FewSky}); 
      background-size: cover;
      min-height: 100vh;
      width: 100%;
    
      position: absolute;
      z-index: -11;
      background-position: center;
      animation: kenburns-top 15s ease-in-out infinite;
}
body{
    background: rgba(72, 96, 122, 0.999);
}
`;
const DarCloudsStyle = createGlobalStyle`
.bg{
     background: linear-gradient(
        180deg,
        rgba(93, 109, 128, 0.2),
        rgba(47, 57, 68, 1)
      ),
      url(${darkClouds}); 
      background-size: cover;
      min-height: 100vh;
      width: 100%;
    
      position: absolute;
      z-index: -11;
      background-position: center;
      animation: kenburns-top 15s ease-in-out infinite;
}
body{
    background: rgba(47, 57, 68, 0.999);
}
`;
const ThunderStyle = createGlobalStyle`
.bg{
     background: linear-gradient(
        180deg,
        rgba(100, 109, 128, 0.2),
        rgba(47, 57, 68, 1)
      ),
      url(${Thunder}); 
      background-size: cover;
      min-height: 100vh;
      width: 100%;
    
      position: absolute;
      z-index: -11;
      background-position: center;
      animation: kenburns-top 15s ease-in-out infinite;
}
body{
    background: rgba(47, 57, 68, 0.999);
}
`;
const RainStyle = createGlobalStyle`
.bg{
     background: linear-gradient(
        180deg,
        rgba(93, 109, 128, 0.2),
        rgba(47, 57, 68, 1)
      ),
      url(${rainFoto}); 
      background-size: cover;
      min-height: 100vh;
      width: 100%;
    
      position: absolute;
      z-index: -11;
      background-position: center;
      animation: kenburns-top 15s ease-in-out infinite;
}
body{
    background: rgba(47, 57, 68, 0.999);
}
`;
const FogStyle = createGlobalStyle`
.bg{
     background: linear-gradient(
        180deg,
        rgba(93, 109, 128, 0.2),
        rgba(67, 82, 97, 0.999)
      ),
      url(${Fog}); 
      background-size: cover;
      min-height: 100vh;
      width: 100%;
    
      position: absolute;
      z-index: -11;
      background-position: center;
      animation: kenburns-top 15s ease-in-out infinite;
}
body{
    background: rgba(67, 82, 97, 0.999);
}
`;
const NightStyle = createGlobalStyle`
.bg{
     background: linear-gradient(
        180deg,
        rgba(93, 109, 128, 0.2),
        rgba(0, 0, 0, 1)
      ),
      url(${Night}); 
      background-size: cover;
      min-height: 100vh;
      width: 100%;
    
      position: absolute;
      z-index: -11;
      background-position: center;
      animation: kenburns-top 15s ease-in-out infinite;
}
body{
    background: rgba(0, 0, 0, 1);
}
`;

export {
  ClearSkyStyle,
  FewSkyStyle,
  DarCloudsStyle,
  RainStyle,
  FogStyle,
  ThunderStyle,
  SnowSky,
  NightStyle,
};
