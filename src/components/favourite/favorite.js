import React, { Component } from 'react';

import FavoriteCard from '../favorite-card';

import './favorite.css';

export default class Favorite extends Component {

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
        <span key = { joke.id }>
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
    const content = favorite.length === 0 ? <FavoriteNoResult /> : <FavoriteNoResult />;
    const headerContent = window.innerWidth < 1024 ? <FavoriteHeaderContent /> : <>Favorite</>;
    const onMenuOpen = menuOpen ? <div className = "favorite-opacity-block favorite-active-opacity-block"/> : <div className = "favorite-opacity-block"></div>

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
        { onMenuOpen }

        <div className = "favorite" style = {{left: `${left}vw`}}>
          <div className = "favorite-header">
            { headerContent }
          </div>
          { content }
        </div>
      </>
    );
  }
}

const FavoriteHeaderContent = ( onFavoriteClose ) =>{
  <>
    <div/>
    <div className = "favorite-close-button"
         onClick = { onFavoriteClose }>
      <div className = "favorite-close-button-circle"></div>
      <div className = "favorite-button-text">Favorite</div>
    </div>
  </>
}

const FavoriteContent = (jokes) => {
  <div className = "favorite-body">
    { jokes }
  </div>
}

const FavoriteNoResult = () =>{
  return (
    <div className = "favorite-no-result">
      <div className = "favorite-no-result-text">No favorites yet</div>
      <div className = "favorite-no-result-cat"></div>
    </div>
  );
}
