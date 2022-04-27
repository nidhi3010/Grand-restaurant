import React from "react";

import './menus-of-day.styles.scss';

const MenusOfDay = () => (
    <div className="menusofday">
        <h1>MENUS OF THE DAY</h1>
        <div className="contentofmenus">
            <div className="menu_1">
                <div className="na-pi">
                    <h2>BAKED POTATO PIZZA</h2>
                    <span>$12</span>
                </div>
                <div className="ingr-button">
                    <span>Potato / Bread / Cheese</span>
                    <button className="order">ORDER</button>
                    <button className="star">*</button>
                </div>
            </div>
            <div className="menu_2">
                <div className="na-pi">
                    <h2>PORK TENDERLOIN MARINATED IN YOGURT</h2>
                    <span>$20</span>
                </div>
                <div className="ingr-button">
                    <span>Pork / Tenderloin / Yogurt</span>
                </div>
            </div>
            <div className="menu_3">
                <div className="na-pi">
                    <h2>GRILLED PORK WITH PRESERVED LEMONS</h2>
                    <span>$22</span>
                </div>
                <div className="ingr-button">
                    <span>Pork / Lemons / Onions</span>
                    <button>*</button>
                </div>
            </div>
            <div className="menu_4">
                <div className="na-pi">
                    <h2>LEMON-ROSEMARY CHICKEN</h2>
                    <span>$19.9</span>
                </div>
                <div className="ingr-button">
                    <span>Chicken / Rosemary / Lemon</span>
                </div>
            </div>
            <div className="menu_5">
                <div className="na-pi">
                    <h2>APPLE SMOKED CHICKEN WITH WHITE SAUCE</h2>
                    <span>$18.9</span>
                </div>
                <div className="ingr-button">
                    <span>Chicken / Apple / Tomatos</span>
                    <button>*</button>
                </div>
            </div>
            <div className="menu_6">
                <div className="na-pi">
                    <h2>BRAISED CHICKEN BREAST WITH WHITE WINE AND SHALLOTS</h2>
                    <span>$24.5</span>
                </div>
                <div className="ingr-button">
                    <span>Chicken Breast / Wine</span>
                </div>
            </div>
            <div className="menu_7">
                <div className="na-pi">
                    <h2>GRILLED HANGER STEAK WITH HARISSA AND PICKLED RED ONIONS</h2>
                    <span>$29.9</span>
                </div>
                <div className="ingr-button">
                    <span>Beef / Onions / Tomatos</span>
                </div>
            </div>
            <div className="menu_8">
                <div className="na-pi">
                    <h2>MEATLOAF WITH BLACK PEPPER-HONEY BBQ</h2>
                    <span>$19.9</span>
                </div>
                <div className="ingr-button">
                    <span>Pepper / Chicken / Honey</span>
                </div>
            </div>
        </div>
    </div>
);

export default MenusOfDay;