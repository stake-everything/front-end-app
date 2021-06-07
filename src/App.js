import './App.css';
// import firebase from './config/config.js';
import React from 'react';
import Banner from './components/navBar.js';
import BottomNav from './components/bottomNav.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Route, Switch} from 'react-router-dom'
// import ApiPage from './views/apiPage.js'
import Main from './views/main.js'

export default function App(){


    return(
        <div className="App">
          <Banner />
          <Main />
          <BottomNav />
        </div>
  );
  }



//   <Switch>
//   <Route path="/" exact component={Main} />
//   <Route path="/api" component={ApiPage} />
// </Switch>
// {/* <div>Words..</div> */}