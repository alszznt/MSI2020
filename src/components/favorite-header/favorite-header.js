import React, { Component } from 'react';

import './favorite-header.css';

export default class FavoriteHeader extends Component {

render(){
    const { onFavoriteClose } = this.props

    if ( window.innerWidth < 1024 ) {
      return(
        <div className = "favorite-header">
          <div/>
          <div className = "favorite-close-button"
               onClick = { onFavoriteClose }>
            <div className = "favorite-close-button-circle"></div>
            <div className = "favorite-button-text">Favorite</div>
          </div>
        </div>
      );
    }else{
      return (
        <div className = "favorite-header">
          Favorite
        </div>
      );
    };
  }
}
