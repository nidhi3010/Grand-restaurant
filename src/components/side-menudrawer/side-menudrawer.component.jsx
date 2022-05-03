import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';


import { FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";


import './side-menudrawer.styles.scss';




const SideMenuBar = ({ placeholder, handleChange }) => {
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
    
    >

      <div className='drawer-box'>
        
          <div className='icon-searchbox'>
          <input
            type='text'
            placeholder='Search...'
            onChange={handleChange}
            className='search'
          />
          
          <FaSearch className='search_icon' />
          </div>
        
        <div className='remove' onClick={toggleDrawer(anchor, false)} >
          &#10005;
        </div>
        <div className='bar-menus'>
          <div className='option_1'>HOME
            <a class="nextround_1">&#8250;</a>
          </div>

          <div className='option_2'>
            MENU
            <a class="nextround_2">&#8250;</a>
          </div>

          <div className='option_3'>
            PAGES
            <a class="nextround_3">&#8250;</a>
          </div>

          <div className='option_4'>DELIVERY</div>

          <div className='option_5'>
            NEWS
            <a class="nextround_4">&#8250;</a>
          </div>

          <div className='option_6'>
            SHORTCODES
            <a class="nextround_5">&#8250;</a>
          </div>
        </div>

        <div className='gallery'>
          <h1>GALLERY ON FLICKR</h1>
          <div className='first_4_img'>
            <img src="https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80.jpg" alt='img_1' />
            <img src="https://i.pinimg.com/736x/99/68/0d/99680d13681727d892c2902a7500e6ce.jpg" alt='img_2' />
            <img src="https://www.lufthansa.com/content/dam/lh/images/pixels_variations/c-1711224258-1697466.transform/lh-dcep-transform-width-1440/img.jpg" alt='img_3' />
            <img src="https://news.italianfood.net/wp-content/uploads/sites/2/2021/02/food-wine-italiano.jpg" alt='img_4' />
          </div>
          <div className='second_4_img'>
          <img src="https://www.gioiaspa.com/wp-content/uploads/2019/10/food-and-beverage-1.jpg" alt='img_5' />
          <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2019/07/street-food-recipes-1a.jpg" alt='img_6' />
          <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg" alt='img_7' />
          <img src="https://assets.cntraveller.in/photos/60f6d111a77bf98b83f5364c/master/pass/Ahmedabad%20Food%20Guide.jpg" alt='img_8' />
          </div>
        </div>












      </div>


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