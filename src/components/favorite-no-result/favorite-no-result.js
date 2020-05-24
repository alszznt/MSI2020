import React from 'react';

import './favorite-no-result.css';

const FavoriteNoResult = () => {
  return (
    <div className = "favorite-no-result">
        <div className = "favorite-no-result-text">No favorites yet</div>
        <div className = "favorite-no-result-cat" />
    </div>
  );
};

export default FavoriteNoResult;
