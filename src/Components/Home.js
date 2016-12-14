import React, { Component } from 'react';
import App from '../App.css';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <h1>Your playoff stage is almost set</h1>
        <p><Link to="/Analysis">Check out our analysis for all the matchups this weekend -></Link></p>
        <img src={require('../photos/nfl.jpg')} alt='nfl'/>
          <h4>
            <a href="http://www.nfl.com/playoffs/playoff-picture">Playoff Picture</a> <br />
          <Link to="/Age">Average age analysis</Link></h4>
          <img src={require('../photos/Cowboys-Giants.jpg')} alt='nfl'/>
          <h4 id="acid">Are Dallas set for their acid test at New York this weekend?
          <p>If there still are any doubts about the Cowboys this year, that will be alleviated pretty quickly with a win at big blue on Sunday night. Check out our weekly analysis for tips on this game</p></h4>
      </div>
    );
  }
}

export default Home;
