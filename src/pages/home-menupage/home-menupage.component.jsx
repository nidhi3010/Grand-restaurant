import React from 'react';
import LowerFooter from '../../components/lower-footer/lower-footer.component';

import './home-menupage.styles.scss';



const HomeMenuPage = () => (
    <div className='home-menupage'>
        <div className='backimg'>
            <img src="https://www.teahub.io/photos/full/266-2661568_3d-wallpapers-for-restaurant.jpg">
            </img>
        </div>
        <div className='welcome-content'>
            <h2>Welcome to</h2>
            <h1>GRANDRESTAURANT</h1>
            <p>MAKING THE DELICIOUS PREMIUM FOOD SINCE 1990</p>
            <p>BOOK ONLINE FORCALL(1800)456 6743</p>
        </div>
        <div class="scroll-downs">
            <div class="mousey">
                <div class="scroller"></div>
            </div>
        </div>
        <div className='content'>
            <h1>UNTIL I DISCOVERED COOKING I WAS </h1>
            <h1>NEVER REALLY INTERESTED IN ANYTHING</h1>
            <p>OUR FOUNDER JOHN PHILLIPE</p>
            <h2>John Phillipe</h2>
        </div>
        <div className='discover-story'>
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/about.jpg" />
            <div className='contentofstory'>
                <h2>Discover</h2>
                <h1>OUR STORY</h1>
                <h3>ULTIMATE DINING EXPERIENCE LIKE NO OTHER</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
                <p>aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Exercitation photo booth stumptown tote bag</p>
                <p>Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident</p>
                <p>chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade.</p>
            </div>
        </div>
        <div className='bgimg'>
            <img src="http://millards.com/wp-content/uploads/2016/02/restaurant-gift-certificate-deductions.jpg" />
        </div>
        <div className='detail'>
            <h2>Delightful</h2>
            <h1>EXPERIENCE</h1>
        </div>
    </div>
);

export default HomeMenuPage;