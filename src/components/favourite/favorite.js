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
        {
          menuOpen ?
          <div className = "favorite-opacity-block"
               style = {{ display: 'block', background: 'rgba(0, 0, 0, 0.3)' }}>
          </div>
          :
          <div className = "favorite-opacity-block"></div>
        }

        <div className = "favorite" style = {{left: `${left}vw`}}>

          <div className = "favorite-header">
            {
              window.innerWidth < 1024 ?
              <>
                <div/>
                <div className = "favorite-close-button"
                     onClick = { onFavoriteClose }>
                  <div className = "favorite-close-button-circle"></div>
                  <div className = "favorite-button-text">Favorite</div>
                </div>
              </>
              :
              <>Favorite</>
            }
          </div>


          { favorite.length === 0 ?
            <div className = "favorite-no-result">
              <div className = "favorite-no-result-text">No favorites yet</div>
              <div className = "favorite-no-result-cat"></div>
            </div>
            :
            <div className = "favorite-body">
              {jokes}
            </div>
          }


        </div>
      </>
    );
  }
}
