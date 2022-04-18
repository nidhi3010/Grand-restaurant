import React from 'react';

import Footer from '../components/footer/footer.component';



import Header2 from '../components/header/header.component';
import HomeDropDown from '../components/home-drop/home-drop.component';
import LowerFooter from '../components/lower-footer/lower-footer.component';
import CourseContent from '../components/maincourse-content/maincourse-content.component';
import Directory from '../components/menu-directory/menu-directory.component';
import MenuDropDown from '../components/menu-drop/menu-drop.component';
import MenuImg from '../components/menusimg/menusimg.component';
import PagesDropDown from '../components/pages-drop/pages-drop.component';
import Reservation from '../components/reservation/reservation.component';
import UpperHeader from '../components/upper-header/upper-header.component';

import './homepage.styles.scss';

const HomePage = () => (
    
    <div className='homepage'>
   
        <UpperHeader />
        <div className='backgroundimg'>
            <img src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg">
            </img>
         
        </div>


       
       
        <Header2 />
        <div className='contentofwelcome'>
            <h2>Welcome to</h2>
            <h1>GRANDRESTAURANT</h1>
            <p>MAKINGTHEDELICIOUSPREMIUMFOODSINCE1990</p>
            <p>BOOKONLINEFORCALL(1800)456 6743</p>
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
        <Footer />
        <LowerFooter />
       

    </div>  




)

export default HomePage;