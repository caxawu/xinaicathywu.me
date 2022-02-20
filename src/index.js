/* eslint-disable new-cap */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import ReactGA from 'react-ga';
import Header from './components/header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    ReactGA.initialize('G-5YGCMP79VW');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
