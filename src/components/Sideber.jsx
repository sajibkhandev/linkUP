import React, { useState } from "react";
import Profile from "../assets/profile.jpg";
import { IoLogOutOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Sideber = () => {
  let location = useLocation();
  let active = location.pathname.replace("/", "");


  
  






  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-[#5F35F5] rounded-[20px] w-[82%] h-[92%] flex flex-col justify-between items-center py-10">
        <div className="w-20 h-20 ">
          <img className="rounded-full w-full h-full" src={Profile} alt="" />
        </div>
        <div className="">
          <ul className="flex flex-col gap-y-8 ">
            <Link to="/home">
              <li
                className={`relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-7 after:w-[136px] after:h-16 ${active == "home" ? "after:bg-white" : "after:bg-transparent"} after:content-[""] after:rounded-l-xl 
            before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-17.5 before:w-[10px] before:h-16 ${active == "home" ? "before:bg-[#5F35F5]" : "before:bg-transparent"} before:content-[""] before:rounded-l-md before:z-10`}
              >
                <IoHomeOutline
                  className={`text-4xl ${active == "home" ? "text-[#5F35F5]" : "text-white"} relative top-0 left-0 z-10`}
                />
              </li>
            </Link>

           <Link to='/message'>
            <li
              className={`relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-7 after:w-[136px] after:h-16 ${active == "message" ? "after:bg-white" : "after:bg-transparent"} after:content-[""] after:rounded-l-xl 
            before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-17.5 before:w-[10px] before:h-16 ${active == "message" ? "before:bg-[#5F35F5]" : "before:bg-transparent"} before:content-[""] before:rounded-l-md before:z-10`}
            >
              <LuMessageCircleMore
                className={`text-4xl ${active == "message" ? "text-[#5F35F5]" : "text-white"} relative top-0 left-0 z-10`}
              />
            </li>
           </Link>

           <Link to='/notification'>
            <li
              className={`relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-7 after:w-[136px] after:h-16 ${active == "notification" ? "after:bg-white" : "after:bg-transparent"} after:content-[""] after:rounded-l-xl 
            before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-17.5 before:w-[10px] before:h-16 ${active == "notification" ? "before:bg-[#5F35F5]" : "before:bg-transparent"} before:content-[""] before:rounded-l-md before:z-10`}
            >
              <IoMdNotificationsOutline
                className={`text-4xl ${active == "notification" ? "text-[#5F35F5]" : "text-white"} relative top-0 left-0 z-10`}
              />
            </li>
           </Link>

           <Link to='/setting'>
            <li
              className={`relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-7 after:w-[136px] after:h-16 ${active == "setting" ? "after:bg-white" : "after:bg-transparent"} after:content-[""] after:rounded-l-xl 
            before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-17.5 before:w-[10px] before:h-16 ${active == "setting" ? "before:bg-[#5F35F5]" : "before:bg-transparent"} before:content-[""] before:rounded-l-md before:z-10`}
            >
              <CiSettings
                className={`text-4xl ${active == "setting" ? "text-[#5F35F5]" : "text-white"} relative top-0 left-0 z-10`}
              />
            </li>
           </Link>
          </ul>
        </div>
        <div>
          <IoLogOutOutline className="text-[42px] text-white/80" />
        </div>
      </div>
    </div>
  );
};

export default Sideber;
