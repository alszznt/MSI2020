import React, { Component } from 'react';

import Categories from '../categories';

import './from-caterogies-checkbox.css';

export default class FromCaterogiesCheckbox extends Component {

  render() {

    const { onChecked, onCategorySelected, selectedCategory, checked, categoryList } = this.props

    return (
      <div className = "checkbox-and-content" >
        <label className = "joke-checkbox-label" >
          <input type="radio"
                 name = "MSI"
                 value = "From categories"
                 onClick = { onChecked }
                 className = "joke-checkbox-hidden" />
          <div className = "joke-checkbox" ></div>
          <div>From caterogies</div>
        </label>

        <Categories onCategorySelected = { onCategorySelected }
                    selectedCategory = { selectedCategory }
                    checked = {checked}
                    categoryList = { categoryList }/>
      </div>
    );
  }
}
