import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiGroup } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";

const Footer = () => {
    const history = useHistory(); 
    const [activeIndex, setActiveIndex] = useState(null);
    const [index, setIndex] = useState();
    
    useEffect(() => {
      setActiveIndex(index);  
    }, [index]);
  
    const handleClick = (index) => {
      setActiveIndex(index);
      setIndex(index);
    };
  
    const getIconColor = (index) => {
      if (activeIndex === index) {
        return "#3f85e3";       
      }
      return "white";   
    };
  

  return (
    <>
      <div className="flex justify-between bg-[#262D2E]">
        <div
          className="w-1/6 text-white min-h-fit px-1 flex items-center justify-center"
          onClick={() => {
            handleClick(0);
            history.push("/home");
          }}
        >
          <AiOutlineHome
            className={`text-[25px] ${
              activeIndex === 0 ? `text-[${getIconColor(0)}]` : ""
            }`}
          />
        </div>
        <div
          className="w-1/6 text-white min-h-fit py-1 px-1 flex items-center justify-center"
          onClick={() => {
            handleClick(1);
            history.push("/message");
          }}
        >
          <AiOutlineMail
            className={`text-[25px] ${
              activeIndex === 1 ? `text-[${getIconColor(1)}]` : ""
            }`}
          />
        </div>
        <div className="w-2/6 min-h-fit flex justify-center py-1 px-1">
          <button
            className="bg-[#3f85e3] w-10/12 flex flex-col justify-center items-center mt-[1px] hover:bg-blue-500 text-white font-medium text-[16px] font-semibold hover:text-white py-2 border hover:bg-[#497DBE] sm:hover:bg-[#497DBE] border-blue-500 hover:border-transparent active:cursor-none rounded-lg"
            type="button"
          >
            <img src="/images/mic.png" className="" alt="" />
          </button>
        </div>
        <div
          className="w-1/6 text-white min-h-fit py-1 px-1 flex items-center justify-center"
          onClick={() => {
            handleClick(2);
            history.push("/group");
          }}
        >
          <BiGroup
            className={`text-[25px] ${
              activeIndex === 2 ? `text-[${getIconColor(2)}]` : ""
            }`}
          />
        </div>
        <div
          className="w-1/6 text-white min-h-fit py-1 px-1 flex items-center justify-center"
          onClick={() => {
            handleClick(3);
            history.push("/notification");
          }}
        >
          <MdOutlineNotificationsActive
            className={`text-[25px] ${
              activeIndex === 3 ? `text-[${getIconColor(3)}]` : ""
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;