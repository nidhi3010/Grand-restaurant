import React from "react";

import './homemenu-items.styles.scss';

import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const MenuPageItems = ({ name, ingredients, price, imageUrl }) => (
    <div className='homemenu-item'>
        <div
            className='bg-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <div className="name-price">
                <h2 className='name'>{name}</h2>
                <span className='price'>{price}</span>
            </div>
            <div className="ingre-button">
                <span className='ingredient'>{ingredients}</span>
                <div className='button'>
                    <button className='order'>ORDER</button>
                    <button className='star'>*</button>
                </div>
            </div>
        </div>
        <div className="hover-button">
            <FaSearch className='hover-search' />
            <FaShoppingCart className='hover-cart' />
        </div>

    </div>
)




export default HomeMenuItems;
