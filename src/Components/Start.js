import React, { Component } from 'react';
import axios from 'axios';
// import App from '../App.css';
// import { Link } from 'react-router';

class StartSit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starts: []
    }
  }

  _startsCall() {
    let startsUrl = `https://hidden-spire-84221.herokuapp.com/starts`;
    axios.get(startsUrl).then(response => {
      this.setState({starts: response.data})
    })
  }

  componentDidMount() {
    this._startsCall();
  }

  render() {
    return (
      <div>
        <div className="headers">
          <h3>Start em</h3>
        </div>
        {this.state.starts.map((start, i) => <p key={i}>{start.player} {start.start_em}</p>)}
      </div>
    );
  }
}

export default StartSit;
