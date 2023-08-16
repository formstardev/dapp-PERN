import React from "react";
import MessageComponent from "./messageComponent";
import { FaSearch } from "react-icons/fa";
 
const MessageList = () => {
    const messageList = [
        {photo_src:"/images/human/woman-2.png", name : "Jessica Gryffon", status:"Sent", time:"7:38 pm", mcontent:"Hey Ryan, I had such a great time today..."},
        {photo_src:"/images/human/woman-3.png", name : "Alice Smith", status:"Received", time:"7:12 pm", mcontent:"Talk to you later !"},
        {photo_src:"/images/human/man-4.png", name : "Matt Smith", status:"Received", time:"7:11 pm", mcontent:"Hey Ryan ! Happy Birthday !"},
    ];
    return (
        <div className="flex flex-col w-full items-center justify-center">
            <div className="rounded-lg  sm:w-[550px] mx-4">
                <form className="sm:w-full flex md:ml-0" action="/" method="GET">
                    <label htmlFor="search_field" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                            <FaSearch className="mx-[5px] h-5 w-5" aria-hidden="true" />
                        </div>
                        <input
                            id="search_field"
                            name="search_field"
                            className="block bg-[#8D969D] bg-opacity-20 sm:rounded-lg rounded-full sm:w-full h-full pl-8 pr-3 py-2 border-transparent text-[#8D969D] placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                            placeholder="Search Message"
                            type="search"
                        />
                    </div>
                </form>
            </div>
            {messageList.map((mdata,index) =>
            <div key={index} className="flex w-full flex-col items-center justify-center">
                <MessageComponent mdata={mdata}/>
            </div>
            )}
        </div>
    )
}
export default MessageList;