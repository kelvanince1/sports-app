import React, { Component } from 'react';
import axios from 'axios';

class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: []
    }
  }

  _statsCall() {
    let statsUrl = `https://hidden-spire-84221.herokuapp.com/teams`;
    axios.get(statsUrl).then(response => {
      this.setState({stats: response.data})
    })
  }

  componentDidMount() {
    this._statsCall();
  }

  render() {
    return (
      <div>
        <div className="headers">
          <h3>Defensive Team Stats</h3>
          <h5>Team, pass yds allowed, rush yds allowed, pts allowed, avg age</h5>
        </div>
        {this.state.stats.map((stat, i) => <p key={i}>{stat.team}, {stat.passing_yards_allowed},  {stat.rushing_yards_allowed}, {stat.points_allowed}, {stat.average_age}</p>)}
      </div>
    );
  }
  }

export default Stats;
