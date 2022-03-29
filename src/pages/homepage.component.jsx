import React from 'react';



import Header from '../components/header/header.component';
import MenuItem from '../components/menu-items/menu-items.component';
import Menu from '../components/menu/menu.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='backgroundimg'>
            <img src="https://i.pinimg.com/736x/e6/7d/af/e67daf68a6e8f6d4a9283cb7d64b098c.jpg">
            </img>
        </div>
        <Header />
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
        <Menu />
        <MenuItem />
        
    </div>  




)

export default HomePage;