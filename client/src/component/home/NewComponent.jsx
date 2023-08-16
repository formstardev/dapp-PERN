import React, { useState } from "react";
import { FiMessageSquare } from 'react-icons/fi';
import { IoMdRepeat } from 'react-icons/io';
import { RiShareBoxLine } from 'react-icons/ri';
import { AiTwotoneHeart } from 'react-icons/ai';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { RiAttachment2 } from 'react-icons/ri';
import {
    Collapse,
    Card,
    CardBody
  } from "@material-tailwind/react";

const NewComponent = (props) => {
    const isDarkMode = localStorage.getItem('isDarkMode') === "true" ? true : false;
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(cur => !cur);
    const [activeTab, setActiveTab] = useState('message');
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);}
    return (
        <div className="sm:w-full w-11/12 mx-4">
            <div className={`sm:w-full w-full min-h-fit py-2 ${isDarkMode ? 'bg-[#373c40] border border-white border-opacity-10' : 'bg-white border border-gray-400 border-opacity-50' } rounded-md `}>
                <div className="sm:mx-4 sm:my-4 mx-2 my-2 flex justify-between">
                    <figure>
                        <img src={props.ndata.src} alt="" className="rounded-md sm:w-[125px] sm:h-[103px] w-full"></img>
                    </figure>
                    <div className="sm:w-[367.69px] w-full mx-4 flex flex-col">
                        <div className="flex float-left items-center">
                            <p className={`${isDarkMode ? 'text-[#edeff1]' : 'text-black'} sm:text-[14px] text-[10px] font-[medium]`}>{props.ndata.title}</p>
                        </div>
                        <div className="flex float-left items-center">
                            <p className="text-gray-700 sm:text-[12px] text-[8px] text-opacity-60 font-normal">{props.ndata.time}</p>
                        </div>
                        <div className="flex float-left items-center">
                            <p className={`sm:text-[14px] text-[9px] font-normal ${isDarkMode ? 'text-[#edeff1]' : 'text-black'} py-1`}>{props.ndata.content}</p>
                        </div>
                    </div>                
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
                                        <input 
                                            placeholder="Add comment"
                                            type="text" 
                                            className="rounded-lg bg-[#8D969D] bg-opacity-20 w-full h-[37px] text-white mx-0 px-3"/>
                                        <div className="flex absolute right-3 items-center">
                                            <span className="text-blue-400 px-1 hover:cursor-pointer hover:text-green-400">Post</span>
                                            <span className="text-gray-400 px-1 hover:cursor-pointer hover:text-white">
                                                <FaRegFaceSmile />
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
                        
                    </div>
                    
                    </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>
    )
}
export default NewComponent;