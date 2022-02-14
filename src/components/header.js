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
          <button type="button" id="#about-button" onClick={() => this.props.handlePageChange('about')}>about</button>
          <button type="button" id="#portfolio-button" onClick={() => this.props.handlePageChange('portfolio')}>portfolio</button>
          <button type="button" id="#other-button" onClick={() => this.props.handlePageChange('other')}>other works</button>
          <button type="button" id="#art-button" onClick={() => this.props.handlePageChange('art')}>studio & digital art</button>
        </div>
      </div>
    );
  }
}

export default Header;
