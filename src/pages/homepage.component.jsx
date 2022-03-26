import React from 'react';

import Header from '../components/header/header.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
      <Header />
        
        <div className='contentofwelcome'>
            <h2>welcome to</h2>
            <h1>GRANDRESTAURANT</h1>
            <p>MAKINGTHEDELICIOUSPREMIUMFOODSINCE1990</p>
            <p>BOOKONLINEFORCALL(1800)456 6743</p>
        </div>
    </div>
)

export default HomePage;