import React, { Component } from 'react';

import JokeLoader from '../joke-loader';
import JokeCard from '../joke-card';
import Error from '../error';

import './joke-body.css';

export default class JokeBody extends Component {

  key = 100

  trasformDate(date) {
    const lastDate = +new Date(date);
    const newDate = +new Date();

    return Math.round((newDate - lastDate) / 3600000);
  };

  renderJokes(arr) {
    return arr.map(( joke ) => {

      const { deleteFavoriteJoke, onFavoriteJokeAdded } = this.props
      const updateDate = this.trasformDate( joke.updatedAt );

      return (
        <span key = { this.key++ }>
          <JokeCard joke = { joke }
                    updateDate = { updateDate }
                    deleteFavoriteJoke = { deleteFavoriteJoke }
                    onFavoriteJokeAdded = { onFavoriteJokeAdded } />
        </span>
      );
    });
  };

  render(){

    const { allJoke, error, searchNoResult, loading } = this.props
    const jokes = this.renderJokes(allJoke);
    let errorValue = "Something went wrong";

    if ( searchNoResult ) {
      errorValue = "No results with your text…"
    }

    const loader = loading ? <JokeLoader /> : null;
    const errorMassage = error ? <Error value = { errorValue } /> : null;

    return (
      <div className="joke-body">
        { loader }
        { errorMassage }
        { jokes }
      </div>
    );
  }
};
