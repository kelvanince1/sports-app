import React, { Component } from 'react';
import App from '../App.css';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Your playoff stage is almost set</h1>
        <p><Link to="/Analysis">Check out our analysis for all the matchups this weekend -></Link></p>
        <img src='nfl.jpg' />
          <h4>
            <a href="http://www.nfl.com/playoffs/playoff-picture">Playoff Picture</a> <br />
          <Link to="/Age">Average age analysis</Link></h4>
      </div>
    );
  }
}

export default Home;
