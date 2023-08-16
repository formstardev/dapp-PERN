import React from "react";
 
/**import components */
import ProfileContent from "./profilContent";

const PostsList = () => {
    const profileData  = [ 
        {src:'/images/human/men-photo.png', background_src:'/images/mountain_1.png', nickname:'matt.smith', uploadtime:'7:23PM', min:'10min', content:'Went on a wild hike this afternoon and was able to capture this amazing shot of the surrounding mountains during sunset. #nature '},
        {src:'/images/human/women.png', background_src:'/images/mountain_1.png', nickname:'witty_alice', uploadtime:'8:6AM', min:'10min', content:'Went on a wild hike this afternoon and was able to capture this amazing shot of the surrounding mountains during sunset. #nature '},
        {src:'/images/human/men-photo.png', background_src:'/images/mountain_1.png', nickname:'matt.smith', uploadtime:'7:23PM', min:'10min', content:'Went on a wild hike this afternoon and was able to capture this amazing shot of the surrounding mountains during sunset. #nature '},
    ];
    return (
        <>              
            {profileData.map((pdata,index) => 
                <div key={index} className="mt-3 w-full">
                    <ProfileContent pdata={pdata}/>
                </div>
            )
            }
        </>
    )
}
export default PostsList;