import React, { Component } from 'react';

import './joke-card.css';

export default class JokeCard extends Component {


  render(){

    const { joke, updateDate, deleteFavoriteJoke, onFavoriteJokeAdded } = this.props;
    const { favorite, url, id, value, categories } = joke;
    const category = categories.length === 0 ? null : <div className = "joke-category"> { categories } </div>;

    return (

      <div className = "joke-card" >

        <div className = "message">
          <div className = "message-icon"></div>
        </div>

        <div className = "joke-card-content">

          <div className = "joke-favorite-id-value">

            <div className = "favorite-like">
              <div/>
              {
                favorite ?
                <div className = "active-favorite-icon" onClick = { () => deleteFavoriteJoke( joke ) } />
                :
                <div className = "favorite-icon" onClick = { () => onFavoriteJokeAdded( joke ) } />
              }
            </div>

            <div className = "joke-id-value">
              <a href = { url } target="_blank" rel="noopener noreferrer">
                <div className = "joke-id">
                  <div>
                    ID: <span className = "joke-id-color">{ id }</span>
                  </div>
                  <div className = "share-icon" />
                </div>
              </a>

              <div className = "joke-value">{ value }</div>
            </div>

          </div>

          <div className = "joke-updated-and-category">
            <div className = "joke-updatedAt">
              Last update: { updateDate } hours ago
            </div>
            { category }
          </div>
        </div>

      </div>
    );
  }
};
