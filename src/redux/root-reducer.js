import { combineReducers } from "redux";

import homeReducer from './home/home.reducer';
import featuresReducer from './features/features.reducer';
import menuReducer from './menu/menu.reducer';
import newsReducer from './news/news.reducer';
import pageReducer from './page/page.reducer';


export default combineReducers({
    home: homeReducer,
    features: featuresReducer,
    menu: menuReducer,
    news: newsReducer,
    page: pageReducer
});