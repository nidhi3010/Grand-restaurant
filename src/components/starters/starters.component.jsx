import React from "react";

import './starters.styles.scss';

const Starters = () => (
    <div className="starters">
        <img src="https://max-themes.net/demos/grandresturant/demo1/upload/223_1r140806_eat_spots_sobanndls.jpg" />
        <div className="starter-content">
            <h1>STARTERS</h1>
            <div className="starter_1">
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
            <div className="starter_2">
                <div className="na-pi">
                    <h2>PORK TENDERLOIN MARINATED IN YOGURT</h2>
                    <span>$20</span>
                </div>
                <div className="ingr-button">
                    <span>Pork / Tenderloin / Yogurt</span>
                </div>
            </div>
            <div className="starter_3">
                <div className="na-pi">
                    <h2>GRILLED PORK WITH PRESERVED LEMONS</h2>
                    <span>$22</span>
                </div>
                <div className="ingr-button">
                    <span>Pork / Lemons / Onions</span>
                    <button>*</button>
                </div>
            </div>
            <div className="starter_4">
                <div className="na-pi">
                    <h2>LEMON-ROSEMARY CHICKEN</h2>
                    <span>$19.9</span>
                </div>
                <div className="ingr-button">
                    <span>Chicken / Rosemary / Lemon</span>
                </div>
            </div>
            <div className="starter_5">
                <div className="na-pi">
                    <h2>APPLE SMOKED CHICKEN WITH WHITE SAUCE</h2>
                    <span>$18.9</span>
                </div>
                <div className="ingr-button">
                    <span>Chicken / Apple / Tomatos</span>
                    <button>*</button>
                </div>
            </div>
        </div>
    </div>
);

export default Starters;