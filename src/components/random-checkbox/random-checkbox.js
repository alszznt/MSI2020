import React, { Component } from 'react';

import './random-checkbox.css';

export default class RandomCheckbox extends Component {

  render() {

    const { onChecked, defaultChecked } = this.props

    return (
      <div className = "checkbox-and-content" >
        <label className = "joke-checkbox-label" >
          <input type="radio"
                 name = "MSI"
                 value = "Random"
                 checked = { defaultChecked }
                 onChange = { onChecked }
                 className = "joke-checkbox-hidden" />
          <div className = "joke-checkbox" ></div>
          <div>Random</div>
        </label>
      </div>
    );
  }
}
