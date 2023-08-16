import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

 
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
        <Box sx={{ div: 2 }}>
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

export default function HashtagGroup (props) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isDarkMode = localStorage.getItem('isDarkMode') === "true" ? true : false;


  
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value}  onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Newest" {...a11yProps(0)} sx={{ width:'50%', color: value === 0 ? 'gray' : 'gray', '&:hover': { color: value === 0 ? 'gray' : 'gray'}, '&:active': { color: value === 0 ? 'gray' : 'gray'}}}/>
          <Tab label="Best" {...a11yProps(0)} sx={{ width:'50%', color: value === 0 ? 'gray' : 'gray', '&:hover': { color: value === 0 ? 'gray' : 'gray'}, '&:active': { color: value === 0 ? 'gray' : 'gray'}}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {props.bdata.filter(items => items.category && items.category.includes('new')).map((data, index) =>
            <button key={index} className={`mx-3 mt-3 ${isDarkMode ? 'bg-[#212529]' : 'bg-gray-500'} border border-white border-opacity-10 rounded-full text-white px-2 py-1 hover:bg-opacity-50 active:cursor-none`} type='button'>{data.name}</button>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.bdata.filter(items => items.category && items.category.includes('best')).map((data, index) =>
            <button key={index} className={`mx-3 mt-3 ${isDarkMode ? 'bg-[#212529]' : 'bg-gray-500'} border border-white border-opacity-10 rounded-full text-white px-2 py-1 hover:bg-opacity-50 active:cursor-none`} type='button'>{data.name}</button>
        )}
      </TabPanel>      
    </Box>
  );
}