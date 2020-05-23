import React, { Component } from 'react';

import SearchInput from '../search-input';

import './search-checkbox.css';

export default class SearchCheckbox extends Component {

  render() {

    const { onChecked, searchValue, onLabelChange, checked, searchError } = this.props;

    return (
      <div className = "checkbox-and-content" >
        <label className = "joke-checkbox-label" >
          <input type = "radio"
                 name = "MSI"
                 value = "Search"
                 onClick = { onChecked }
                 className = "joke-checkbox-hidden" />
          <div className = "joke-checkbox" ></div>
          <div>Search</div>
        </label>

        <SearchInput searchValue = { searchValue }
                     onLabelChange = { onLabelChange }
                     checked = { checked }
                     searchError = { searchError }/>

      </div>
    );
  }
}
