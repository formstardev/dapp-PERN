import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

const NotificationComponent = (props) => {
  const isDarkMode = localStorage.getItem('isDarkMode') === "true" ? true : false;
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
    return (
        <>
          <div className={`mt-4 ${isDarkMode ? 'bg-[#373c40]' : 'bg-white'}  min-h-fit py-2 sm:w-full w-full rounded-md border border-white border-opacity-10 w-11/12`}>
                <div className="flex mx-2">
                    <div className="mx-2 my-2">
                        <figure>
                            <img src={props.mdata.photo_src} alt="" className=""></img>
                        </figure>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-start">
                            <p className={`sm:text-[16px] ${isDarkMode ? 'text-white' : 'text-black'}  font-medium`}>{props.mdata.name}</p>
                            
                        </div>
                        <div className="my-4 flex float-left">
                            <p className={`${isDarkMode ? 'text-white' : 'text-black'}  text-[12px]`}>{props.mdata.mcontent}</p>
                        </div>
                    </div>                    
                    <div className="mx-2 my-2 flex-grow">
                        <p className="text-[#bebebe] text-[12px] font-normal float-right">
                            {props.mdata.time}
                        </p>
                    </div>
                    <div className="ml-4 md:ml-6  my-[10px]">
                            {/* Profile dropdown */}
                    <Menu as="div" className="float-right">
                        {({ open }) => (
                        <>
                        <div className="">
                            <Menu.Button className=" max-w-xs flex items-center text-sm lg:rounded-full mx-4 lg:hover:bg-opacity-70">
                                <img
                                className="h-1 w-4"
                                src="/images/dots.png"
                                alt=""
                                ></img>
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
                                className=" absolute mt-2 w-[76px] z-20 rounded-md text-white bg-[#8d969d] shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="/"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-3 py-1 text-[12px] border-b border-white border-opacity-20'
                                    )}
                                    >
                                    Report
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="/"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-3 py-1 text-[12px] border-b border-white border-opacity-20'
                                    )}
                                    >
                                    See less
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="/"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-3 py-1 text-[12px] '
                                    )}
                                    >
                                    See more
                                    </a>
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
        </>
    )
}
export default NotificationComponent;