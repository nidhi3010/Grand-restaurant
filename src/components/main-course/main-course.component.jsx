import React from 'react';


import './main-course.styles.scss';

const MainCourse = ({title, ingre, price}) => (
    
        <div className='main-course'>
          
           <div className='content'>
             <h2 className='title'>{title}</h2>

             <div className='ingre-price'>
             <span className='ingre'>{ingre}</span>
             <span className='price'>{price}</span>
             </div>
            
           </div>
         </div>

        
            
        
        
    )

export default MainCourse;