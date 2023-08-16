import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Confirmation =() => {
    return (
        <div className="bg-[#E5E5E5] sm:bg-[#E5E5E5] min-h-screen justify-center items-center flex">
            <form className="" action="/onboarding">
                <div className="relative container mt-0 flex flex-col items-center justify-center h-full">
                    <figure className="mt-[0] sm:block hidden">
                        <img src="/images/presser_final-logo.png" alt=""></img>
                    </figure>
                    <figure className="mt-[20px] sm:hidden block">
                        <img src="/images/blue.png" alt=""></img>
                    </figure>
                    <figure className="mt-[85px] sm:block hidden">
                        <img src="/images/des.png" alt=""></img>
                    </figure>
                    <figure className="flex-col items-center flex justify-center mt-[45px] sm:hidden block">
                        <img className="" src="/images/Email Confirmation.png" alt=""></img>
                        <p className="text-[14px] mt-[8px] w-[311px] font-light text-center">Hi, you’re almost ready to start enjoy Presser.<br/>Simply click the big blue button below to verify<br/> your account.</p>
                    </figure>   
                    <figure className="sm:mt-[59px] mt-[121px]">
                        <img src="/images/Group1475.png" alt=""></img>
                    </figure>
                    <Link to="/home">
                        <button className="bg-[#3f85e3] w-[327px] mt-[108px] hover:bg-blue-500 text-white font-medium text-[16px] font-semibold hover:text-white py-2 px-4 border hover:bg-[#497DBE] sm:hover:bg-[#497DBE] border-blue-500 hover:border-transparent rounded">
                            Verify
                        </button>
                    </Link>             
                </div>
            </form>
        </div>
    )
}
export default Confirmation;