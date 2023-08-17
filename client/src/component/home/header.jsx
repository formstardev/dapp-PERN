import React from "react";
import { FaSearch } from "react-icons/fa";
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { FaBars } from 'react-icons/fa';
import { Switch } from "@material-tailwind/react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

//import usecontext
import { useUserContext } from "../../utility/context/useContext";


// Drawer
import {
    List,
    ListItem,   
    Card,
    Badge
  } from "@material-tailwind/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  

const Header = ({isDarkMode, toggleDarkMode}) => {
   
    const [open, setOpen] = React.useState(false);
    const { userData } = useUserContext();
    const openNav = () => {
        document.getElementById("sidenav").style.width = "250px";
      };
    
      const closeNav = () => {
        document.getElementById("sidenav").style.width = "0";
      };
    // };
      console.log("ssssssssssssssss", userData)

    //Clear localstorage
    const clearLocalStorage = () => {
        localStorage.clear();
        // You might want to perform additional actions after clearing local storage
        // For example, you can trigger a page reload to reflect the changes.
      };



    return (
        <div className={`${isDarkMode ? 'bg-[#212529]' : 'bg-[#3D5B81]'}   border-b-2 border-gray-100 border-opacity-10`}>
            <div className="flex justify-between items-center mx-2">
                <div className="flex flex-col sm:block hidden justify-center items-center">
                    <figure>
                        <img className="" src="/images/light.png" alt=""></img>
                    </figure>
                </div>
                <div className="rounded-lg w-full sm:w-[550px]">
                    <div className="w-full flex md:ml-0" >
                        <label htmlFor="search_field" className="sr-only">
                            Search
                        </label>
                        <button className={`${isDarkMode? 'text-gray-400' : 'text-white'} mx-2 sm:hidden block`}>
                            <FaBars className="w-6 h-6" onClick={openNav}/>
                        </button>
                        <div className="rounded-3xl mt-0 bg-[#212529] w-0 sidenav h-auto bottom-20 fixed top-5 left-0 z-50 overflow-x-hidden transition-all duration-500 ease-in-out pt-60 sm:pt-15 shadow-xl" id="sidenav">
                            <Card className="bg-[#373C40] w-full h-1/3 absolute top-0 shadow-md">
                                <div className="">
                                    <span 
                                        className="text-white text-4xl mt-4 absolute top-0 right-5"
                                        onClick={closeNav}
                                    >&times;
                                    </span> 
                                </div>
                                <figure className="flex items-center justify-center">
                                    <img className="mt-16 rounded-full w-20 h-20 border border-white border-4 shadow-lg" src="/images/human/man-4.png" alt=""></img>
                                </figure>
                                <div className="flex items-center justify-center mt-2">
                                    <p className="font-bold text-white text-[24px]">{userData?.username}</p>
                                </div>
                                <div className="flex items-center justify-center mt-1">
                                    <p className="font-medium text-blue-500 text-[14px]">@matt.smith</p>
                                </div>
                                <div className="mx-4 mt-2 border-b border-1 border-gray-400"></div>
                                <div className="flex items-center justify-center mt-1">
                                    <p className="px-1 text-blue-500 text-[14px]">1,136</p>
                                    <p className="text-white text-[14px]"> followers</p>
                                    <p className="px-1 text-blue-500 text-[14px]">123</p>
                                    <p className="text-white text-[14px]"> following</p>
                                </div>
                            </Card>
                            <div className="border-b border-1 border-gray-500 mx-4 pt-5">
                                <List>
                                    <ListItem className="text-white font-[14px] py-2">
                                        Profile
                                    </ListItem>
                                    <ListItem className="text-white font-[14px] py-2 flex justify-between">
                                        <p>Dark Mode</p>                            
                                        <div className="flex justify-center items-center">
                                            <Switch />
                                        </div>
                                    </ListItem>
                                    <ListItem className="text-white font-[14px] py-2">
                                        Settings
                                    </ListItem>
                                </List>
                            </div>
                            <div className="border-b border-1 border-gray-500 mx-4 pt-5">
                                <List>
                                    <ListItem className="text-white font-[14px] py-2">
                                        About
                                    </ListItem>
                                    <ListItem className="text-white font-[14px] py-2 flex justify-between">
                                        <p>Favourites</p>                            
                                        <Badge content='5' color="blue" placement="top-end"/>
                                    </ListItem>
                                    <ListItem className="text-white font-[14px] py-2">
                                        Terms of Service
                                    </ListItem>
                                    <ListItem className="text-white font-[14px] py-2">
                                        Help
                                    </ListItem>
                                </List>
                            </div>
                            <div className="border-b border-1 border-gray-500 mx-4 py-5">
                                <List>
                                    <ListItem className="text-white font-[14px] py-2">
                                        Log Out
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                        <div className="relative w-full  focus-within:text-gray-600">
                            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                                <FaSearch className={`${isDarkMode ? 'text-[#8D969D]': 'text-white'} mx-[5px] h-5 w-5`} aria-hidden="true" />
                            </div>
                            <input
                                id="search_field"
                                name="search_field"
                                className={`block ${isDarkMode ? 'bg-[#8D969D] text-[#8d969d] placeholder-gray-500' : 'bg-[#8D969D] bg-opacity-20 placeholder-white'} bg-opacity-20 sm:rounded-lg rounded-full sm:w-full w-10/12  h-full pl-8 pr-3 py-2 border-transparent text-[#8D969D]  focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"`}
                                placeholder="Search Presser"
                                type="search"
                            />
                        </div>                        
                    </div>
                </div>
                <div className="ml-3">
                    <button id="theme-toggle" 
                        onClick={toggleDarkMode} 
                        type="button"
                        className={`${isDarkMode ? 'text-gray-300 border-gray-300' : 'text-gray-800 border-gray-500'} border-2 rounded-lg text-sm p-0`}>
                            <svg id="theme-toggle-dark-icon"
                                className={`${isDarkMode ? 'hidden' : ''} md:w-5 md:h-5 w-3 h-3`} fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg id="theme-toggle-light-icon"
                                className={`${isDarkMode ? '' : 'hidden'} md:w-5 md:h-5 w-3 h-3`} fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fillRule="evenodd" clipRule="evenodd">
                                </path>
                            </svg>
                    </button>
                    </div>
                <div className={`${isDarkMode ? 'bg-[#373C40]' : 'bg-[#3D5B81] bg-opacity-20'} ml-4 md:ml-6 rounded-full my-[10px] md:w-[190px] `}>
                    {/* Profile dropdown */}
                    <Menu as="div" className=" relative rounded-full">
                        {({ open }) => (
                        <>
                          <div className="">
                            <Menu.Button className={`min-w-xs ${isDarkMode ? 'bg-[#373C40]' : 'bg-[#3D5B81] bg-opacity-20'} flex rounded-full items-center text-sm lg:p-2 lg:rounded-full lg:hover:bg-opacity-70`}>
                                <img
                                className="h-10 w-12 sm:h-12 sm:w-12 rounded-full border border-[2px] border-[#3f85e3] "
                                src="/images/human/men-photo.png"
                                alt=""
                                />
                                <span className="hidden ml-3 text-sm font-medium lg:block">
                                    <p className="text-white">{userData?.username}</p>                                   
                                    <p className="text-sm text-[#3F85E3]">@matt.smith</p>
                                </span>
                                
                                <ChevronDownIcon
                                    className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                            </div>
                            <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items
                                static
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to='/profile'
                                            className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                            )}
                                        >
                                            Your Profile
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to='/setting'
                                            className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                            )}
                                        >
                                            Settings
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to='/onboarding'
                                            className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                            )}
                                            onClick={clearLocalStorage}
                                        >
                                            Logout
                                        </Link>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                            </Transition>
                        </>
                        )}
                    </Menu>
                    </div>
                </div>
        </div>
    )
}
export default Header;