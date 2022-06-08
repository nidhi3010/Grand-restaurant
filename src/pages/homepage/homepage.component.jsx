import React from 'react';

//import Footer from '../../components/footer/footer.component';


import { connect } from 'react-redux';
//import Header2 from '../../components/header/header.component';
import HomeDropDown from '../../components/home-drop/home-drop.component';
//import LowerFooter from '../../components/lower-footer/lower-footer.component';
import CourseContent from '../../components/maincourse-content/maincourse-content.component';
import Directory from '../../components/menu-directory/menu-directory.component';
import MenuDropDown from '../../components/menu-drop/menu-drop.component';
import MenuImg from '../../components/menusimg/menusimg.component';
import PageDropDown from '../../components/page-drop/page-drop.component';
import NewsDropDown from '../../components/news-drop/news-drop.component';
import FeaturesDropDown from '../../components/features-drop/features-drop.component';
import Reservation from '../../components/reservation/reservation.component';

import './homepage.styles.scss';


const HomePage = ({ hidden, hidden2, hidden3, hidden4, hidden5 }) => (

    <div className='homepage'>

       
        <div className='backgroundimg'>
            <img src="https://bistro45.com/wp-content/uploads/2015/04/shutterstock_174816359_2.jpg">
            </img>

        </div>
        {
            hidden ? null : <HomeDropDown />
        }

        {
            hidden2 ? null : <MenuDropDown />
        }

        {
            hidden3 ? null : <PageDropDown />
        }
        {
            hidden4 ? null : <NewsDropDown />
        }
        {
            hidden5 ? null : <FeaturesDropDown />
        }
        



        <div className='contentofwelcome'>
            <h2>Welcome to</h2>
            <h1>GRANDRESTAURANT</h1>
            <p>MAKING THE DELICIOUS PREMIUM FOOD SINCE 1990</p>
            <p>BOOK ONLINE FORCALL(1800)456 6743</p>
        </div>

        <div className='aboutus'>
            <h2>Know</h2>
            <h1>ABOUTUS</h1>
            <p>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla</p>
            <p>fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet</p>
            <p>cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do</p>
            <h3>John Phillipe</h3>
        </div>
        <MenuImg />
        <Directory />
        <div className='maincoursetitle'>
            <h1>MAIN COURSE</h1>
        </div>
        <CourseContent />
        <Reservation />
       

    </div>




)

const mapStateToProps = ({ home: { hidden }, menu: { hidden2 }, page: { hidden3 }, news: { hidden4 }, features: { hidden5 }}) =>
({
    hidden, hidden2, hidden3, hidden4, hidden5
})

export default connect(mapStateToProps)(HomePage);












