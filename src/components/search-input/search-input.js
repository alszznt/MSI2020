import React, { Component } from 'react';

import './search-input.css';

export default class SearchInput extends Component {


  render(){

    const { searchValue, onLabelChange, checked, searchError } = this.props;
    let className = "search-input";
    let placeholder = "Free text search...";

    if ( searchError ){
      className += " error-search-input"
      placeholder = "less than three symbols"
    }

    if ( checked === "Search" ){
      return (
        <div className = { className }>
          <input type = "text"
                 value = { searchValue }
                 onChange = { onLabelChange }
                 maxLength = "120"
                 placeholder = { placeholder } />
        </div>
      );
    }else {
      return (
        <></>
      );
    };

  };
};
