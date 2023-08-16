import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import GroupComponent from './groupComponent';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useMediaQuery } from '@mui/material';

/** import Modal */
import CreateGroupModal from './createGroupPopup';
 
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ div: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function GroupList () {
  const [value, setValue] = React.useState(0);
  const isMobile = useMediaQuery('(max-width:600px)');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /** Open create group modal */
  const [isOpen, setIsOpen] = useState(false);
  const isDarkMode = localStorage.getItem('isDarkMode') === "true" ? true : false;
  

  const grouplist = [
    {group_logo:'/images/group/group_logo_1.png', group_name:'Reiki Healings', update:'1month', category:'pin'},
    {group_logo:'/images/group/group_logo_2.png', group_name:'Yoga_Texas', update:'1month', category:'pin'},
    {group_logo:'/images/group/group_logo_3.png', group_name:'Spiritual', update:'1month', category:'pin'},
    {group_logo:'/images/group/group_logo_2.png', group_name:'Spiritual', update:'1month', category:'your'},
    {group_logo:'/images/group/group_logo_4.png', group_name:'Coding in Bay Area', update:'1month', category:'other'},
  ];

  return (
    <Box sx={{ width: isMobile? 'auto' : '517px' }}>
      <Box sx={{ borderBottom: 1, width: '100%', borderColor: 'divider', display:'flex', alignItems:'center', }}>
        <Tabs value={value} sx={{width:isMobile? '100%':'100%'}} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Pinned Groups" {...a11yProps(0)} sx={{ width:'33.333%', fontSize:isMobile ? '15px':'13px', color: value === 0 && !isDarkMode ? 'blue' : 'gray', '&:hover': { color: value === 0 ? 'gray' : 'white'}, '&:active': { color: value === 0 ? '' : 'white'}}}/>
          <Tab label="Your Groups" {...a11yProps(1)} sx={{ width:'33.333%', fontSize:isMobile ? '15px':'13px', color: value === 1 && !isDarkMode ? 'blue' : 'gray', '&:hover': { color: value === 1 ? 'gray' : 'white'}, '&:active': { color: value === 1 ? '' : 'white'} }}/>
          <Tab label="Other Groups" {...a11yProps(2)} sx={{ width:'33.333%', fontSize:isMobile ? '15px':'13px', color: value === 2 && !isDarkMode ? 'blue' : 'gray', '&:hover': { color: value === 2 ? 'gray' : 'white'}, '&:active': { color: value === 2 ? '' : 'white'} }}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      {
        grouplist.filter(items => items.category && items.category.includes('pin'))
          .map((gdata, index) => (
            <div key={index} className='flex justify-center items-center'>
              <GroupComponent gdata={gdata}/>
            </div>
          ))
      }
      </TabPanel>
      <TabPanel value={value} index={1}>
      {
        grouplist.filter(items => items.category && items.category.includes('your'))
          .map((gdata, index) => (
            <div key={index} className='flex justify-center items-center'>
              <GroupComponent gdata={gdata}/>
            </div>
          ))
      }
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='flex justify-between min-h-fit p-2 mt-2 '> 
          <div className='mx-1 my-2 flex justify-center'>
            <p className={`${isDarkMode ? 'text-white' : 'text-black'} sm:text-[18px] font-bold`}>Create a New Group</p>
          </div>
          <div>
          <button 
            className="bg-[#3f85e3] flex justify-between items-center hover:bg-teal-700 border-[#3f85e3] hover:border-teal-700 min-w-fit min-h-fit sm:py-2 sm:px-5 py-1 px-3 sm:text-[16px] text-[12px] font-medium border-4 text-white  rounded rounded-xl" 
            type="button"
            onClick={() => setIsOpen(true)}
            >
              <AiOutlinePlusCircle className='mr-3'/>NewGroup
          </button>
          </div>
        </div>
        
      {
        grouplist.filter(items => items.category && items.category.includes('other'))
          .map((gdata, index) => (
            <div key={index} className='flex justify-center items-center'>
              <GroupComponent gdata={gdata}/>
            </div>
          ))
      }     
      </TabPanel> 
      <CreateGroupModal 
        isOpen = {isOpen}
        setIsOpen = {setIsOpen}
      />     
    </Box>
  );
}