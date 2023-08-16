import React from "react";
import { useHistory } from "react-router-dom"
import { FiMail, FiPlusCircle } from "react-icons/fi";

const SimpleProfileComponent = () => {
    const isDarkMode = localStorage.getItem('isDarkMode') === "true" ? true : false;
    const history = useHistory();
    return (
        <>
            <div className="sm:w-full flex flex-col items-center justify-center">
                <div className="mt-2 sm:w-full w-full ">
                    <figure className="sm:w-full w-full">
                        <img src="/images/profile/photography.png" alt="" className="w-full"></img>
                    </figure>
                </div>
                <div className="mt-2 w-full flex justify-between mx-2 ">
                    <div className="flex ">
                        <div className="my-2">
                            <figure className="sm:block hidden">
                                <img className="mx-1 my-1 w-20 h-20" src="/images/human/man-4.png" alt=""></img>
                            </figure>
                        </div>
                        <div className="ml-3">
                            <p className={`${isDarkMode ? 'text-white' : 'text-blue-500'} font-bold sm:text-[24px] text-[20px]`}>Matthew Smith</p>
                            <p className="mt-1 text-[#8d969d] text-light sm:text-[14px] text-[12px]">Photographer</p>
                            <p className="text-[#8d969d] text-light sm:text-[18px] text-[14px]">@matt.smith</p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow">
                        <div className="flex justify-between mx-7">
                            <div className="flex flex-col justify-center items-center">
                                <p className={`${isDarkMode ? 'text-white' : 'text-blue-700'} md:text-[20px] text-[16px] font-medium`}>56</p>
                                <p className={`${isDarkMode ? 'text-white' : 'text-blue-700'} md:text-[12px] text-[10px] font-light`}>Speaks</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className={`${isDarkMode ? 'text-white' : 'text-blue-700'} md:text-[20px] text-[16px] font-medium`}>1,136</p>
                                <p className={`${isDarkMode ? 'text-white' : 'text-blue-700'} md:text-[12px] text-[10px] font-light`}>Followers</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className={`${isDarkMode ? 'text-white' : 'text-blue-700'} md:text-[20px] text-[16px] font-medium`}>123</p>
                                <p className={`${isDarkMode ? 'text-white' : 'text-blue-700'} md:text-[12px] text-[10px] font-light`}>Following</p>
                            </div>
                        </div>
                        <div className="flex relative my-3 justify-end items-center">
                            <button 
                                className="rounded-md md:px-5 md:py-2 px-3 py-1 bg-blue-500 text-white text-[14px] flex items-center justify-center"
                                onClick={() =>history.push('/message')}
                            >
                                <FiMail className="mx-2 text-white sm:text-[16px] text-[14px]"/>
                                Message
                                <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                                    3
                                </span>
                            </button>
                            <button className="mx-3 rounded-md md:px-5 md:py-2 px-3 py-1 bg-blue-500 text-white text-[14px] flex items-center justify-center">
                                <FiPlusCircle className="mx-2 text-white sm:text-[16px] text-[14px]"/>
                                Follow
                            </button>
                        </div>
                    </div>                   
                </div>
                <p className={`${isDarkMode ? 'text-white' : 'text-black'} my-3 md:text-[14px] text-[12px] flex justify-center items-center`}>
                    Hi, my name is Matt and I am a photographer from Toronto specializing in nature photography. Check out my portfolio at mattsmithphoto.com!
                </p>
            </div>
        </>
    )
} 
export default SimpleProfileComponent;