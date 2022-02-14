/* eslint-disable new-cap */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Header from './components/header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
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
