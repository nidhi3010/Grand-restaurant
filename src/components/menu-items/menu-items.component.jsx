import React from 'react';
import MENU_ITEMS from './menu.items';

import './menu-items.styles.scss'

const MenuItem =({imageUrl}) => (
   <div className='menu-items'>
     {
         MENU_ITEMS.map((MENU_ITEMS)=>
         (
             
                 <div className='items'>
                   <img src = {MENU_ITEMS.imageUrl} alt="menu Image" />
                
                 </div>
             )
         
         )
         }
    </div> 
)

export default MenuItem;