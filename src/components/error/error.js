import React, { Component } from 'react';

import './error.css';

export default class Error extends Component {

  render() {

    const { value } = this.props

    return (
      <div className="error">
        <div className = "error-cat">
          <div className = "cat-icon"></div>
        </div>
        <div className = "error-text">{ value }</div>
      </div>
    );
  }
};
