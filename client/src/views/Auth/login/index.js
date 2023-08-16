import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Emailicon from "../../../assets/img/Icon/email.png";
import Passwordicon from "../../../assets/img/Icon/password.png";
import AuthService from "../../../services/auth.service"

import { ToastContainer, toast } from "react-toastify";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory('');
    //Login 
    const onSubmit = (e) => {
        e.preventDefault();
    
        // Check if email is provided
        if (!email) {
            toast.error("Email is required!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        }
        // Check if password is provided
        else if (!password) {
            toast.error("Password is required!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        }
        // If both email and password are provided
        else {
            // Attempt to login using the AuthService
            AuthService.login(email, password).then(
                (response) => {
                    // Display a success message using toast
                    toast.success(response.message, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 4000,
                    });
                    history.push('/home?login=success')
                },
                (error) => {
                    // Display an error message using toast
                    toast.error(
                            error.response.data.message,                        
                            
                        {
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 4000,
                        }
                    );
                }
            );
        }
    };
      

    return (
        <div className="sm:bg-[#edeff1] bg-[#f4f4f4] min-h-screen justify-center flex">
            <div className="sm:block hidden relative sm:flex sm:flex-col sm:mt-0 sm:justify-center sm:items-center">
                <form className="flex flex-col justify-center items-center" onSubmit={(e) => onSubmit(e)}>
                    <div className="w-[330px] mt-[30px]">
                        <figure className="sm:block" >
                            <img className="" src="/images/presser_final-logo.png" alt="" loading="lazy"></img>
                        </figure> 
                        <p className="text-[34px] mt-[30px] font-medium normal color-[#000] w-full">Login your Account</p>
                        <div className="mt-[26px] ml-[22px] flex items-center border-b border-[#000] border-light py-2 mr-[22px] ">
                            <p className="text-[18px] color-[#000] font-normal text-left">E-mail</p>
                            <input 
                                className="appearance-none ml-[5px] mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none" 
                                required 
                                type="email" 
                                aria-label="Email" 
                                placeholder=""
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className="mt-[26px] ml-[22px] flex items-center border-b border-[#000] border-light py-2 mr-[22px] ">
                            <p className="text-[18px] color-[#000] font-normal text-left">Password</p>
                            <input 
                                className="appearance-none ml-[5px] mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none" 
                                required 
                                type="password" 
                                aria-label="Password" 
                                placeholder=""
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>                    
                        <div className="mt-[61px] flex items-center justify-center">
                            <button 
                                type="submit" 
                                className="flex-shrink-0 bg-[#3f85e3] hover:bg-teal-700 border-[#3f85e3] hover:border-teal-700 h-[35px] w-[131px] text-sm border-4 text-white py-1 px-2 rounded"
                                onClick={(e) => onSubmit(e)}
                            >
                                Sign In
                                <ToastContainer/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="sm:hidden block relative flex-col flex mt-0 justify-center items-center">
                <form className="flex flex-col justify-center items-center" onSubmit={(e) => onSubmit(e)}>
                    <figure className="mt-[40px]">
                        <img src="/images/blue.png" alt="" loading="lazy"></img>
                    </figure>
                    <figure className="mt-[40px]">
                        <img className="float-left ml-40px" src="/images/login-des.png" alt=""></img>
                    </figure>

                    <div className="mt-[24px] ml-[22px] w-[287px] flex items-center border-b border-[#5B59D6] border-light py-2 mr-[22px] ">
                        <figure className="">
                            <img src={Emailicon} className=" text-[18px] color-[#000] font-normal focus:fill-[#5B59D6]" alt=""></img>    
                        </figure>&nbsp;&nbsp;
                        <input 
                            className="appearance-none mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none mr-[22px]" 
                            type="email" 
                            name="email" 
                            autoComplete="email" 
                            required aria-label="FullName" 
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            >                            
                        </input>
                    </div>
                    <div className="mt-[24px] ml-[22px] w-[287px] flex items-center border-b border-[#5B59D6] border-light py-2 mr-[22px] ">
                        <figure className="">
                            <img src={Passwordicon} className=" text-[18px] color-[#000] font-normal focus:fill-[#5B59D6]" alt=""></img>    
                        </figure>&nbsp;&nbsp;
                        <input 
                            className="appearance-none mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none mr-[22px]" 
                            type="password" 
                            name="password"
                            autoComplete="password" 
                            required 
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>                
                    <div className="mt-[201px] flex items-center justify-center">                        
                        <button 
                            className="flex-shrink-0 bg-[#3f85e3] hover:bg-teal-700 border-[#3f85e3] hover:border-teal-700 h-[52px] w-[327px] text-[16px] font-medium border-4 text-white py-1 px-2 rounded rounded-xl" 
                            type="submit"
                            onClick={(e) => onSubmit(e)}
                        >
                               Log In
                               <ToastContainer/>
                        </button>                        
                    </div>
                </form>    
                <div className="mt-[61px] flex items-center justify-center">
                    <p className="text-[14px] text-[#868686]">Don't have an account? &nbsp;
                        <Link to="/register"><button className="text-[#3F85E3] font-bold">Register</button></Link>
                    </p>
                </div>

            </div>
        </div>
    )
}
export default Login;