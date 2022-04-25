import React from "react";

import HomeMenuItems from "../homemenu-items/homemenu-items.component";

import './homemenu-itemdirectoy.styles.scss';

class HomeMenuDirectory extends React.Component {
    constructor() {
        super();


    this.state = {
        MENU_DATA: [{
            id:1,
            imageUrl:"https://max-themes.net/demos/grandresturant/demo1/upload/4ccb9fab-c445-4343-884d-3992a6588e98-620x444-400x400-1433934149.jpeg",
            name: 'IMPORTED SALMON STEAK',
            ingredients: 'Salmon/Vaggies/Oil',
            price: '$18.9'
        },
        {
            id:2,
            imageUrl:"https://max-themes.net/demos/grandresturant/demo1/upload/dl_00_01_021-400x400.jpg",
            name: 'BAKED POTATO PIZZA',
            ingredients: 'Potato/Bread/Cheese',
            price: '$12'
        },
        {
            id:3,
            imageUrl:"https://max-themes.net/demos/grandresturant/demo1/upload/7311365-400x400-1433934292.jpg",
            name: 'ITALIAN SOURCE MASHROOM',
            ingredients: 'Mashroom/Veggis/Garlic',
            price: '$19.9'
        },
        {
            id:4,
            imageUrl:"https://max-themes.net/demos/grandresturant/demo1/upload/slide-02_tom-aikens-food-photography-400x400-1433934211.jpg",
            name: "FRIED POTATOES WITH GARLIC",
            ingredients: 'Potatoes/Olive/Oil/Garlic',
            price: '$12'
        },
        {
            id:5,
            imageUrl:"https://max-themes.net/demos/grandresturant/demo1/upload/greg-400x400-1433934437.jpg",
            name: 'TUNA ROAST SOURCE',
            ingredients: 'Tuna/Potatoes/Rice',
            price: '$24.5'
        },
        {
            id:6,
            imageUrl:"https://max-themes.net/demos/grandresturant/demo1/upload/indian-food-with-chapatti-rice-curries-vegetables-papad-pickle-payasam-f4-400x400-1433934381.jpg",
            name: 'ROAST PORK (4 STICKS)',
            ingredients: 'Pork/Veggies/Shoyu',
            price: '$15.5'
        },
        {
            id:7,
            imageUrl:"https://max-themes.net/demos/grandresturant/demo1/upload/plae_bistro_ad_food_photography_milwaukee_advertising_photographer_appleton_wisconsin_culinary_photography_retouching_preparation_cuisine_11-400x400-1433934411.jpg",
            name: 'SALTED FRIED CHICKEN',
            ingredients: 'Chicken/Olive Oil/Salt',
            price: '$20'
        },
        {
            id:8,
            imageUrl:"https://max-themes.net/demos/grandresturant/demo1/upload/223_1r140806_eat_spots_sobanndls-400x400-1433934069.jpg",
            name: 'CRAB WITH CURRY SOURCES',
            ingredients: 'Crab/Potatoes/Rice',
            price: '$24.5'
        }]
    
    
    

}
    }
    render() {
        return (
            <div className='homedirectory-menu'>
               {
                   this.state.MENU_DATA.map(({name, imageUrl, id, ingredients, price}) => (
                       <HomeMenuItems key={id} name={name} imageUrl={imageUrl} ingredients={ingredients} price={price}/>
                    )) }
            </div>
        )
    }


}

export default HomeMenuDirectory;
    