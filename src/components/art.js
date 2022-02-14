import React, { Component } from 'react';

class Art extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: 'digital',
        };
    }

    handleSectionChange = (newSection) => {
        this.setState({ section: newSection });
    }

    renderSection() {
        if (this.state.section === 'paintings') {
            return (
              <div>
                <div className="display">paintings</div>
              </div>
            );
        } else if (this.state.section === 'drawings') {
            return (
              <div>
                <div className="display">drawings</div>
              </div>
            );
        } else {
            return (
              <div>
                <div className="display">digital</div>
              </div>
            );
        }
    }

    render() {
        return (
          <div>
            <div className="section">
              <div className="nav">
                <button type="button" id="#digital-button" onClick={() => this.handleSectionChange('digital')}>digital art</button>
                |
                <button type="button" id="#paintings-button" onClick={() => this.handleSectionChange('paintings')}>paintings</button>
                |
                <button type="button" id="#drawings-button" onClick={() => this.handleSectionChange('drawings')}>drawings</button>
              </div>
            </div>
            {this.renderSection()}
          </div>
        );
    }
}

export default Art;
