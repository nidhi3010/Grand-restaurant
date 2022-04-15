import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";




//export default function TemporaryDrawer() {
    const SideMenuBar = ({placeholder, handleChange}) => {
  const [state, setState] = React.useState({
   
    right: false,

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     
    <div className='drawer-box'>
       <div className='search-box'>
         <input 
            className='search'
            type='search'
            placeholder= {placeholder}
            onChange= {handleChange}
          />  
        <FaSearch className='search_icon' />
       </div>
       <div className='remove' onClick={toggleDrawer(anchor, false)} >
       &#10005;
      </div>
  
       
    






    </div>
    <Divider />
      
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
        <div className='out-drawer'>
        <FiMenu className='drawer-icon' onClick={toggleDrawer(anchor, true)} />
    </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SideMenuBar;