import React from 'react';
import './App.css';

import Header from './components/common/Header/header';
import Footer from './components/common/Footer/footer';
import Homepage from './components/Homepage/homepage';
import Movies from './components/Movies/movies';
import Celebrities from './components/Celebrities/celebrities';
import News from './components/News/news';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App wrap-content">
        <Header/>

        <Switch>
          <Route path='/' exact="true">
            <Homepage />
          </Route>

          <Route path='/home'>
            <Homepage />
          </Route>

          <Route path='/movies'>
            <Movies />
          </Route>

          <Route path='/celebrities'>
            <Celebrities />
          </Route>

          <Route path='/news'>
            <News />
          </Route>
        </Switch>

        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
