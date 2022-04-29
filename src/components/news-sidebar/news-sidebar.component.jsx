import React from "react";

import './news-sidebar.styles.scss';

const NewsSideBar = () => (
    <div className="newssidebar">
        <div className="about-us">
            <h2>ABOUT US</h2>
            <p>Lorem ipsum dolor sit amet, consetetur</p>
            <p>sadipscing elitr, sed diam nonumy eirmod</p>
            <p>tempor invidunt ut labore et dolore magna</p>
            <p>aliquyam erat, sed diam voluptua. At vero</p>
            <p>eos et accusam et justo duo dolores et ea</p>
            <p>rebum.</p>
        </div>
        <div className="categories_content">
            <h2>CATEGORIES</h2>
            <div className="categories">
                <a href="news">Asian (1)</a>
                <a href="news">Cooking (3)</a>
                <a href="news">Italian (2)</a>
                <a href="news">Modern Fusion (1)</a>
                <a href="news">Recipe (2)</a>
            </div>
        </div>
        <div className="tags">
            <h2>TAGS</h2>
            <div className="row-1">
                <a href="news">cooking</a>
                <a href="news">cuisine</a>
                <a href="news">dinning</a>
                <a href="news">recipe</a>
            </div>
            <div className="row-2">
                <a href="news">restaurant</a>
                <a href="news">shrimp</a>
                <a href="news">spaghetti</a>
            </div>
        </div>
        <div className="gallery-on-flicker">
            <h2>GALLERY ON FLICKR</h2>
            <div className='first-3-img'>
                <img src="https://max-themes.net/demos/grandresturant/demo1/upload/48544015562_9294520488_s.jpg" alt='img_1' />
                <img src="https://max-themes.net/demos/grandresturant/demo1/upload/48528964047_de4b27d823_s.jpg" alt='img_2' />
                <img src="https://max-themes.net/demos/grandresturant/demo1/upload/48489434421_4701e696dd_s.jpg" alt='img_3' />
            </div>
            <div className='second-3-img'>
                <img src="https://max-themes.net/demos/grandresturant/demo1/upload/48317013731_f988b69c52_s.jpg" alt='img_4' />
                <img src="https://max-themes.net/demos/grandresturant/demo1/upload/48308542466_151f2a66a3_s.jpg" alt='img_5' />
                <img src="https://max-themes.net/demos/grandresturant/demo1/upload/48092508442_dbd807762f_s.jpg" alt='img_6' />
            </div>
            <div className='third-3-img'>
                <img src="https://max-themes.net/demos/grandresturant/demo1/upload/47015511494_a45979912a_s.jpg" alt='img_4' />
                <img src="https://max-themes.net/demos/grandresturant/demo1/upload/46968818334_b4bb23dc19_s.jpg" alt='img_5' />
                <img src="https://max-themes.net/demos/grandresturant/demo1/upload/40747094363_16c3b23b2f_s.jpg" alt='img_6' />
            </div>
        </div>
        <div className="pagination-detail">
           <h3>PAGE 1 OF 2</h3>
        </div>
    </div>
);


export default NewsSideBar;