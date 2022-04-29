import React from "react";


import './delivery.styles.scss';

const DeliveryPage = () => (
    <div className="delivery-page">
        <div className='deliverybackimg'>
            <img src="https://rhsphoto2.files.wordpress.com/2015/01/abreakey-raw-foodphotography-squid-still-life.jpg?" />
        </div>
        <div className="services-content">
            <h2>Our</h2>
            <h1>SERVICES</h1>
        </div>
        <div className="food-delivery">
            <div className="food-delivery-detail">
                <h2>Food</h2>
                <h1>DELIVERY</h1>
                <p>Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac</p>
                <p>venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulia Curae; Fusce</p>
                <p>id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis</p>
            </div>
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/delivery.jpg" />
        </div>
    </div>
);

export default DeliveryPage;


