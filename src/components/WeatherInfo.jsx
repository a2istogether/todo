import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


const WeatherInfo = () => {
  const [weather, setWeather] = useState("");
  const [city, setcity] = useState("");
  
  const authInfoFromLocalStorage = () => {
    const authInfo = localStorage.getItem("auth");
    return authInfo ? JSON.parse(authInfo) : {};
  };
  
  useEffect(() => {
    const userInfo = authInfoFromLocalStorage();
    setcity(userInfo.city.toLowerCase());
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=35602899f05a458494134733240509&q=${city}`
        );
        setWeather(response.data.current);
      } catch (error) {
        toast.error(error);
      }
    };
    
    fetchWeather();
  }, [city]);
  

  return (
    <>
      {weather ?<div className="cardContainer w-full mt-3 dark:border border-black rounded-xl">
        <div className="card">
          <p className="city capitalize">{city}</p>
          <p className="weather">{weather.condition.text}</p>

          <img
            className="weather"
            width="80px"
            height="80px"
            src={weather.condition.icon}
            alt="weather"
          />

          <p className="temp">{weather.temp_c}°C</p>
        </div>
      </div>:''}
    </>
  );
};

export default WeatherInfo;
