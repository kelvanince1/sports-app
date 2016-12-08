import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
//Components
import App from './App';
import Home from './Components/Home';
import Start from './Components/Start';
import Rankings from './Components/Rankings';
import RbRankings from './Components/RbRankings';
import Stats from './Components/Stats';
import Sit from './Components/Sit';
import Analysis from './Components/Analysis';
import Age from './Components/Age';

// const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path={"/"} component={App}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home}></Route>
      <Route path="/start" component={Start}></Route>
      <Route path="/sit" component={Sit}></Route>
      <Route path="/rankings" component={Rankings}></Route>
      <Route path="/rbrankings" component={Rankings}></Route>
      // <Route path="/rankings" component={Rankings}></Route>
      // <Route path="/rankings" component={Rankings}></Route>
      <Route path="/stats" component={Stats}></Route>
      <Route path="/analysis" component={Analysis}></Route>
      <Route path="/age" component={Age}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
