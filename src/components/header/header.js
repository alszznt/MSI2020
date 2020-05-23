import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {

  render(){
    return (
      <div className="header">
        <h1>MSI 2020</h1>
        {
          window.innerWidth < 1024 ?
          <div className = "favorite-open-button" onClick = { this.props.onFavoriteOpen }>
            <div className = "favorite-open-button-circle"></div>
            <div className = "favorite-button-text">Favorite</div>
          </div>
          :
          <></>
        }
      </div>
    );
  }
};
