import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import HomeMenuPage from './pages/home-menupage/home-menupage.component';
import MenuPage from './pages/menupage/menupage.component';
import NewsPage from './pages/newspage/newspage.component';
import DeliveryPage from './pages/deliverypage/delivery.component';
import RockShrimpPage from './pages/rock-shrimp-page/rock-shrimp-page.component';
import RecipePage from './pages/recipe-page/recipe-page.component';
import ShrimpPage from './pages/shrimp-page/shrimp-page.component';
import SpaghettiPage from './pages/spaghetti-page/spaghetti-page.component';
import CookingFood from './pages/cookingfood-page/cookingfood-page.component';
import AmazingBegins from './pages/amazingbegins-page/amazingbegins-page.component';

import UpperHeader from './components/upper-header/upper-header.component';
import Header2 from './components/header/header.component';
import Footer from './components/footer/footer.component';
import LowerFooter from './components/lower-footer/lower-footer.component';


function App() {
  return (
    <div>
      <UpperHeader />
      <Header2 />
      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route path='/homemenu' component={HomeMenuPage} />
        <Route path='/menu' component={MenuPage} />
        <Route path='/news' component={NewsPage} />
        <Route path='/delivery' component={DeliveryPage} />
        <Route path='/rockshrimp' component={RockShrimpPage} />
        <Route path='/recipe' component={RecipePage} />
        <Route path='/shrimp' component={ShrimpPage} />
        <Route path='/spaghetti' component={SpaghettiPage} />
        <Route path='/cookingfood' component={CookingFood} />
        <Route path='/amzingbegins' component={AmazingBegins} />

      </Switch>


    </div>

  );
}


export default App;
