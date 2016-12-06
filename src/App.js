import React, { Component } from 'react';
// import Home from './Components/Home';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <nav id="homebar">
          <ul>
          <li><Link to={"/home"}>SportsApp</Link></li>
          <li><Link to={"/startsit"}>StartSit</Link></li>
          <li><Link to={"/rankings"}>Rankings</Link></li>
          <li><Link to={"/stats"}>Stats</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
