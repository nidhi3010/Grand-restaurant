import React from 'react';

import MAIN_COURSE_DATA from './main-course.data';

import MainCourse from '../main-course/main-course.component';

import './maincourse-content.styles.scss';

class CourseContent extends React.Component {
    constructor() {
        super() ;

        this.state = {
            data: MAIN_COURSE_DATA
        }
    }
    
    render () {
        const { data } = this.state;
        return (
            <div className='course-content' >
              { data.map (({ id, title, ingre, price}) => (
                  <MainCourse key={id} title={title} ingre={ingre} price={price} />
              ))}
            </div>
        )
              }
            }

export default CourseContent;





