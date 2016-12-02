import React, { Component } from 'react';
import App from '../App.css';
import { Link } from 'react-router';

class Stats extends Component {
  render() {
    return (
      <div>
        <nav id="homebar">
          <ul>
          <li><Link to="Home">Sports App</Link></li>
          <li><Link to="Start/Sit">Start/Sit</Link></li>
          <li><Link to="Rankings">Rankings</Link></li>
          <li><Link to="Stats">Stats</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Stats;
