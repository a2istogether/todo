import React from "react";
import { RxAvatar } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import Dashboard from "./Dashbord";
import WeatherInfo from "./WeatherInfo";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className=" flex flex-col items-center mt-5 justify-center">
      <div>
        <RxAvatar className="text-6xl bg-green-800 rounded-full  text-white " />
      </div>
      <div>
        <h1 className="text-xl font-bold mt-3 ">Hello Arun</h1>
      </div>
      <div>
        <Dashboard/>
        <WeatherInfo/>
        <div> 
         <button onClick={() => dispatch(logout())} className="flex items-center justify-center gap-5 bg-red-500 w-full text-white font-bold text-xl  rounded-lg mt-2 py-1 cursor-pointer">Log Out <FiLogOut/></button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
