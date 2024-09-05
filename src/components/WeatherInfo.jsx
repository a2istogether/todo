import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const WeatherInfo = () => {
  const [weather, setWeather] = useState("");
  const [city, setcity] = useState("");
  const dispatch = useDispatch();

  const authInfoFromLocalStorage = () => {
    const authInfo = localStorage.getItem("auth");
    return authInfo ? JSON.parse(authInfo) : {};
  };

  const API_KEY = '35602899f05a458494134733240509';


  useEffect(() => {
    const userInfo = authInfoFromLocalStorage();
    setcity(userInfo.city.toLowerCase());
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
        );
        setWeather(response.data.current);
      } catch (error) {
        toast.error(error);
      }
    };
    
    fetchWeather();
  }, [city]);
  
  
  const saveAuthInfoToLocalStorage = () => {
    const {
      email,
      password,
      city,
      isRemember
    } = authInfoFromLocalStorage();
    const info = {
      email,
      password,
      city,
      isRemember : false
    };
    localStorage.setItem("auth", JSON.stringify(info));
  };
  const handleLogout = ()=>{
    toast.success('Logout Successfully');
    dispatch(logout());
    saveAuthInfoToLocalStorage();
  }
  const handleDelete = ()=>{
    toast.success('Account Deleted Successfully');
    dispatch(logout());
    localStorage.removeItem("auth");
    localStorage.removeItem('tasks');
  }

  return (
    <>
      {weather ?<div className="cardContainer  w-full mt-3 dark:border border-black rounded-xl">
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
      <div className="md:fixed md:w-[215px] md:bottom-2 ">
      <button onClick={handleLogout} className="flex items-center justify-center gap-5 bg-red-500 hover:bg-red-600 transition-all duration-150 ease-in active:scale-95 w-full text-white font-bold text-xl  rounded-lg mt-2 py-1 cursor-pointer">Log Out <FiLogOut/></button>
      <button onClick={handleDelete} className="flex items-center justify-center gap-5 bg-red-500 hover:bg-red-600 transition-all duration-150 ease-in active:scale-95 w-full text-white font-bold text-xl  rounded-lg mt-2 py-1 cursor-pointer">Delete <RiDeleteBin6Line/></button>
      </div>
    </>
  );
};

export default WeatherInfo;
