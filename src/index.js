import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
//Components
import App from './App';
import Home from './Components/Home';
import StartSit from './Components/StartSit';
import Rankings from './Components/Rankings';
import Stats from './Components/Stats';

// const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path={"/"} component={App}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home}></Route>
      <Route path="/startsit" component={StartSit}></Route>
      <Route path="/rankings" component={Rankings}></Route>
      <Route path="/stats" component={Stats}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
