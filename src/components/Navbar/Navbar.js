import React, { useState, useEffect } from "react";
import Weather from "../../picture/weather.png";
import ItemNabar from "./ItemNabar";
import { setDatas, setCities } from "../Redux/Action/action";
import { useDispatch } from "react-redux";
import Language from "./Language";
import Apies from "../ApiWeather/Api-Daily";

const Navbar = ({ citiesSelector }) => {
  const [navSize, setnavSize] = useState("4rem");
  const [navColor, setnavColor] = useState("transparent");
  const [drop, setDrop] = useState("none");
  const [country, setCountry] = useState("618a09fe271494d9b7f0c5bf");
  const [navMenu, setNavMenu] = useState(false);

  const dispatch = useDispatch();

  const listenScrollEvent = () => {
    window.scrollY > 0
      ? setnavColor("rgba(10, 102, 155,0.4)")
      : setnavColor("transparent");
    window.scrollY > 0 ? setnavSize("3.5rem") : setnavSize("4rem");
    window.scrollY > 0 ? setDrop("blur(9px)") : setDrop("none");
  };
  useEffect(async () => {
    const response = await new Apies().getCity(country);
    dispatch(setDatas(response.data.data[0]));
    const { data } = await new Apies().getCitiesId();
    dispatch(setCities(data.data));

    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [country]);
  const onclickLinks = (id) => {
    setCountry(id);
    setNavMenu(() => !navMenu);
  };
  console.log(citiesSelector);

  if (!citiesSelector) return null;
  return (
    <nav id="navbar-box">
      <div
        className="navbar-header"
        style={{
          backgroundColor: navColor,
          height: navSize,
          backdropFilter: drop,
          transition: "0.1",
        }}
      >
        <i
          className={navMenu ? "fas fa-times" : "fas fa-bars"}
          onClick={() => setNavMenu(() => !navMenu)}
        ></i>
        <h1 className="navbar-brand">
          <img src={Weather} className="navbar-header_img" alt="" />
          <span className="navabr-title"> Iqlim</span>
        </h1>
        <div className="navbar-select">
          <div className={navMenu ? "select active_menu" : "select"}>
            <ul>
              <ItemNabar
                onclickLinks={onclickLinks}
                citiesSelector={citiesSelector}
              />
            </ul>
          </div>
        </div>
        <Language />
      </div>
    </nav>
  );
};

export default Navbar;
