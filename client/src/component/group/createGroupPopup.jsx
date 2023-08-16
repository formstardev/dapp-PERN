import React, { useState, useRef } from "react";
import { XIcon, PhotographIcon } from '@heroicons/react/outline';

const CreateGroupModal = (props) => {
    const { isOpen, setIsOpen } = props;
    const [previewUrl, setPreviewUrl] = useState("http://placehold.it/180");
    const fileInputRef = useRef();
    const [name, setName ] = useState('');
    const [privacy, setPrivacy] = useState('');
    const currentDate = new Date().toLocaleDateString;
    const isDarkMode = localStorage.getItem('isDarkMode') === "true" ? true : false;
    const newGroup = {group_name:'', group_logo:'', update_time:'' ,privacy:''};


    const handleButtonClick = () => {
        fileInputRef.current.click();
      };
    
      /**Preview Grouplogo icon */
    
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = () => {
         setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };
    /**Save new Group data */
    const saveGroupData = () => {
        newGroup.group_name = name;
        newGroup.group_logo = previewUrl; 
        newGroup.update_time = currentDate;
        newGroup.privacy = privacy;
        setName('');
        setPrivacy('');
        setIsOpen(false)
        return newGroup;
    }
  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? "block" : "hidden"} w-full`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className={`${isDarkMode ? 'bg-[#373c40]' : 'bg-white'} border border-white border-opacity-10 rounded-lg overflow-hidden shadow-xl max-w-md sm:w-full w-full`}>
          <div className="flex flex-col">
            <div className={`flex justify-between items-center ${isDarkMode ? 'bg-[#373c40]' : 'bg-[#efefef]'} px-4 py-2`}>
              <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-sm font-bold`}>Create New Group</p>
              <button
                className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
                onClick={() => setIsOpen(false)}
              >
                <XIcon className={`h-6 w-6 ${isDarkMode ? 'text-gray-300' : 'text-black'}`} />
              </button>
            </div>
            <div className={`${isDarkMode ? 'bg-[#373c40]' : 'bg-white'} p-4`}>
                <div className=" mb-4">
                    <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-sm font-bold mr-4`}>Name</p>
                    <input 
                        type="text"
                        id="last_name" 
                        className={`${isDarkMode ? 'bg-gray-50' : 'bg-[#efefef]'}bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                        placeholder="Name Your Group "
                        onChange={(e) =>setName(e.target.value)} 
                        required/>
                </div>
                <div className="flex justify-between mb-4">
                    <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-[14px] font-bold mr-4`}>Cover Photo</p>
                    <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-[12px] font-light`}>Optional</p>
                </div>

                    <div className="flex items-center">
                        <div className="flex items-center justify-center flex-col">
                            <input
                                ref={fileInputRef}
                                className="hidden"
                                type="file"
                                onChange={handleImageChange}
                            />
                            <img
                                src={previewUrl}
                                alt="Preview"
                                className="max-w-80 w-20 h-20 rounded-lg"
                            />
                        </div>
                    <div className="mr-2 float-left" onClick={handleButtonClick}>
                        <PhotographIcon className="h-10 w-10 text-blue-500 " />
                    </div>
                    <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-sm font-light`}>Add Cover Photo</p>
                </div>
                <div className="mt-2 mb-4">
                    <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-sm font-bold mr-4`}>Privacy</p>
                    <input 
                        type="text"
                        id="last_name" 
                        className={`${isDarkMode ? 'bg-gray-50' : 'bg-[#efefef]'}bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                        placeholder="Your Privacy" 
                        onChange={(e) => setPrivacy(e.target.value)}
                        required/>
                </div>
                <div className="mt-2 flex justify-center items-center">
                    <button 
                        className="bg-[#3f85e3] rounded-lg px-9 py-1 text-[20px] text-white"
                        onClick={saveGroupData}
                        type="submit"
                    >
                        Create
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;