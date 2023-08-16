import React from "react";
import { useState, useRef } from "react";
import {
  Collapse,
  Card,
  CardBody
} from "@material-tailwind/react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi"
import { FiEdit2, FiCheck } from "react-icons/fi";
  
export default function Account() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(cur => !cur);
  const [infoShow, setInfoShow] = useState('block');
  const [inputShow, setInputShow] = useState('hidden');
  const [selectedItem, setSelectedItem] = useState(null);
  const nameRef = useRef(null);
  const handleSubmitInfo = (item) => {
    setInfoShow('hidden')
    setInputShow('block')
    setSelectedItem(item);
  };
  const handleSaveInfo = () => {
    setInfoShow('block')
    setInputShow('hidden')
    setSelectedItem(null);
  };



  const [name,setName] = useState('@Alice10');
  const [phoneNumber, setPhoneNumber] = useState('+1 657-254-7496');
  const [email, setEmail] = useState('abandonraj@gmail.com');
  const [password, setPassword] = useState('123456');
  const isDarkMode = localStorage.getItem('isDarkMode') === 'true' ? true : false;


  /**User information */
  let userInfo = {
                    name:name,
                    phone_number:phoneNumber,
                    email:email,
                    password:password,                    
                }
 
  return (
 
    <>
      <div className="md:w-[517px] justify-between">
        <div className="flex justify-between mx-3 py-4">
          <p className={`${isDarkMode ? 'text-white' : 'text-blue-500'} font-bold`}>Account</p>
          <div className="flex justify-center items-center text-[20px] hover:cursor-pointer">
            {!open ?
            <FiChevronDown className={`${isDarkMode ? 'text-white' : 'text-gray-400'} `} onClick={toggleOpen}/>
            :
            <FiChevronUp className={`${isDarkMode ? 'text-white' : 'text-gray-400'} `} onClick={toggleOpen}/>
            }
          </div>
        </div>
        <Collapse open={open}>
          <Card className={`w-full ${isDarkMode ? 'bg-[#373c40]' : 'bg-white'} mx-auto`}>
            <CardBody>
              <div className="mx-3 mt-2 flex justify-between">
                <div className="font-bold">
                  <p className={`md:text-[12px] ${isDarkMode ? 'text-[#6C6C6C]' : 'text-black'}`}>Username</p>
                  <p className={`${selectedItem === 'name' ? infoShow : 'block'} md:text-[15px] ${isDarkMode ? 'text-white' : 'text-black'} py-2`}>{userInfo.name}</p>
                  <input
                    className={`${selectedItem === 'name' ? inputShow : 'hidden'} ${isDarkMode ? 'bg-gray-700 text-white' : ' bg-gray-400 text-black'} bg-opacity-20 font-medium border border-white border-opacity-10 rounded-md mt-2 focus:outline-none`}
                    type="text"
                    ref={nameRef}
                    value={userInfo.name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                    required                    
                  >
                  </input>
                </div>
                <div className="md:text-[14px] text-[#6C6C6C] flex justify-center items-center">
                  {infoShow === 'hidden' && selectedItem === 'name' ?
                    <FiCheck
                      className={`hover:cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-400'} text-[22px]`}
                      onClick={handleSaveInfo}
                    />
                    :                    
                    <FiEdit2 
                      className={`hover:cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-400'} text-[18px]`}
                      onClick={() => handleSubmitInfo('name')}
                    />
                  }
                </div>
              </div>
              <div className="mx-3 mt-3 flex justify-between">
                <div className="font-bold">
                  <p className={`md:text-[12px] ${isDarkMode ? 'text-[#6C6C6C]' : 'text-black'}`}>Phone</p>
                  <p className={`${selectedItem === 'phone_number' ? infoShow : 'block'} py-2 md:text-[15px] ${isDarkMode ? 'text-white' : 'text-black'}`}>{userInfo.phone_number}</p>
                  <input
                    className={`${selectedItem === 'phone_number' ? inputShow : 'hidden'} ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-400 text-black'} bg-opacity-20 font-medium border border-white border-opacity-10 rounded-md mt-2 focus:outline-none`}
                    type="text"
                    ref={nameRef}
                    value={userInfo.phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  >
                  </input>
                </div>
                <div className="md:text-[14px] text-[#6C6C6C] flex justify-center items-center">
                  {infoShow === 'hidden' && selectedItem === 'phone_number' ?
                    <FiCheck
                      className={`hover:cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-400'} text-[22px]`}
                      onClick={handleSaveInfo}
                    />
                    :
                    
                    <FiEdit2 
                      className={`hover:cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-400'} text-[18px]`}
                      onClick={() => handleSubmitInfo('phone_number')}
                    />
                  }
                </div>
              </div>
              <div className="mx-3 mt-2 flex justify-between py-2">
                <div className="font-bold">
                  <p className={`md:text-[12px] ${isDarkMode ? 'text-[#6C6C6C]' : 'text-black'}`}>Email</p>
                  <p className={`${selectedItem === 'email' ? infoShow : 'block'} py-2 md:text-[15px] py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{userInfo.email}</p>
                  <input
                    className={`${selectedItem === 'email' ? inputShow : 'hidden'} bg-gray-700 bg-opacity-20 font-light border border-white border-opacity-10 rounded-md mt-2 focus:outline-none`}
                    type="text"
                    ref={nameRef}
                    value={userInfo.email}
                    onChange={(e) => setEmail(e.target.value)}
                  >
                  </input>
                </div>
                <div className="md:text-[14px] text-[#6C6C6C] flex justify-center items-center">
                  {infoShow === 'hidden' && selectedItem === 'email'?
                    <FiCheck
                    className={`hover:cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-400'} text-[22px]`}
                    onClick={handleSaveInfo}
                    />
                    :                    
                    <FiEdit2 
                      className={`hover:cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-400'} text-[18px]`}
                      onClick={() => handleSubmitInfo('email')}
                    />
                  }
                </div>
              </div>
              <div className="mx-3 mt-2 mb-4 flex justify-between py-2">
                <div className="font-bold">
                  <p className={`md:text-[12px] ${isDarkMode ? 'text-[#6C6C6C]' : 'text-black'}`}>Password</p>
                  <p className={`${selectedItem === 'password'? infoShow : 'block'} py-2 md:text-[15px] ${isDarkMode ? 'text-white' : 'text-black'}`}>*********</p>
                  <input
                    className={`${selectedItem === 'password' ? inputShow : 'hidden'} bg-gray-700 bg-opacity-20 font-light text-white border border-white border-opacity-10 rounded-md mt-2 focus:outline-none`}
                    type="password"
                    ref={nameRef}
                    value={userInfo.password}
                    onChange={(e) => setPassword(e.target.value)}
                  >
                  </input>
                </div>
                <div className="md:text-[14px] text-[#6C6C6C] flex justify-center items-center">
                  {infoShow === 'hidden' && selectedItem === 'password'?
                    <FiCheck
                      className={`hover:cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-400'} text-[22px]`}
                      onClick={handleSaveInfo}
                    />
                    :                    
                    <FiEdit2 
                      className={`hover:cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-400'} text-[18px]`}
                      onClick={() => handleSubmitInfo('password')}
                    />
                  }
                </div>                
              </div>
            <p className="font-bold text-white mx-3 mt-2 text-[14px]">Security</p>
            <p className="font-bold text-white mx-3 mt-2 text-[14px]">Deactivate your Account</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </>
  );
}