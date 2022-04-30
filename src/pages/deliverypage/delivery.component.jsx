import React from "react";
import Odometer from "../../components/odometer/odometer.component";

//import Odometer from 'react-odometerjs';

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
        <Odometer />
        <p className="title-1">Years of Experience</p>
        <p className="title-2">Award Winning Chiefs</p>
        <p className="title-3">Customers Served</p>
        <p className="title-4">Dishes</p>
        <p className="title-5">Awards</p>
        <div className="custom-catering">
            <img src="https://cdn.myanmarseo.com/file/client-cdn/mingalarsky.com/wp-content/uploads/2018/07/Mistral-Restaurant-Amy-Roth-Photo.jpg" />
            <div className="custom-catering-content">
                <h2>Custom</h2>
                <h1>CATERING</h1>
                <div className="paragraph-1">
                    <p>Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse</p>
                    <p>pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque</p>
                    <p>velit pede quis nunc. Vestibulia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus</p>
                    <p>dolor. Maecenas vestibulum mollis</p>
                </div>
                <div className="paragraph-2">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget</p>
                    <p>dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,</p>
                    <p>nascetur ridiculus mus. Donec quam felis.</p>
                </div>
            </div>
        </div>
        <div className="delivery-items">
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/223_1r140806_eat_spots_sobanndls-400x400-1433934069.jpg" />
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/100_1040312_mercer_knives_0391_fweb-400x400.jpg" />
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/3250_1a_c_photography_restaurants___food_port_13_2-400x400.jpg" />
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/greg-400x400-1433934437.jpg" />
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/RTY-Shoyu-Bowl_LARGE-400x400-1433934110.jpg" />
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/plae_bistro_ad_food_photography_milwaukee_advertising_photographer_appleton_wisconsin_culinary_photography_retouching_preparation_cuisine_11-400x400-1433934411.jpg" />
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/abreakey-raw-foodphotography-squid-still-life-400x400.jpg" />
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/shutterstock_174816359_2-400x400.jpg" />
        </div>

    </div>
);

export default DeliveryPage;


