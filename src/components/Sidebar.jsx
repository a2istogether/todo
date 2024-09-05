import React from "react";
import { RxAvatar } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import Dashboard from "./Dashbord";
import WeatherInfo from "./WeatherInfo";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Sidebar = () => {
  const dispatch = useDispatch();

  const authInfoFromLocalStorage = () => {
    const authInfo = localStorage.getItem("auth");
    return authInfo ? JSON.parse(authInfo) : {};
  };
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
  return (
    <div className=" flex flex-col items-center mt-5 justify-center">
      <div>
        <RxAvatar className="text-6xl bg-green-800 rounded-full  text-white " />
      </div>
      <div>
        <h1 className="text-xl font-bold mt-3 ">Hello </h1>
      </div>
      <div>
        <Dashboard/>
        <WeatherInfo/>
        <div> 
         <button onClick={handleLogout} className="flex items-center justify-center gap-5 bg-red-500 w-full text-white font-bold text-xl  rounded-lg mt-2 py-1 cursor-pointer">Log Out <FiLogOut/></button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
