import React from "react";
 
/**import components */
import TrendingComponent from "./trendingComponent";
import HashtagGroup from "./hashtagsgroup";
const TrendingList = () => {
    const hashtagslist = [
        {name:'#Photography', category:'new'},
        {name:'#Natural', category:'new'},
        {name:'#Wildlife', category:'new'},
        {name:'#Toronto', category:'new'},
        {name:'#Canada', category:'new'},
        {name:'#Wildeneses', category:'best'},
        {name:'#Photography', category:'best'},
        {name:'#Photography', category:'best'},
        {name:'#Photography', category:'best'},
    ];
    const trendinglist = [
        {name:'Trending in #technology', src:'/images/cybertrack/cybertruck_1.png',price:'1.8k', title:'What you need to know about Tesla’s Cybertruck', time:'35 min ago', content: 'Economic Times - Last year, Elon Musk unveiled the Tesla Motors Cybertruck, at the Tesla design studio after which it went viral for its striking design and its...'},
        {name:'No. 1 in #automobiles, #cars', src:'/images/cybertrack/cybertruck_2.png',price:'3.4k', title:'What you need to know about Tesla’s Cybertruck', time:'35 min ago', content: 'Economic Times - Last year, Elon Musk unveiled the Tesla Motors Cybertruck, at the Tesla design studio after which it went viral for its striking design and its...'},
        {name:'Trending in #technology', src:'/images/cybertrack/cybertruck_3.png',price:'3.2k', title:'What you need to know about Tesla’s Cybertruck', time:'35 min ago', content: 'Economic Times - Last year, Elon Musk unveiled the Tesla Motors Cybertruck, at the Tesla design studio after which it went viral for its striking design and its...'},
    ]
    return (
        <div className="sm:mb-8 mb-[80px]">  
            <div className="sm:hidden block border-b py-2 border-gray-800 border-opacity-20">
                <p className="text-[24px] font-medium text-blue-400">
                    Popular Hashtags
                </p>
            </div>
            <div className="sm:hidden block border-b border-gray-800 border-opacity-20 py-3">
                <HashtagGroup bdata={hashtagslist}/>
            </div>           
            {trendinglist.map((tdata,index) => 
                <div key={index} className="mt-5">
                    <TrendingComponent tdata={tdata}/>
                </div>
            )
            }
        </div>
    )
}
export default TrendingList;