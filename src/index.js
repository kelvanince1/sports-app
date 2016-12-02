import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import './index.css';
//Components
import Home from './Components/Home';
import StartSit from './Components/StartSit';
import Rankings from './Components/Rankings';
import Stats from './Components/Stats';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Home} />
      <Route path="startsit" component={StartSit}/>
      <Route path="rankings" component={Rankings}/>
      <Route path="stats" component={Stats}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
