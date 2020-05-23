import React, { Component } from 'react';

import RandomCheckbox from '../random-checkbox';
import FromCaterogiesCheckbox from '../from-caterogies-checkbox';
import SearchCheckbox from '../search-checkbox';

import './joke-form.css';

export default class JokeForm extends Component {

  onChecked = (e) => {
    const checked = e.target.value;
    this.props.onChecked(checked);
  };

  render() {

    const { onSubmit, onCategorySelected, onLabelChange, state } = this.props
    const { selectedCategory, checked, categoryList, searchValue, searchError } = state

    return (
      <form className="joke-form"
            onSubmit = { onSubmit }>

      <div className = "all-joke-checkboxes">

            <RandomCheckbox onChecked = { this.onChecked } />
            <FromCaterogiesCheckbox onCategorySelected = { onCategorySelected }
                                    selectedCategory = { selectedCategory }
                                    checked = {checked}
                                    categoryList = { categoryList }
                                    onChecked = { this.onChecked } />
            <SearchCheckbox searchValue = { searchValue }
                            onLabelChange = { onLabelChange }
                            checked = { checked }
                            searchError = { searchError }
                            onChecked = { this.onChecked } />

        </div>

        <button className = "get-joke-button">
          Get Joke
        </button>

      </form>
    );
  }
}
