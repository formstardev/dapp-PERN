import React from "react";

const VideoComponent = () => {
    return (
        <>
            <div className="w-full mt-5">
                <div className="flex justify-between">
                    <figure className="w-fit flex hover:cursor-pointer">
                        <img src="/images/profile/frame_1.png" alt=""></img>
                    </figure>
                    <figure className="w-fit hover:cursor-pointer">
                        <img src="/images/profile/frame_2.png" alt=""></img>
                    </figure>
                    <figure className="w-fit hover:cursor-pointer">
                        <img src="/images/profile/frame_3.png" alt=""></img>
                    </figure>                
                    <figure className="w-fit hover:cursor-pointer">
                        <img src="/images/profile/frame_4.png" alt=""></img>
                    </figure>
                </div>
                <div className="flex justify-between">
                    <figure className="w-fit hover:cursor-pointer">
                        <img src="/images/profile/frame_5.png" alt=""></img>
                    </figure>
                    <figure className=" hover:cursor-pointer">
                        <img src="/images/profile/frame_6.png" alt=""></img>
                    </figure>
                    <figure className="w-fit  hover:cursor-pointer">
                        <img src="/images/profile/frame_7.png" alt=""></img>
                    </figure>
                </div>
                <figure className="w-full  hover:cursor-pointer">
                    <img src="/images/profile/frame_8.png" className="w-full" alt=""></img>
                </figure>
                <figure className="w-full  hover:cursor-pointer">
                    <img src="/images/profile/frame_9.png" className="w-full" alt=""></img>
                </figure>
            </div> 
        </>
    )
}
export default VideoComponent;