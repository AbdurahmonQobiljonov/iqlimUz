import React, { useEffect, useState } from "react";
const useGElocation = () => {
  const [location, setlocation] = useState({
    coordinates: { lat: "", lng: "" },
  });

  const Error = (error) => {
    return error;
  };
  const Succes = (location) => {
    setlocation({
      coordinates: {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      },
    });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(Succes, Error);
  }, []);
  return location;
};
export default useGElocation;
