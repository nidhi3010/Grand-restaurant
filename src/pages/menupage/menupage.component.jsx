import React from "react";
import AlcoholicBeverages from "../../components/alcoholic-bre/alcoholic-beverages.component";
import MenuPageItemDirectory from "../../components/menupage-itemdirectoy/menupage-itemdirectory.component";
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
      
    </div>
    <div className="chief-heading">
      <h2>Chief</h2>
      <h1>RECOMMENDED</h1>
    </div>
    <MenuPageItemDirectory />
    <div className="wineimg">
      
    </div>
    <div className="winetitle">
      <h2>Wine</h2>
      <h1>SELECTION</h1>
    </div> 
    <AlcoholicBeverages />
  </div>
);

export default MenuPage;