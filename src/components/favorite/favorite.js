import React, { Component } from 'react';

import FavoriteCard from '../favorite-card';
import FavoriteNoResult from '../favorite-no-result';
import FavoriteHeader from '../favorite-header';

import './favorite.css';

export default class Favorite extends Component {

  key = 100;

  trasformDate(date) {

    const lastData = +new Date(date);
    const nowData = +new Date();

    return Math.round((nowData - lastData) / 3600000);

  }

  renderJokes(arr) {
    return arr.map(( joke ) => {

      const { deleteFavoriteJoke } = this.props
      const updateDate = this.trasformDate( joke.updatedAt );

      return (
        <span key = { this.key++ }>
          <FavoriteCard joke = { joke }
                         updateDate = { updateDate }
                         deleteFavoriteJoke = { deleteFavoriteJoke } />
        </span>
      );
    });
  };

  render() {

    const { menuOpen, onFavoriteClose, favorite } = this.props
    const jokes = this.renderJokes(favorite);
    const content = favorite.length === 0 ? <FavoriteNoResult /> : <div className = "favorite-body"> { jokes } </div>;
    const opacityBlock = menuOpen ? <div className = "favorite-active-opacity-block" /> : null

    let left = '100';

    if ( menuOpen === true ){
      if ( window.innerWidth < 767 ){
        left = '0'
      }else {
        left = '50'
      }
    }
    else if ( menuOpen === false ) {
      left = '100'
    };

    return (
      <>
        { opacityBlock }

        <div className = "favorite" style = {{left: `${left}vw`}}>
                <FavoriteHeader onFavoriteClose = { onFavoriteClose } />
                { content }
        </div>
      </>
    );
  }
}
