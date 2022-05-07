import React from "react";

import { Link } from "react-router-dom";

import './rock-shrimp-page.styles.scss';


const RockShrimpPage = () => (
    <div className="rock-shrimp">
        <div className="header-options">
            <p>Menu</p>
            <p>Cart</p>
            <p>Test Drive</p>
            <p>Purchase Theme</p>
        </div>
        <div className="imgback">
            <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandrestaurant/demo1/wp-content/uploads/2015/04/alasdair-elmes-ULHxWq8reao-unsplash.jpg" />
        </div>
        <div className="title">
            <h1>Black Spaghetti with Rock Shrimp</h1>
            <p className="date">APRIL 20, 2015 IN <Link to='/news' className="linked">ITALIAN</Link></p>
        </div>
        <div className="rockshrimp-blog">
            <div className="content">
                <p>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris</p>
                <p>elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis.</p>
                <div className="content-2">
                    <p>Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris</p>
                    <p>elementum accumsan leo vel tempor. Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et malesuada fames ac turpis egestas. Aenean</p>
                    <p>commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Vestibulum id ligula porta felis euismod</p>
                    <p>semper. Vestibulum id ligula porta felis euismod semper.</p>
                </div>
            </div>
            <div className="content-img">
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandrestaurant/demo1/wp-content/uploads/2015/05/about.jpg" />
            </div>
            <div className="img-detail">
                <p>Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur.Cras mattis consectetur purus sit</p>
                <p>amet fermentum. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur</p>
                <p>adipiscing elit. Donec id elit non mi porta gravida at eget metus.</p>
            </div>
            <div className="blockquote">
                <blockquote>To design is to solve human problems by identifying them and executing the best solution</blockquote>

                <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Lorem ipsum</p>
                <p>dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
                <p>Vestibulum id ligula porta felis euismod semper.</p>
            </div>
            <div className="tag">
                <a href="recipe">recipe</a>
                <a href="shrimp">shrimp</a>
                <a href="spaghetti">spaghetti</a>
            </div>
            <div className="also-like">
                <h5>YOU MIGHT ALSO LIKE</h5>
                <div className="like-1">
                    <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandrestaurant/demo1/wp-content/uploads/2015/04/dinner-with-greek-dishes-on-the-stone-background-t-PBR94SG-150x150.jpg" />
                    <a href="cookingfood">Cooking Food With Love</a>
                    <p>APRIL 18, 2015</p>
                </div>
                <div className="like-2">
                   <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandrestaurant/demo1/wp-content/uploads/2020/12/view-of-stylish-empty-cafe-with-arranged-tables-an-AA9VFEU-150x150.jpg" />
                   <a href="amazingdining">Amazing Dining Experience Begins</a>
                   <p>APRIL 16, 2015</p>
                </div>
            </div>
        </div>
    </div>
);


export default RockShrimpPage;