import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import WeeklyInfo from "../Weekly-info/WeeklyInfo";
import HourlyInfo from "../Hourly-info/HourlyInfo";
import Footer from "../Footer/Footer";
import TodayHighlights from "../Today-hihlights/TodayHighlights";
import React from "react";
import "../../i18next/i18next";

import { useSelector } from "react-redux";

function App() {
  const current = useSelector(({ WeatherData }) => WeatherData.item);
  const citiesSelector = useSelector(({ WeatherCities }) => WeatherCities.item);
  return (
    <>
      <Navbar citiesSelector={citiesSelector} />
      <Header weather={current} />
      <WeeklyInfo current={current} />
      <HourlyInfo />
      <TodayHighlights />
      <div className="clear"></div>
      <Footer />
    </>
  );
}

export default App;
