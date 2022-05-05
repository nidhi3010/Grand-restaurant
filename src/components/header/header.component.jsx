import React from 'react';
import { useState, useEffect } from 'react';

import ReservationDropDown from '../reservation-drop/reservation-drop.component';

import HomeMenuPage from '../../pages/home-menupage/home-menupage.component';

import { connect } from 'react-redux';

//import CustomButton from '../custom-button/custom-button.component';
import SideMenuBar from '../side-menudrawer/side-menudrawer.component';

import { toggleHomeHidden } from '../../redux/home/home.actions';
import { toggleMenuHidden } from '../../redux/menu/menu.actions';
import { togglePageHidden } from '../../redux/page/page.actions';
import { toggleNewsHidden } from '../../redux/news/news.actions';
import { toggleFeaturesHidden } from '../../redux/features/features.actions';

import './header.styles.scss';






function Header2({toggleHomeHidden, toggleMenuHidden, togglePageHidden, toggleNewsHidden, toggleFeaturesHidden}) {
 
    const [header, setHeader] = useState("header");
  
    const listenScrollEvent = event => {
      if (window.scrollY > 73) {
        return setHeader("header");
      } else if (window.scrollY > 70) {
        return setHeader("header2");
      }
    };

  
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
  
      return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);
  


return (
    <div className='header'>
        <div className='title'>
            <h1>GRAND</h1>
            <span>RESTAURANT</span>
        </div>
        <div className='options'>
            <a href='/homemenu' className='option' onMouseEnter={toggleHomeHidden} onMouseLeave={toggleHomeHidden}>HOME</a>
            <a href='/menu' className='option' onMouseEnter={toggleMenuHidden} onMouseLeave={toggleMenuHidden}>MENU</a>
            <div className='option' onMouseEnter={togglePageHidden} onMouseLeave={togglePageHidden}>PAGES</div>
            <a href='delivery' className='option'>DELIVERY</a>
            <a href='news' className='option' onMouseEnter={toggleNewsHidden} onMouseLeave={toggleNewsHidden}>NEWS</a>
            <div className='option' onMouseEnter={toggleFeaturesHidden} onMouseLeave={toggleFeaturesHidden}>FEATURES</div>
            <ReservationDropDown />
               
            <SideMenuBar />
        </div>

    </div>

);




}



const mapDispatchToProps = dispatch => ({
  toggleHomeHidden: () => dispatch(toggleHomeHidden()),
  toggleMenuHidden: () => dispatch(toggleMenuHidden()),
  togglePageHidden: () => dispatch(togglePageHidden()),
  toggleNewsHidden: () => dispatch(toggleNewsHidden()),
  toggleFeaturesHidden: () => dispatch(toggleFeaturesHidden()),
  

});

export default connect(null, mapDispatchToProps)(Header2);