import { useEffect, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io"

/**import components */
import ProfileContent from './profilContent';
import NewList from './newsList';
import TrendingList from './trendingList';
import PostsList from './postsList';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const HomeComponent = () => {
  const [activeTab, setActiveTab] = useState('#pills-with-brand-color-1');
  const isDarkMode = localStorage.getItem('isDarkMode') === "true" ? true : false;
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const loginStatus = queryParams.get('login');
  console.log(loginStatus);
   useEffect(() => {
    if (loginStatus == 'success') {
      toast.success('Logged in successfully!',{
        position: toast.POSITION.TOP_CENTER,
        autoClose:2000});
      }  
    },[]);
  

  const tabslist = [
    { Title: 'Breaking', id: 'breaking_id', data_hs_tab: "#pills-with-brand-color-1", aria_controls: "pills-with-brand-color-1"},
    { Title: 'Posts', id: 'speaks_id', data_hs_tab: "#pills-with-brand-color-2", aria_controls: "pills-with-brand-color-2" },
    { Title: 'News', id: 'news_id', data_hs_tab:"#pills-with-brand-color-3", aria_controls: "pills-with-brand-color-3" },
    { Title: 'Trending', id: 'trending_id', data_hs_tab: "#pills-with-brand-color-4", aria_controls: "pills-with-brand-color-4" },
    { Title: 'Live', id: 'live_id', data_hs_tab: "#pills-with-brand-color-5", aria_controls: "pills-with-brand-color-5" },
    { Title: 'Channel', id: 'channel_id', data_hs_tab: "#pills-with-brand-color-6", aria_controls: "pills-with-brand-color-6" },
  ]

  return (
    <div className="sm:mb-8 mb-[80px]">
      <ToastContainer/>
      <nav className={`mx-3 flex space-x-2 rounded-lg overflow-x-auto sm:px-2 px-0 sm:py-2 py-0 border border-opacity-40 border-[#8D969D] border-bold sm:w-full w-11/12 border-1 ${isDarkMode ? 'bg-[#373C40]' : 'bg-white'}`} aria-label="Tabs" role="tablist">
        {tabslist.map((tab,index)=>
        <button 
            key={index}
            type="button"
            className={`${
            activeTab === tab.data_hs_tab
              ? 'hs-tab-active:bg-[#3F85E3] hs-tab-active:text-white'
              : ''
          } py-3 sm:w-[80px] w-1/6 min-w-[16.66%] h-[33px] flex justify-center inline-flex cursor-none sm:cursor-pointer items-center gap-2 bg-transparent sm:text-[14px] text-[12px] font-medium text-center ${isDarkMode ? 'text-gray-500' : 'text-black'} rounded-lg hover:text-blue-600 dark:hover:text-gray-400 active`}
          id={tab.id}
          data-hs-tab={tab.data_hs_tab}
          aria-controls={tab.aria_controls}
          role="tab"
          onClick={() => handleTabClick(tab.data_hs_tab)}
        >
          {tab.Title}
        </button>
        )}       
      </nav>
      <div className="mt-[50px] flex flex-col sm:float-right items-center w-full">        
        <label htmlFor="Toggle3" className="inline-flex items-center p-2 rounded-md sm:cursor-pointer">
	        <input id="Toggle3" type="checkbox" className="hidden peer" />
	        <span className="px-4 py-2 text-white text-[12px] font-bold w-[117.06px] h-[26px] flex justify-center items-center rounded-l-md bg-[#3F85E3] peer-checked:bg-[#8D969D] peer-checked:bg-opacity-40">Newest</span>
	        <span className="px-4 py-2 text-white text-[12px] font-bold w-[117.06px] h-[26px] flex justify-center items-center rounded-r-md bg-[#8D969D] bg-opacity-40 peer-checked:bg-[#3F85E3]">Best</span>
        </label>
      </div>
      <div className="mt-3">
        <div
          id="breaking_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-1"
          className={`${activeTab === '#pills-with-brand-color-1' ? '' : 'hidden'}`}
        >  
        <div className="flex fade-in duration-500 ease-in-out ">
            <p className="text-[#3f85e3] text-[16px] font-normal ">Home</p>
            <IoIosArrowForward color={`${isDarkMode ? 'white':'black' } `} className="mt-1.5 min-w-fit" />
            <span className={`${isDarkMode ? 'text-white' : 'text-black'} text-[16px] font-normal`}>Breaking</span>
        </div>
          <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-[34px] font-medium`}>
            Breaking News
          </p>
          <div className={`mt-3 border-t ${isDarkMode ? 'border-white' : 'border-gray-800'} border-opacity-20 justiy-center items-center flex flex-col`}>          
            <NewList/>
          </div>
        </div>

        <div
          id="speaks_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-2"
          className={`${activeTab === '#pills-with-brand-color-2' ? ' fade-in duration-100 ease-in-out' : 'hidden'} `}
        >
        <div className="flex justify-left">
            <p className="text-[#3f85e3] text-[16px] font-normal ">Home</p>
              <IoIosArrowForward color={`${isDarkMode ? 'white':'black' } `} className="mt-1.5 min-w-fit" />

            <span className={`${isDarkMode ? 'text-white' : 'text-black'} text-[16px] font-normal`}>Posts</span>
        </div>
          <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-[34px] font-medium`}>
            Posts
          </p>
          <div className={`mt-3 border-t ${isDarkMode ? 'border-white' : 'border-gray-800'} border-opacity-20 justiy-center items-center flex flex-col`}>
            <PostsList className="mt-2"/>
          </div>
        </div>
        <div
          id="news_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-3"
          className={`${activeTab === '#pills-with-brand-color-3' ? ' fade-in duration-100 ease-in-out' : 'hidden'}`}
        >
        <div className="flex justify-left">
            <p className="text-[#3f85e3] text-[16px] font-normal ">Home</p>
              <IoIosArrowForward color={`${isDarkMode ? 'white':'black' } `} className="mt-1.5 min-w-fit" />

            <span className={`${isDarkMode ? 'text-white' : 'text-black'} text-[16px] font-normal`}>News</span>
        </div> 
          <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-[34px] font-medium`}>
            Top News Stories
          </p>
          <div className={`mt-3 border-t ${isDarkMode ? 'border-white' : 'border-gray-800'} border-opacity-20 justiy-center items-center flex flex-col`}>          
            <NewList/>
          </div>
        </div>
        <div
          id="trending_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-4"
          className={`${activeTab === '#pills-with-brand-color-4' ? ' fade-in duration-100 ease-in-out' : 'hidden'}`}
        >
        <div className="flex justify-left">
            <p className="text-[#3f85e3] text-[16px] font-normal ">Home</p>
              <IoIosArrowForward color={`${isDarkMode ? 'white':'black' } `} className="mt-1.5 min-w-fit" />

            <span className={`${isDarkMode ? 'text-white' : 'text-black'} text-[16px] font-normal`}>Trending</span>
        </div>
          <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-[34px] font-medium`}>
            Trending
          </p>
          <div className={`mt-3 border-t ${isDarkMode ? 'border-white' : 'border-gray-800'} border-opacity-20 justiy-center items-center flex flex-col`}>          
            <TrendingList/>
          </div>
        </div>
        <div
          id="live_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-5"
          className={`${activeTab === '#pills-with-brand-color-5' ? '' : 'hidden'}`}
        >
        <div className="flex justify-left">
            <p className="text-[#3f85e3] text-[16px] font-normal ">Home</p>
              <IoIosArrowForward color={`${isDarkMode ? 'white':'black' } `} className="mt-1.5 min-w-fit" />

            <span className={`${isDarkMode ? 'text-white' : 'text-black'} text-[16px] font-normal`}>Live</span>
        </div>
          <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-[34px] font-medium`}>
            Live
          </p>
        </div>
        <div
          id="channel_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-6"
          className={`${activeTab === '#pills-with-brand-color-6' ? '' : 'hidden'}`}
        >
        <div className="flex justify-left">
            <p className="text-[#3f85e3] text-[16px] font-normal ">Home</p>
              <IoIosArrowForward color={`${isDarkMode ? 'white':'black' } `} className="mt-1.5 min-w-fit" />

            <span className={`${isDarkMode ? 'text-white' : 'text-black'} text-[16px] font-normal`}>Channel</span>
        </div>
          <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-[34px] font-medium`}>
            Channel
          </p>
        </div>
      </div>
    </div>
  );
}
export default HomeComponent;