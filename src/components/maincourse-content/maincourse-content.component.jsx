import React from 'react';

import MAIN_COURSE_DATA from '../../main-course.data';

import MainCourse from '../main-course/main-course.component';

import './maincourse-content.styles.scss';

class CourseContent extends React.Component {
    constructor() {
        super();
        // console.log(MAIN_COURSE_DATA,'MAIN_COURSE_DATA');
        this.state = {
            data: MAIN_COURSE_DATA
        }
    }


    render() {
        const { data } = this.state;
        // const {title,id,ingre,price} = item;
        return (
            // <div className='course-content' >

            //   {
            //       data.map (({ id, title, ingre, price}) => (
            //       <MainCourse key={id} title={title} ingre={ingre} price={price} />
            //   ))}




            // </div>
          
                <div className='contentofcourse'>
                    {
                        data
                          //  .filter((item, idx) => idx <13)
                            .map((item) => (<MainCourse key={item.id} item={item} />))
                    }
                </div>
               
            
        )
    }
}

export default CourseContent;





