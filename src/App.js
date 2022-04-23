import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import HomeMenuPage from './pages/home-menupage/home-menupage.component';

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
      </Switch>
      
    </div>

  );
}


export default App;
