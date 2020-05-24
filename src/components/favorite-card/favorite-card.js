import React, { Component } from 'react';

import './favorite-card.css';

export default class FavoriteCard extends Component {


  render(){

    const { joke, updateDate, deleteFavoriteJoke } = this.props;
    const { url, id, value } = joke;

    return (

      <div className = "favorite-card" >

          <div className = "favorite-like">
            <div/>
            <div className = "favorite-active-favorite-icon" onClick = { () => deleteFavoriteJoke( joke ) } />
          </div>

          <div className = "favorite-card-content">
                  <div className = "favorite-message">
                        <div className = "favorite-message-icon"></div>
                  </div>

                  <div className = "favorite-id-value-updated-category">
                        <div className = "favorite-id-value">
                              <a href = { url } target="_blank" rel="noopener noreferrer">
                                    <div className = "favorite-id">
                                          <div>
                                                ID: <span className = "favorite-id-color">{ id }</span>
                                          </div>
                                          <div className = "favorite-share-icon" />
                                    </div>
                              </a>

                              <div className = "favorite-value">{ value }</div>
                        </div>

                        <div className = "favorite-updated-and-category">
                              <div className = "favorite-updated-at">
                                    Last update: { updateDate } hours ago
                              </div>
                        </div>
                  </div>
          </div>

      </div>
    );
  }
};
