import React, { Component } from 'react';
import axios from 'axios';
// import App from '../App.css';
// import { Link } from 'react-router';

class Rankings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rankings: []
    }
  }

  _rankingsCall() {
    let rankingUrl = `https://hidden-spire-84221.herokuapp.com/player_rankings_qbs`;
    axios.get(rankingUrl).then(response => {
      this.setState({rankings: response.data})
    })
  }

  componentDidMount() {
    this._rankingsCall();
  }


  render() {
    return (
      <div>
        {this.state.rankings.map((ranking, i) => <p key={i}>{ranking.name}</p>)}
      </div>
    );
  }
}

export default Rankings;
