import React, { useState } from "react";

import SettingOffcanvas from "../setting/SettingOffCanvas";
// import { createContext, useContext } from "react";

const AuthLayout = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('isDarkMode');
        return savedMode ? JSON.parse(savedMode) : false;
      });
    return (
        <>
          <div className="flex">
            <div className="w-full">
                {children}
            </div>
            <div className="fixed right-0 top-[50%] flex justify-center items-center">
                <SettingOffcanvas
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                />
            </div>
          </div>
        </>
    )
}
export default AuthLayout;