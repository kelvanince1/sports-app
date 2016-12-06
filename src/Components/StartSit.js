import React, { Component } from 'react';
import axios from 'axios';
// import App from '../App.css';
// import { Link } from 'react-router';

class StartSit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    }
  }

  _playersCall() {
    let playerUrl = `https://mighty-sierra-46575.herokuapp.com/players`;
    axios.get(playerUrl).then(response => {
      this.setState({players: response.data})
    })
  }

  componentDidMount() {
    this._playersCall();
  }

  render() {
    return (
      <div>
        {this.state.players.map((player, i) => <h3 key={i}>{player}</h3>)} 
      </div>
    );
  }
}

export default StartSit;
