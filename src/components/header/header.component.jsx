import React from 'react';
import { useState, useEffect } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import SideMenuBar from '../side-menudrawer/side-menudrawer.component';

import './header.styles.scss';


function Header2() {
    const [header, setHeader] = useState("header");
  
    const listenScrollEvent = event => {
      if (window.scrollY < 73) {
        return setHeader("header");
      } else if (window.scrollY > 70) {
        return setHeader("header2");
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
  
      return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);
  









// const Header = () => (

return (
    <div className='header'>
        <div className='title'>
            <h1>GRAND</h1>
            <span>RESTAURANT</span>
        </div>
        <div className='options'>
            <div className='option'>HOME</div>
            <div className='option'>MENU</div>
            <div className='option'>PAGES</div>
            <div className='option'>DELIVERY</div>
            <div className='option'>NEWS</div>
            <div className='option'>FEATURES</div>
            <CustomButton />
            <SideMenuBar />
        </div>

    </div>

);
}

export default Header2;