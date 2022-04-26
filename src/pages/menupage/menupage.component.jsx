import React from "react";
import MenusOfDay from "../../components/menus-of-day/menus-of-day.component";

import './menupage.styles.scss';


const MenuPage = () => (
    <div className="menupage">
        <div className='menubackimg'>
            <img src="https://rhsphoto2.files.wordpress.com/2015/01/abreakey-raw-foodphotography-squid-still-life.jpg?">
            </img>
        </div>
        <div className="menumixed">
            <h2>Our</h2>
            <h1>MENU MIXED</h1>
        </div>
        <MenusOfDay />
        <div className="chiefimg">
          <img src="https://alamobiscuitco.com/wp-content/uploads/2015/06/223_1r140806_eat_spots_sobanndls.jpg" />
        </div>
        <div className="chief-heading">
          <h2>Chief</h2>
          <h1>RECOMMENDED</h1>
        </div>
    </div>
);

export default MenuPage;