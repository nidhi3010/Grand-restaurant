import React from "react";
import NewsBlog from "../../components/news-blog/news-blog.component";
import NewsSideBar from "../../components/news-sidebar/news-sidebar.component";

import './newspage.styles.scss';


const NewsPage = () => (
    <div className="news-page">
        <div className='newsbackimg'>
            <img src="https://rhsphoto2.files.wordpress.com/2015/01/abreakey-raw-foodphotography-squid-still-life.jpg?">
            </img>
        </div>
        <div className="ourblog">
            <h2>Our</h2>
            <h1>BLOG</h1>
        </div>
        <NewsBlog />
        <NewsSideBar />
    </div>
);

export default NewsPage;
