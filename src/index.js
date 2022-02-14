/* eslint-disable new-cap */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Header from './components/header';
import About from './components/about';
import Other from './components/other';
import Portfolio from './components/portfolio';
import Art from './components/art';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'about',
    };
  }

  componentDidMount() {
  }

  handlePageChange = (newPage) => {
    this.setState({ page: newPage });
  }

  renderPage() {
    if (this.state.page === 'art') {
      return (
        <div>
          <div className="display">art</div>
          <Art />
        </div>
      );
    } else if (this.state.page === 'portfolio') {
      return (
        <div>
          <div className="display">portfolio</div>
          <Portfolio />
        </div>
      );
    } else if (this.state.page === 'other') {
      return (
        <div>
          <div className="display">other</div>
          <Other />
        </div>
      );
    } else {
      return (
        <div>
          <div className="display">about</div>
          <About />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Header handlePageChange={this.handlePageChange} />;
        {this.renderPage()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
