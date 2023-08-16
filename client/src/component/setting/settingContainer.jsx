import React from "react";
import Account from "./accountCollapse";
import TermsOfService from "./termsOfServiceCollapse";
import About from "./aboutCollapse";
import Help from "./helpCollapse";
import PrivacyAndSafety from "./privacyAndSafetyColllapse";
import Notification from "./notificationCollapse";
import ContentPreferences from "./contentPreferencesCollapse";
import Favourites from "./favouritesCollapse";

const SettingComponent = () => {
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true' ? true : false;
    return (
        <>
            <div className={`w-full ${isDarkMode ? 'bg-[#373C40]' : 'bg-white'} rounded-md min-h-fit py-2`}>
                <div className="w-full border-b border-gray-400 border-opacity-20">
                    <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-blue-900'} text-[34px] mx-3 py-3`}>
                        Settings and Privacy
                    </p>
                </div>
                <div className="w-full border-b border-gray-400 border-opacity-20">
                    <Account/>
                </div>
                <div className="w-full border-b border-gray-400 border-opacity-20">
                    <PrivacyAndSafety/>
                </div>
                <div className="w-full border-b border-gray-400 border-opacity-20">
                    <Notification/>
                </div>
                <div className="w-full border-b border-gray-400 border-opacity-20">
                    <ContentPreferences/>
                </div>
                <div className="w-full border-b border-gray-400 border-opacity-20">
                    <About/>
                </div>
                <div className="w-full border-b border-gray-400 border-opacity-20">
                    <Favourites/>
                </div>
                <div className="w-full border-b border-gray-400 border-opacity-20">
                    <TermsOfService/>
                </div>
                <div className="w-full">
                    <Help/>
                </div>
            </div>
        </>
    )
}
export default SettingComponent;