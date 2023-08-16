import React, {useState, } from "react";
import { FiMessageSquare, FiVideo } from "react-icons/fi";
import { HiPhotograph } from "react-icons/hi";
import SpeaksComponent from "./speaksComponent";
import AddTabPopUp from "./addTabPopUp";
import VideoComponent from "./videoComponent";
const ProfileScrollbar = () => {
    const [activeTab, setActiveTab] = useState('#pills-with-brand-color-1');
    const [isOpen, setIsOpen] = useState(false);
    const [tabName, setName] = useState("");
    const isDarkMode = localStorage.getItem("isDarkMode")=== "true" ? true :false;

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  }; 
  
  const [tabsList, setTabsList] = useState(
    [
      { Title: 'Posts',icon: FiMessageSquare , id: 'breaking_id', data_hs_tab: "#pills-with-brand-color-1", aria_controls: "pills-with-brand-color-1"},
      { Title: 'Re-posted',icon: FiMessageSquare, id: 'speaks_id', data_hs_tab: "#pills-with-brand-color-2", aria_controls: "pills-with-brand-color-2" },
      { Title: 'Videos', icon: FiVideo, id: 'news_id', data_hs_tab:"#pills-with-brand-color-3", aria_controls: "pills-with-brand-color-3" },
      { Title: 'Photos', icon: HiPhotograph, id: 'trending_id', data_hs_tab: "#pills-with-brand-color-4", aria_controls: "pills-with-brand-color-4" },
      { Title: 'Favourite', icon: HiPhotograph, id: 'favourite_id', data_hs_tab: "#pills-with-brand-color-5", aria_controls: "pills-with-brand-color-5" },
    ]
  );

  const onAddTab = (tab) => {
    const newTabObj = {Title: `${tab.Title}`, id:`${tab.id}`}
    setTabsList([...tabsList,newTabObj])
  };

  return (
    <div className="sm:mb-8 mb-[80px]">
      <nav className={`flex space-x-2 rounded-lg overflow-x-auto ${isDarkMode ? 'bg-[#373C40]' : 'bg-white'}  sm:px-2 px-0 sm:py-2 py-0 border border-opacity-40 border-[#8D969D] border-bold sm:w-full w-11/12 mx-3 sm:mx-0 border-1`} aria-label="Tabs" role="tablist">
        {tabsList.map((tab,index)=>
        <button 
            key={index}
            type="button"
            className={`${
            activeTab === tab.data_hs_tab
              ? 'hs-tab-active:bg-[#3F85E3] hs-tab-active:text-white'
              : ''
          } md:py-2 py-1 md:w-1/4 w-1/6 md:min-w-[25%] min-w-[16.6%] flex justify-center inline-flex cursor-none sm:cursor-pointer items-center gap-2 bg-transparent sm:text-[14px] text-[12px] font-medium text-center text-gray-500 rounded-lg hover:text-gray-400 dark:hover:text-gray-400 active`}
          id={tab.id}
          data-hs-tab={tab.data_hs_tab}
          aria-controls={tab.aria_controls}
          role="tab"
          onClick={() => handleTabClick(tab.data_hs_tab)}
        >
          {tab.Title}
        </button>
        )}
        <button 
          type="button"
          role="tab"
          onClick={() => setIsOpen(true)}
          className="py-2 sm:w-1/4 w-1/6 md:min-w-[25%] min-w-[16.6%] flex justify-center inline-flex cursor-none sm:cursor-pointer items-center gap-2 bg-transparent sm:text-[14px] text-[12px] font-medium text-center text-[#8D969D] rounded-sm hover:text-white dark:hover:text-gray-400 active"
        >
          Add Tab
        </button>        
      </nav>
      <AddTabPopUp 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onAddTab={onAddTab}
        setName={setName}
        tabName={tabName}
      />
      <div className="mt-3">
        <div
          id="breaking_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-1"
          className={`${activeTab === '#pills-with-brand-color-1' ? '' : 'hidden'}`}
        >  
          <div className='mt-3 border-t border-white border-opacity-10 '>          
            <SpeaksComponent/>
          </div>
        </div>

        <div
          id="speaks_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-2"
          className={`${activeTab === '#pills-with-brand-color-2' ? ' fade-in duration-100 ease-in-out' : 'hidden'} `}
        >
          
          <div className='mt-3 border-t flex flex-col justify-center border-white border-opacity-10'>
            <VideoComponent/>
          </div>
        </div>
        <div
          id="news_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-3"
          className={`${activeTab === '#pills-with-brand-color-3' ? ' fade-in duration-100 ease-in-out' : 'hidden'}`}
        >        
          <div className='mt-3 border-t border-white border-opacity-10'>
            <VideoComponent/>          
          </div>
        </div>
        <div
          id="trending_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-4"
          className={`${activeTab === '#pills-with-brand-color-4' ? ' fade-in duration-100 ease-in-out' : 'hidden'}`}
        >        
          <div className='mt-3 border-t border-white border-opacity-10'>          
            <VideoComponent/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileScrollbar;