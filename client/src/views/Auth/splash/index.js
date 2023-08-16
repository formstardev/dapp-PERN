import React, { useState, useEffect } from "react";
import { ReactComponent as Presserfinal} from '../../../assets/img/svg/presser_final .svg'
import { ReactComponent as Presserfinal2} from '../../../assets/img/svg/presser_final 2.svg'
import { useHistory } from 'react-router-dom';

const Splash =() => {
    const history = useHistory();
    const [showSplash, setShowSplash] = useState(true);

    // hide the splash screen after 2seconds
    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
            history.push('/landing');
        },2000);
    },[history]);
    return (
        <>
           {showSplash ? (
           <div className="bg-[#212529] sm:bg-[#3d5b81] min-h-screen justify-center items-center flex">
                <div className="relative container mt-0 flex flex-col items-center justify-center h-full">
                    <Presserfinal className="mb-0 hidden sm:block"/>
                    <p className="italic text-center text-white text-[14.2px] hidden sm:block mt-0">Free Press Free Speech</p>
                    <Presserfinal2  className="sm:hidden"/>
                </div>
            </div>):null}
        </>
    )
}
export default Splash;