import React from 'react';
import HomePage from './Home/Index'
import LoginPage from './Login/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import '../styles/global.scss'


const PagesRoot = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default PagesRoot;