import React from "react";
import { useState } from "react";
import {
  Collapse,
  Card,
  CardBody
} from "@material-tailwind/react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi"
 
export default function Help() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(cur => !cur);
  const isDarkMode = localStorage.getItem('isDarkMode') === 'true' ? true : false;
 
return (
 
        <>
            <div className="md:w-[517px] justify-between">
                <div className="flex justify-between mx-3 py-4">
                    <p className={`${isDarkMode ? 'text-white' : 'text-blue-500'} font-bold`}>Help</p>
                    <div className="flex justify-center items-center text-[20px] hover:cursor-pointer">
                        {!open ?
                            <FiChevronDown className={`${isDarkMode ? 'text-white' : 'text-gray-400'} `} onClick={toggleOpen}/>
                            :
                            <FiChevronUp className={`${isDarkMode ? 'text-white' : 'text-gray-400'} `} onClick={toggleOpen}/>
                        }
                    </div>
                </div>
                <Collapse open={open}>
                    <Card className={`my-4 w-full ${isDarkMode ? 'bg-[#373c40]' : 'bg-white'} mx-auto`}>
                        <CardBody>
                            <div className="mx-3 mt-2">
                                <div className="font-light">
                                    <p className={`md:text-[12px] ${isDarkMode ? 'text-white' : 'text-black'}`}>
                                        commodo id mollit deserunt elit. Minim mollit ipsum quis ad non voluptate eiusmod. Duis fugiat deserunt consectetur Lorem ex et dolore proident. Lorem sit nostrud deserunt exercitation. Elit eu nisi veniam aute laboris laboris cupidatat est ea officia. Labore consectetur do enim est fugiat non nulla reprehenderit consectetur. Elit elit Lorem ex cillum pariatur adipisicing qui enim elit excepteur laboris cillum dolore. Proident reprehenderit dolor in consequat magna.
                                    </p>                                
                                </div>                            
                            </div>                        
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </>
) }
 