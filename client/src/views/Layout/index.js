import React from "react";
import Header from "../../component/home/header";
import Sidebar from "../../component/home/sidebar";
import RightBar from "../../component/home/rightBar";
import Footer from "../../component/home/footer";
import { useState } from "react";
import SettingOffcanvas from "../setting/SettingOffCanvas";



const Layout = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(()=>{
        const savedMode = localStorage.getItem('isDarkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });   
    
    const toggleDarkMode = () => {
        localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
        setIsDarkMode(prevState => !prevState);
    }
    const childrenWithTheme = React.Children.map(props.children, el => {
        return React.cloneElement(el, { isDarkMode: isDarkMode })
    })
    return (
        <>
            <div className="mt-0 sticky top-0 z-40">
                <Header 
                    isDarkMode={isDarkMode}
                    toggleDarkMode={toggleDarkMode}                 
                />
            </div>
            <div className={`mt-[0px] flex ${isDarkMode ? 'bg-[#212529]' :'bg-[#edeff1]'}`}>
                <div className="">
                    <Sidebar
                        isDarkMode={isDarkMode}
                    />
                </div>
                <div className="w-full sm:w-auto mt-[20px] mx-2 sm:ml-[150px] ">                         
                    {childrenWithTheme}
                </div>
                <div className="ml-[80px] mr-3 mt-[35px] md:block hidden ">
                    <RightBar 
                        isDarkMode={isDarkMode}
                    />
                </div>
            </div>
            <div className="sm:hidden block fixed bottom-0 w-full">
                <Footer
                    isDarkMode={isDarkMode}
                />
            </div>
            {/* <div className="fixed right-0 top-[50%] flex justify-center items-center z-50">
                <SettingOffcanvas
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                />
            </div> */}
        </>
    )
}

export default Layout;