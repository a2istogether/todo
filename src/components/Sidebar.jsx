import React from "react";
import { RxAvatar } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import Dashboard from "./Dashbord";
import WeatherInfo from "./WeatherInfo";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Sidebar = () => {
  
  return (
    <div className=" flex flex-col items-center mt-8 justify-center">
      <div>
        <RxAvatar className="text-6xl bg-green-800 rounded-full  text-white " />
      </div>
      <div>
        <h1 className="text-xl font-bold mt-3 ">Hello </h1>
      </div>
      <div>
        <Dashboard/>
        <div className="md:hidden">
        <WeatherInfo/>
        </div>
        <div> 
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
