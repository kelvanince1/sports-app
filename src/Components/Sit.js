import React, { Component } from 'react';
import axios from 'axios';
// import App from '../App.css';
// import { Link } from 'react-router';

class Sit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    }
  }

  _playersCall() {
    let playerUrl = `https://hidden-spire-84221.herokuapp.com/sits`;
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
        <div id="headers">
          <h3>Sit em</h3>
        </div>
        {this.state.players.map((sit, i) => <ol><li key={i}>{sit.player}, {sit.sit_em}</li></ol>)}
      </div>
    );
  }
}

export default Sit;
