import React, { Component } from 'react';

import './categories.css';

export default class Categories extends Component {

  renderCategory(arr) {
    return arr.map((category) => {

      const { selectedCategory, onCategorySelected } = this.props
      let className = "category-button"

      if (selectedCategory === category ){
        className += " active-category-button"
      }

      return (
        <div key={ category }
             onClick = {() => onCategorySelected(category) }
             className = { className }>
          { category }
        </div>
      );
    });
  };

  render() {

    const { categoryList } = this.props;
    const { checked } = this.props;

    if (!categoryList) {
      return null
    }

    const category = this.renderCategory(categoryList);

    if ( checked === "From categories"){
      return (
        <div className = "categories" >
          { category }
        </div>
      )
    }

    return (
      null
    );

  }
}
