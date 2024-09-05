import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Hero from "./components/Auth";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

import Sidebar from "./components/Sidebar";
import { ToastContainer } from "react-toastify";
import WeatherInfo from "./components/WeatherInfo";

const App = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { isDarkMode, isMenuOpen} = useSelector(
    (state) => state.constant
  );

  useEffect(()=>{
    if (isDarkMode) {
   document.body.classList.add('dark') ;     
    }else{
      document.body.classList.remove('dark') ;     
       }
  },[isDarkMode])
   
  return (
    <>
    <div className=" dark:bg-black min-h-screen ">
      <Header />
      {isAuthenticated ? (
        <div className="md:flex px-3">
          {<div className={`w-[300px] md:w-[250px] overflow-hidden pb-5 fixed top-12 mt-2 bottom-0 max-h-screen  z-[999] px-5 bg-green-200 dark:bg-green-300 duration-300 ease-in-out transition-all ${isMenuOpen?"-left-[0%]":"-left-[100%]"} md:-left-0`}>
            <Sidebar/>
          </div>}
          <div className="flex flex-col mt-2 mx-auto gap-3">
            <TaskInput />
            <TaskList />
          </div>
          <div className={`w-[300px] md:w-[250px] overflow-hidden fixed top-13 hidden md:block right-0 h-screen  z-[999] px-5 bg-green-200 dark:bg-green-300 duration-300 ease-in-out transition-all`}>
            <WeatherInfo/>
          </div>
        </div>
      ) : (
        <Hero />
      )}
    </div>
    <ToastContainer autoClose={2000} theme={isDarkMode?'dark':'light'} stacked />
    </>
  );
};

export default App;
