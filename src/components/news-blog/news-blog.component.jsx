import React from "react";

import { Link } from "react-router-dom";

import './news-blog.styles.scss';

const NewsBlog = () => (
    <div className="news-blog">
        <div className="blog-1">
            <Link to="/rockshrimp" className='heading-1'>Black Spaghetti with Rock Shrimp</Link>
            <div className="bolg-1-detail">
                <p className="date-1">APRIL 20, 2015 IN <Link to='/news' className="link-1">ITALIAN</Link></p>
                <Link to='/news' className="comment-1">NO COMMENT</Link>
                <Link to='/rockshrimp' className="readmore-1">READ MORE</Link>
            </div>
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/greg-960x365-1433934611.jpg" />
            <p>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris</p>
            <p>elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis.</p>
        </div>

        <div className="blog-2">
            <Link to='/news' className="heading-2">Cooking Food With Love</Link>
            <div className="bolg-2-detail">
                <p className="date-2">APRIL 18, 2015 IN <Link to='/news' className="link-2">RECIPE</Link></p>
                <Link to='/news' className='comment-2'>NO COMMENT</Link>
                <Link to='/news' className="readmore-2">READ MORE</Link>
            </div>
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/butter-on-the-endive-chef-in-residence-vancouver-melody-gourmet-fury-photography-960x365-1433934641.jpg" />
            <p>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris</p>
            <p>elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis.</p>
        </div>

        <div className="blog-3">
            <Link to='/news' className="heading-3">Modern Fusion Cuisine</Link>
            <div className="bolg-3-detail">
                <p className="date-3">APRIL 17, 2015 IN <Link to='/news' className="link-3">RECIPE</Link></p>
                <Link to='/news' className="comment-3">NO COMMENT</Link>
                <Link to='/news' className="readmore-3">READ MORE</Link>
            </div>
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/plae_bistro_ad_food_photography_milwaukee_advertising_photographer_appleton_wisconsin_culinary_photography_retouching_preparation_cuisine_11-960x365-1433934660.jpg" />
            <p>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris</p>
            <p>elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis.</p>
        </div>

        <div className="blog-4">
            <Link to='/news' className="heading-4">Amazing Dining Experience Begins</Link>
            <div className="bolg-4-detail">
                <p className="date-4">APRIL 16, 2015 IN <Link to='/news' className="link-4">COOKING</Link></p>
                <Link to='/news' className="comment-4">NO COMMENT</Link>
                <Link to='/news' className="readmore-4">READ MORE</Link>
            </div>
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/3250_1a_c_photography_restaurants___food_port_13_2-960x365.jpg" />
            <p>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris</p>
            <p>elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis.</p>
        </div>

        <div className="blog-5">
            <Link to='/news' className="heading-5">Our Premium Food Recipe</Link>
            <div className="bolg-5-detail">
                <p className="date-5">APRIL 9, 2015 IN <Link to='/news' className="link-5">ASIAN</Link></p>
                <Link to='/news' className="comment-5">NO COMMENT</Link>
                <Link to='/news' className="readmore-5">READ MORE</Link>
            </div>
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/shutterstock_174816359_2-960x365.jpg" />
            <p>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris</p>
            <p>elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis.</p>
        </div>

        <div className="blog-6">
            <Link to='/news' className="heading-6">Life is a combination of cooking</Link>
            <div className="bolg-6-detail">
                <p className="date-6">APRIL 5, 2015 IN <Link to='/news' className="link-6">COOKING</Link></p>
                <Link to='/news' className="comment-6">NO COMMENT</Link>
                <Link to='/news' className="readmore-6">READ MORE</Link>
            </div>
            <img src="https://max-themes.net/demos/grandresturant/demo1/upload/mowiekay1-960x365.jpg" />
            <p>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris</p>
            <p>elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis.</p>
        </div>

        <div className="pagination">
            <p className="currentpage">1</p>
            <a href="news" className="nextpage">2</a>
        </div>

    </div>
);

export default NewsBlog;