import React, { Component } from 'react';
import axios from 'axios';
// import App from '../App.css';
import { Link } from 'react-router';

class Rankings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rankings: [],
      rbRankings: [],
      wrRankings: [],
      teRankings: []

    }
    this._rankingsCall = this._rankingsCall.bind(this)
    this._rbRankingsCall = this._rbRankingsCall.bind(this)
    this._wrRankingsCall = this._wrRankingsCall.bind(this)
    this._teRankingsCall = this._teRankingsCall.bind(this)
  }

  _rankingsCall() {
    let rankingUrl = `https://hidden-spire-84221.herokuapp.com/player_rankings_qbs`;
    axios.get(rankingUrl).then(response => {
      this.setState({rankings: response.data})
    })
  }

  _rbRankingsCall() {
    let rbRankingUrl = `https://hidden-spire-84221.herokuapp.com/player_rankings_rbs`;
    axios.get(rbRankingUrl).then(response => {
      this.setState({rbRankings: response.data})
    })
  }

  _wrRankingsCall() {
    let wrRankingUrl = `https://hidden-spire-84221.herokuapp.com/player_rankings_wrs`;
    axios.get(wrRankingUrl).then(response => {
      this.setState({wrRankings: response.data})
    })
  }

  _teRankingsCall() {
    let teRankingUrl = `https://hidden-spire-84221.herokuapp.com/player_rankings_tes`;
    axios.get(teRankingUrl).then(response => {
      this.setState({teRankings: response.data})
    })
  }

  // componentDidMount() {
  //   this._rankingsCall();
  // }


  render() {
    return (
      <div id="rankings">
        <div>
        <div id="Qbrankings">
          <h3 onClick={this._rankingsCall}>Quarterbacks</h3>
        </div>
        {this.state.rankings.map((ranking, i) => <p key={i}>{ranking.name}</p>)}
        </div>

        <div>
        <div id="Rbrankings">
          <h3 onClick={this._rbRankingsCall}>Running Backs</h3>
        </div>
        {this.state.rbRankings.map((rbranking, x) => <p key={x}>{rbranking.name}</p>)}
        </div>

        <div>
        <div id="Wrrankings">
          <h3 onClick={this._wrRankingsCall}>Wide Receivers</h3>
        </div>
        {this.state.wrRankings.map((wrranking, x) => <p key={x}>{wrranking.name}</p>)}
        </div>

        <div>
        <div id="Terankings">
          <h3 onClick={this._teRankingsCall}>Tight Ends</h3>
        </div>
        {this.state.teRankings.map((teranking, x) => <p key={x}>{teranking.name}</p>)}
        </div>
      </div>
    );
  }
}

export default Rankings;
