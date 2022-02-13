import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="header">
        <div className="logo">Xinai (Cathy) Wu</div>
        <div className="nav">
          <a href="index.html">about</a>
          <a href="index.html">portfolio</a>
          <a href="index.html">other works</a>
          <a href="index.html">studio & digital art</a>
        </div>
      </div>
    );
  }
}

export default Header;
