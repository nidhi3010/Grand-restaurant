import React from 'react';

import './menu-item.styles.scss';
const MenuItems = ({name, ingredients, price, imageUrl}) => (
   <div className='menu-item'>
   <div 
       className='background-image'
     style={{
       backgroundImage: `url(${imageUrl})`
     }}
       />
     <div className='content'>
     <h2 className='name'>{name}</h2>
     <span className='ingredient'>{ingredients}</span>
      <span className='price'>{price}</span>
      
      <div className='button'>
      <button className='order'>ORDER</button>
      <button className='star'>*</button>
     </div>
   </div>
   </div>
)




export default MenuItems;
