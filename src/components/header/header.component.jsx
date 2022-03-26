import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './header.styles.scss';

const Header = () => (
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
        </div>

    </div>

);

export default Header;