import React, { Component } from 'react';


class Age extends Component {
  render() {
    return (
      <div>
        <h2>The Rams are the leagues youngest team</h2>
        <p>With an average age of just 25</p>
        <img src="Rams.jpg" />
        <h2>Whereas the Falcons have the oldest</h2>
        <p>Averaging at 27.08</p>
        <img src="Falcons.jpg" />
        <h2>When you consider how young the Seahawks are,<br /> their results over the last several years is even <br /> more impressive</h2>
        <p>Their average age is just 25.6</p>
        <img src="Seahawks.jpg" />
      </div>
    );
  }
}

export default Age;
