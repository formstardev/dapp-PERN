import React, { Fragment, useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { IoMdRepeat } from 'react-icons/io';
import { RiShareBoxLine } from 'react-icons/ri';
import { AiTwotoneHeart } from 'react-icons/ai';
import { Menu, Transition } from '@headlessui/react';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { RiAttachment2 } from 'react-icons/ri';
// import { Picker } from 'emoji-mart';
// import InputEmoji from 'react-input-emoji'

import {
    Collapse,
    Card,
    CardBody
  } from "@material-tailwind/react";
import EmoticonInput from './pickerInput';

 const ProfileContent = (props) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    const isDarkMode = localStorage.getItem('isDarkMode') === "true" ? true : false;
         //Show the input
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(sh => !sh);
    const toggleOpen = () => setOpen(cur => !cur);
    
        //Choose Newest and Best
    const [activeTab, setActiveTab] = useState('message');
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);}
        
        //Show the emojicons
    const [showPicker, setShowPicker] = useState(false);
    // const [text, setText] = useState('');
    
    const handleEmoticonClick = (emoji) => {
        setText(text + emoji.native);
    };
    
    //
    const [ text, setText ] = useState('')

      function handleOnEnter (text) {
        console.log('enter', text)
      }
    return (
        <>
            <div className={`w-11/12 mx-4 sm:w-full mt-5 min-h-fit py-2 rounded-md ${isDarkMode ? 'bg-[#373C40] border border-white border-opacity-30' : 'bg-white border border-gray-400 border-opacity-50' } `}>
                <div className='' >
                    <div className='flex justify-between'>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className=''>
                                    <figure>
                                        <img src={props.pdata.src} alt='' className='mx-2 my-2'></img>
                                    </figure>
                                </div>
                                <div>
                                    <p className='text-[#3F85E3] sm:text-[14px] text-[12px] my-2'>
                                        {props.pdata.nickname}                                     
                                    </p>
                                    <p className='sm:text-[12px] text-[10px] text-[#C6C6C6] '>
                                        {props.pdata.uploadtime}
                                    </p>
                                </div>
                                <div className='mt-2 mr-1 ml-2'>
                                    <img src="/images/p-effect.png" alt='' className=' h-[26.8px]'></img>
                                </div>
                            </div>
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
                        <div className='sm:w-[517.8px]'>
                            <p className={`sm:text-[14px] text-[9px] mx-5 my-2 font-normal ${isDarkMode ? 'text-[#edeff1]' : 'text-black'} `}>
                                {props.pdata.content} 
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <figure className='w-10/12 z-10 h-0 flex justify-end'>
                                <img src='/images/logo-white.png' alt='' className='w-25 h-6 flex mt-5 justify-end'></img>
                            </figure>
                            <figure className='w-11/12 z-0'>
                                <img className='w-full' src={props.pdata.background_src} alt=''/>                                                 
                            </figure>
                        </div>
                        <div className='sm:mt-5 mt-2 flex justify-between mx-3 gap-2'>
                            <div className='ml-2 flex justify-between hover:cursor-pointer'>
                                <AiTwotoneHeart className='sm:w-6 sm:h-6 w-4 h-4 text-[#3F85E3]'/>
                                <p className={`sm:text-[14px] text-[12px] ${isDarkMode ? 'text-white' : 'text-gray-500' }`}>10 Likes</p>
                            </div>
                            <div 
                                className='flex justify-between hover:cursor-pointer'
                                onClick={toggleOpen}
                            >
                                <FiMessageSquare className={`sm:w-6 sm:h-6 w-4 h-4 ${isDarkMode ? 'text-white' : 'text-gray-500'}`}/>
                                <p className={`sm:text-[14px] text-[12px] ${isDarkMode ? 'text-white' : 'text-gray-500' }`}>5 comments</p>
                            </div>                
                            <div className='flex justify-between hover:cursor-pointer'>
                                <IoMdRepeat className={`sm:w-6 sm:h-6 w-4 h-4 ${isDarkMode ? 'text-white' : 'text-gray-500'}`}/>
                                <p className={`sm:text-[14px] text-[12px] ${isDarkMode ? 'text-white' : 'text-gray-500' }`}>Re-post</p>
                            </div>                
                            <div className='flex justify-between mr-2 hover:cursor-pointer'>
                                <RiShareBoxLine className={`sm:w-6 sm:h-6 w-4 h-4 ${isDarkMode ? 'text-white' : 'text-gray-500'}`}/>
                                <p className={`sm:text-[14px] text-[12px] ${isDarkMode ? 'text-white' : 'text-gray-500' }`}>Share</p>
                            </div>                
                        </div>
                        <Collapse open={open}>
                            <Card className={`sm:w-full w-full my-2 min-h-fit py-2 ${isDarkMode ? 'bg-[#373c40]' : 'bg-white' } rounded-none border-t border-white border-opacity-10`}>
                            <CardBody>
                            <div className="w-full flex flex-row">
                                <div className="w-full flex justify-between">
                                    <div className="z-30 flex-start text-center">                               
                                        <span className="ml-1 font-bold text-[#8D969D] text-[18px]">Comments</span>                                
                                    </div>
                                    <ul
                                    className="relative flex list-none flex-row rounded-xl bg-blue-gray-50/60 p-1"
                                    data-tabs="tabs"
                                    role="list"
                                    >                                    
                                        <li className="z-30 flex-auto text-center">
                                            <span
                                            className={`text-[#FDFDFD] text-[14px] z-30 mb-0 flex w-full cursor-pointer items-center justify-center  bg-inherit px-1 py-1 transition-all ease-in-out ${
                                                activeTab === 'message' ? 'active rounded-none border-b-2 border-blue-400' : ''
                                            }`}
                                            data-tab-target=""
                                            onClick={() => handleTabClick('message')}
                                            role="tab"
                                            aria-selected={activeTab === 'message'}
                                            aria-controls="newest"
                                            >
                                            <span className="ml-1">Newest</span>
                                            </span>
                                        </li>
                                        <li className="z-30 flex-auto text-center">
                                            <span
                                            className={`text-[#FDFDFD] text-[14px] z-30 mb-0 flex w-full cursor-pointer items-center justify-center bg-inherit px-3 py-1 transition-all ease-in-out ${
                                                activeTab === 'settings' ? 'active  rounded-none border-b-2 border-blue-400' : ''
                                            }`}
                                            data-tab-target=""
                                            onClick={() => handleTabClick('settings')}
                                            role="tab"
                                            aria-selected={activeTab === 'settings'}
                                            aria-controls="best"
                                            >
                                            <span className="ml-1">Best</span>
                                            </span>
                                        </li>
                                    </ul>                            
                                </div>                        
                            </div>  
                            <div data-tab-content="" className="p-1">                            
                                    <div
                                        className={` ${activeTab === 'message' ? 'block' : 'hidden'}`}
                                        id="newest"
                                        role="tabpanel"
                                    >
                                        <div className="flex">
                                            <div className="mx-1 my-1">
                                                <figure>
                                                    <img src="/images/human/man-4.png" alt="" className="w-[37px] h-[37px]"/>
                                                </figure>
                                            </div>
                                            <div className="mx-0 my-1 flex flex-grow relative items-center">
                                                
                                                <EmoticonInput showPicker={showPicker}/>
                                                <div className="flex absolute right-3 items-center">
                                                    <span className="text-blue-400 px-1 hover:cursor-pointer hover:text-green-400">Post</span>
                                                    <span className="text-gray-400 px-1 hover:cursor-pointer hover:text-white">
                                                        <FaRegFaceSmile
                                                            onClick={() => setShowPicker(true)}
                                                            onBlur={() => setShowPicker(false)}
                                                        />
                                                    </span>
                                                    <span className="text-gray-400 px-1 hover:cursor-pointer hover:text-white">
                                                        <RiAttachment2 />
                                                    </span>
                                                </div>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div
                                        className={` ${activeTab === 'settings' ? 'block' : 'hidden'}`}
                                        id="best"
                                        role="tabpanel"
                                    >
                                        <div className="flex">
                                            <div className="mx-1 my-1">
                                                <figure>
                                                    <img src="/images/human/man-4.png" alt="" className="w-[37px] h-[37px]"/>
                                                </figure>
                                            </div>
                                            <div className="mx-0 my-1 flex flex-grow relative items-center">
                                                <input 
                                                    type="text" 
                                                    className="rounded-lg bg-[#8D969D] bg-opacity-20 w-full h-[37px] text-white mx-0 px-3"
                                                    placeholder="Add comment"
                                                />
                                                <div className="flex absolute right-3 items-center">
                                                    <span className="text-blue-400 px-1 hover:cursor-pointer hover:text-white">Post</span>
                                                    <span className="text-gray-400 px-1 hover:text-white">
                                                        <FaRegFaceSmile className="hover:cursor-pointer hover:text-white"/>
                                                    </span>
                                                    <span className="text-gray-400 px-1 hover:cursor-pointer hover:text-white">
                                                        <RiAttachment2 className="hover:cursor-pointer hover:text-white"/>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <div>
                                        <div className='flex justify-between w-full'>
                                            <div className=''>
                                                <figure>
                                                    <img src='/images/human/women.png' alt='' className='w-8 h-8 mx-2 my-2'></img>
                                                </figure>
                                            </div>
                                            <div>
                                                <p className='text-[#3F85E3] sm:text-[14px] text-[12px] my-2'>
                                                    {props.pdata.nickname}                                     
                                                </p>
                                                
                                                <p className='sm:text-[12px] text-[10px] text-[#C6C6C6] '>
                                                    Beautiful photo!
                                                </p>
                                                
                                            </div>
                                            <div className='px-2'>
                                                <p className='text-blue-400 sm:text-[14px] text-[12px] my-2'>
                                                    @{props.pdata.nickname}                                     
                                                </p>                                            
                                            </div>
                                            <div className='px-2'>
                                                <p className='sm:text-[12px] text-[10px] text-[#C6C6C6] my-2 '>
                                                    {props.pdata.min} ago
                                                </p>
                                            </div>
                                        </div>
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
                                                        Copy link to comment
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
                                <div className='ml-10 flex flex-start mt-2'>
                                    <p className='px-1 text-gray-400 hover:cursor-pointer text-[12px]'>
                                        2 Likes
                                    </p>
                                    <p className='px-1 text-gray-400 hover:cursor-pointer text-[12px]'>
                                        Reply
                                    </p>
                                    <p className='px-1 text-gray-400 hover:cursor-pointer text-[12px]'>
                                        Share
                                    </p>
                                </div>
                                <div className='w-11/12 ml-10'>
                                    <div className='flex justify-between w-full'>
                                        <div className=''>
                                            <figure>
                                                <img src='/images/human/woman-2.png' alt='' className='w-8 h-8 mx-2 my-2'></img>
                                            </figure>
                                        </div>
                                        <div>
                                            <p className='text-[#3F85E3] sm:text-[14px] text-[12px] my-2'>
                                                {props.pdata.nickname}                                     
                                            </p>
                                            
                                            <p className='sm:text-[12px] text-[10px] text-[#C6C6C6] '>
                                                I can't agree more!
                                            </p>
                                            
                                        </div>
                                        <div className='px-2'>
                                            <p className='text-blue-400 sm:text-[14px] text-[12px] my-2'>
                                                @{props.pdata.nickname}                                     
                                            </p>                                            
                                        </div>
                                        <div className='px-2'>
                                            <p className='sm:text-[12px] text-[10px] text-[#C6C6C6] my-2 '>
                                                {props.pdata.min} ago
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
                                                            Copy link to comment
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
                                    <div className='ml-12 flex flex-start mt-2'>
                                        <p className='px-1 text-gray-400 hover:cursor-pointer text-[12px]'>
                                            2 Likes
                                        </p>
                                        <p className='px-1 text-gray-400 hover:cursor-pointer text-[12px]'
                                           onClick={toggleShow}
                                           >
                                            Reply
                                        </p>
                                        <p className='px-1 text-gray-400 hover:cursor-pointer text-[12px]'>
                                            Share
                                        </p>
                                    </div>
                                    <Collapse open={show}>
                                        <div className="ml-12 mx-0 my-1 flex flex-grow relative items-center">
                                            <input 
                                                placeholder="Add reply"
                                                type="text" 
                                                className="rounded-lg bg-[#8D969D] bg-opacity-20 w-full h-[37px] text-white mx-0 mt-2 px-3"/>
                                            <div className="flex absolute right-3 items-center">
                                                <span className="text-blue-400 px-1 hover:cursor-pointer hover:text-green-400">
                                                    Post
                                                </span>
                                                <span className="text-gray-400 px-1 hover:cursor-pointer hover:text-white">
                                                    <FaRegFaceSmile />
                                                </span>
                                                <span className="text-gray-400 px-1 hover:cursor-pointer hover:text-white">
                                                    <RiAttachment2 />
                                                </span>
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>                                
                            </div>
                            </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                
                </div>
                </>
        
    )
 }
 export default ProfileContent;