import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RegisterBasic =() => {
    return (
        <div className="bg-[#E5E5E5] sm:bg-[#E5E5E5] min-h-screen justify-center items-center flex">
            <div className="relative container mt-[100px] flex flex-col items-center justify-center h-full">
                <figure className="mt-[0] sm:block hidden">
                    <img src="/images/presser_final-logo.png" alt=""></img>
                </figure>
                <figure className="mt-[20px] sm:hidden block">
                    <img src="/images/blue.png" alt=""></img>
                </figure>
                
                <div className="mt-[100px] flex flex-col justify-center items center">
                    <p className="text-[17px] sm:text-[24px]">Don't you have an account?
                        <Link to='/register'>
                            <button  className="ml-[10px] sm:text-[24px] text-[18px] font-bold">SignUp</button>
                        </Link>
                    </p>
                </div>
                <p className="sm:text-[20px] text-[17px] mt-[23px]">OR</p>
                <div className="mt-[41px] flex items-center justify-center">
                    <Link to='/login'>
                        <button type="button" className="flex-shrink-0 bg-[#3f85e3] hover:bg-teal-700 border-[#3f85e3] hover:border-teal-700 h-[35px] w-[131px] text-sm border-4 text-white py-1 px-2 rounded">
                            Sign In
                        </button>
                    </Link>
                </div>
                <p className="text-[12px] sm:w-[304px] w-[250px] font-light sm:mt-[250px] mt-[180px] text-center">
                    By Signing in, you will create an account and agree to our <br/> 
                    <a href="/" className="underline"> Terms of Service </a> 
                    and 
                    <a href="/" className="underline"> Privacy Policy</a>
                </p>           
            </div>
        </div>
    )
}
export default RegisterBasic;