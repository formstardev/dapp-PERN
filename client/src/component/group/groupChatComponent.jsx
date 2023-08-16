import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsFillSendFill } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";
import Scrollbar from "react-scrollbars-custom";
import { IoIosArrowBack } from "react-icons/io"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const GroupChatComponent = () => {
  
  const [messages, setMessages] = useState([
    {
      id: uuidv4(),
      photo: "/images/human/women.png",
      text: "Hello, how can I help you today?",
      sender: "Witti.Alic",
    },
    {
      id: uuidv4(),
      photo: "/images/human/man-4.png",
      text: "Hi, I have a question about your product.",
      sender: "You",
    },
    {
      id: uuidv4(),
      photo: "/images/human/woman-2.png",
      text: "Sure, what would you like to know?",
      sender: "Matt.Swith",
    },
    {
      id: uuidv4(),
      photo: "/images/human/man-4.png",
      text: "I'm wondering if it comes in different sizes.",
      sender: "You",
    },
    // ... more messages ...
  ]);
  
  const [newMessage, setNewMessage] = useState("");
  

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleNewMessageSubmit = (event) => {
    event.preventDefault();
    const newMessageObj = {
      id: uuidv4(),
      photo: "/images/human/man-4.png",
      text: newMessage,
      sender: "You",
    };
    setMessages([...messages, newMessageObj]);
    setNewMessage("");
    // Scroll to the bottom of the scrollbar after a new message has been submitted
    if (scrollRef.current) {
      const { scrollHeight, clientHeight } = scrollRef.current;
      scrollRef.current.scrollTop = scrollHeight - clientHeight;
    }
  };
  useEffect(() => {
    // Scroll to the bottom of the scrollbar after the component has mounted
    if (scrollRef.current) {
      const { scrollHeight, clientHeight } = scrollRef.current;
      scrollRef.current.scrollTop = scrollHeight - clientHeight;
    }
  }, [newMessage]);
  const history = useHistory();
  const scrollRef = useRef(null);
  

  return (
    <div className="sm:w-[517px] w-full max-w-4xl mx-auto my-8">
      <div className="flex items-center text-white hover:md:cursor-pointer" onClick={() => history.push('/group')}>
        <IoIosArrowBack className="text-[20px]"/>
        <p className="mx-3">Back to All Groups</p>
      </div>
      <div className="flex flex-col justify-between h-screen">
        <Scrollbar 
          ref={scrollRef}
          style={{ width: "100%", height: "calc(100vh - 280px)" }}>
          {messages.map((message) => (
            <div
              key={message.id}
              className="rounded-lg py-2 w-full px-4 mt-5 mb-10"
            >
              {message.sender === "You" ? (
                <div className="flex justify-end">
                  <div className="bg-blue-500 flex mt-5 py-2 px-2 rounded-lg">
                    <div className="mx-2">
                      <p className="text-white">{message.sender}</p>
                      <p className="text-white">{message.text}</p>
                    </div>
                    <figure>
                      <img src={message.photo} alt=""></img>
                    </figure>
                  </div>
                </div>
              ) : (
                <div className=" flex justify-start">
                  <div className="bg-[#373c40] mt-5 px-2 py-2 flex rounded-lg">
                    <figure>
                      <img src={message.photo} alt=""></img>
                    </figure>
                    <div className="mx-2">
                      <p className="text-blue-500">{message.sender}</p>
                      <p className="text-white">{message.text}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Scrollbar>
        <form onSubmit={handleNewMessageSubmit} className="sm:mb-[150px] mb-10 w-full">
          <div className="flex-none px-4 py-2">
            <div className="flex items-center">
              <HiOutlinePhotograph className="text-blue-500 text-[40px]" />
              <input
                type="text"
                className="bg-[#373c40] flex-1 border border-white border-opacity-10 rounded-lg text-white py-2 px-4 mx-2 focus:ring-none"
                placeholder="Type your message here..."
                value={newMessage}
                onChange={handleNewMessageChange}
                required
              />
              <button
                type="submit"
                className="text-blue-500 text-[22px] font-bold py-2 px-4 rounded"
              >
                <BsFillSendFill />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupChatComponent;