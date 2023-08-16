import React from "react";
 
/**import components */
import NewComponent from "./NewComponent";

const NewList = () => {
    const newlist = [
        {src:'/images/cybertrack/cybertruck_1.png', title:'What you need to know about Tesla’s Cybertruck', time:'35 min ago', content: 'Economic Times - Last year, Elon Musk unveiled the Tesla Motors Cybertruck, at the Tesla design studio after which it went viral for its striking design and its...'},
        {src:'/images/cybertrack/cybertruck_2.png', title:'What you need to know about Tesla’s Cybertruck', time:'35 min ago', content: 'Economic Times - Last year, Elon Musk unveiled the Tesla Motors Cybertruck, at the Tesla design studio after which it went viral for its striking design and its...'},
        {src:'/images/cybertrack/cybertruck_3.png', title:'What you need to know about Tesla’s Cybertruck', time:'35 min ago', content: 'Economic Times - Last year, Elon Musk unveiled the Tesla Motors Cybertruck, at the Tesla design studio after which it went viral for its striking design and its...'},
    ]
    return (
        <>              
            {newlist.map((ndata,index) => 
                <div key={index} className="mt-3 w-full">
                    <NewComponent ndata={ndata}/>
                </div>
            )
            }
        </>
    )
}
export default NewList;