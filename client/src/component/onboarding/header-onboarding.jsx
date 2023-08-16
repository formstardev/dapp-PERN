import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const OnboardingHeader = () => {
    return (
        <div className="bg-[#3d5b81] flex justify-between">
            <figure className="ml-[20px] mt-[16px] mb-[15px]">
                <Link to='/landing'>
                    <img className="" src="/images/light.png" alt=""></img>
                </Link>
            </figure>  
            <figure className="mr-[32px] mt-[16px] mb-[15px]">
                <Link to='/login'>
                    <img className="" src="/images/login.png" alt=""></img>
                </Link>
            </figure>  
        </div>
    );
};
export default OnboardingHeader;