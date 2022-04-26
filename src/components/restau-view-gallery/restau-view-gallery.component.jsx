import React from "react";

import './restau-view-gallery.styles.scss';

const RestauViewGallery = () => (
    <div className="restau-view-gallery">
       <img src="https://max-themes.net/demos/grandresturant/demo1/upload/3250_1a_c_photography_restaurants___food_port_13_2.jpg" />
       <div className="view-gallery">
       <h2>Our</h2>
       <h1>RESTAURANT</h1>
       <span>CHECKOUT OUR RESTAURANT AND SPECIAL DISHES</span>
       <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
       <p>aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
       <a href="homemenu" class='gallery-button'>VIEW GALLERY</a>
       </div>
    </div>
);

export default RestauViewGallery;