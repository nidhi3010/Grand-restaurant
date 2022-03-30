import React from 'react';
import MENU_DATA from './menu.data';
import './menu-item.styles.scss';

 const MenuItems = () => (
  <div className='menu-items'>
    {
      MENU_DATA.map((MENU_DATA) =>
      (

        <div className='items'>
          <img src={MENU_DATA.imageUrl} alt="menu Image" />

        </div>
      )

      )
    }
    <div className='content'>
       <h2 className='name' >{MENU_DATA.name} </h2>
        <span className='ingredient'>{MENU_DATA.ingredients} </span>
         <span className='price'>{MENU_DATA.price} </span>
    </div>

  </div>

);


export default MenuItems;
