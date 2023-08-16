import React from "react";

import Sidebar from "../sidebar";
import Header from "../../home/header";
import Footer from "../../home/footer";
import { useState } from "react";


const DashboardLayout = (props) => {

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
                <div className="">
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
                    <div className="w-full sm:w-auto mt-[20px] mx-2 sm:ml-[50px] ">                           
                        {childrenWithTheme}
                    </div>                    
                </div>
                <div className="sm:hidden block fixed bottom-0 w-full">
                    <Footer
                        isDarkMode={isDarkMode}
                    />
                </div>
            </>
    )
}
export default DashboardLayout;