

import React, { Component } from 'react';

import './App.css';
import UpperHeader from './components/upper-header/upper-header.component';
import Header2 from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

import HomeMenuPage from './pages/home-menupage/home-menupage.component';

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
