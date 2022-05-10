import React from "react";

import { Link } from "react-router-dom";

import NewsSideBar from "../../components/news-sidebar/news-sidebar.component";

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
                <div className="like-3">
                    <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandrestaurant/demo1/wp-content/uploads/2014/07/image-from-rawpixel-id-444728-jpeg-150x150.jpg" />
                    <a href="premiumrecipe">Our Premium Food Recipe</a>
                    <p>APRIL 9, 2015</p>
                </div>
                <div className="like-4">
                    <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandrestaurant/demo1/wp-content/uploads/2014/07/chiles-en-nogada-dish-on-mexican-independence-day-PVRJURW-150x150.jpg" />
                    <a href="combiofcooking">Life is a combination of cooking</a>
                    <p>APRIL 5, 2015</p>
                </div>
            </div>
            <div className="about-author">
                <h3>ABOUT THE AUTHOR</h3>
                <img src="https://secure.gravatar.com/avatar/db6f032dce962144efc9b625779461a1?s=160&d=mm&r=g" />
                <div className="author-detail">
                    <h5>John Philipe</h5>
                    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo</p>
                    <p>consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
                </div>
            </div>
            <div className="leave-a-reply">
                <h3>LEAVE A REPLY</h3>
                <p>Your email address will not be published. Required fields are marked *</p>
                <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
                <input className="author" placeholder="Name" id="author" name="author" type="text" value size="30" maxlength="245" required="required"></input>
                <input className="email" placeholder="Email" id="email" name="email" type="email" value size="30" maxlength="100" aria-describedby="email-notes" required="required"></input>
                <input className="website" placeholder="Website" id="url" name="url" type="url" value size="30" maxlength="200" required="required"></input>
                <input className="checkbox" id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes"></input>
                <input id="submit" name="submit" type="submit" className="submit" value="Post Comment"></input>

            </div>
        </div>
        <NewsSideBar />
    </div> 
    

);


export default RockShrimpPage;