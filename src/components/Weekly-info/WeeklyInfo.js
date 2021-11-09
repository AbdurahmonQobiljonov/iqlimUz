import React from "react";
import WeeklyMain from "./WeeklyMain";
const WeeklyInfo = ({ current }) => {
  if (!current) return null;
  return (
    <div className="container">
      <WeeklyMain weeklyItem={current} />
    </div>
  );
};

export default WeeklyInfo;
