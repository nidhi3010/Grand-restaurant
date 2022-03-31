import React from 'react';

import './main-course.styles.scss';

const MainCourse = () => (
    <div className='main-course'>
       <div className='title'>
          <h1>MAIN COURSE</h1>
       </div>

       <div className='course'>
          <div className='column_1'>
            <div className='menutitle'>
              <span>BAKED POTATO PIZZA</span>
              <span>    </span>
              <span>$12</span>
              <div className='ingre'>
                <span>Potato / Bread / Cheese</span>
              </div>
            </div>
            <div className='menutilte2'>
              <span>WILD MUSHROOM BUCATINI WITH KALE
              </span>
              <span>  </span>
              <span>&7.8</span>
            </div>
            
           </div>
       </div>
    </div>
 
    )
export default MainCourse;