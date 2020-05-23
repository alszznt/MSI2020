import React, { Component } from 'react';

import ApiService from '../../services/api-service';

import Header from '../header';
import AppTitles from '../app-titles';
import JokeForm from '../joke-form';
import JokeBody from '../joke-body';
import Favorite from '../favorite';

import './app.css';

export default class App extends Component {

  apiService = new ApiService();

  state = {
    allJoke: [],
    checked: null,
    selectedCategory: null,
    searchValue: '',
    searchNoResult: false,
    menuOpen: false,
    favorite: [],
    categoryList: null,
    loading: false,
    error: false
  };

  onCategoryChange = ( category ) => {
    this.setState(({ selectedCategories }) => {
      return {
        selectedCategories: category
      };
    });
  };

  onError = (err) =>{
    this.setState({
      error: true,
      loading: false
    });
  };

  onJokeLoaded = (newJoke) => {


    this.setState(({ allJoke }) => {

      if ((this.state.favorite !== undefined)
          && ((this.state.favorite.findIndex((el) => el.id === newJoke.id)) !== -1))
      {
        newJoke.favorite = true
      }

      const newArr = [
        newJoke
      ];

      return {
        allJoke: newArr,
        loading: false
      }

    });
  }

  onSearchJokeLoaded = (newJoke) => {

    if (newJoke.length === 0){
      this.setState({
        searchNoResult: true,
        error: true,
      });
    }else {

      this.setState(({ allJoke }) => {

        const newArr = [
          ...newJoke
        ];

        return {
          allJoke: newArr,
          jokeLoading: false
        }
      });
    }
  }

  onRandomJoke = () => {
    this.apiService
      .getRandomJoke()
      .then(this.onJokeLoaded)
      .catch(this.onError);
  };

  onCategoriesJoke = (category) => {
    if ( this.state.selectedCategory === null ){
      this.apiService
        .getRandomCategories( category )
        .then(this.onJokeLoaded)
        .catch(this.onError);
    }else {
      this.apiService
        .getRandomCategories( this.state.selectedCategory )
        .then(this.onJokeLoaded)
        .catch(this.onError);
    }
  };

  onSearchJoke = () => {
    this.apiService
      .getSearchJoke( this.state.searchValue )
      .then(this.onSearchJokeLoaded)
      .catch(this.onError);
  }

  changeCategory = (selectedCategories) => {
    this.setState({ selectedCategories });
  };

  onChecked = (checked) => {
    this.setState({ checked });
  };

  onCategorySelected = (category) => {
    this.setState({
      selectedCategory: category
    });
  };

  onSubmit = (e) => {

    e.preventDefault();

    this.setState({
      loading: true,
      error: false,
      searchNoResult: false,
      allJoke: []
    });

    if ( this.state.checked === "Random" )  {
      this.onRandomJoke()
    }
    else if ( this.state.checked === "From categories" ) {

      if ( !this.state.selectedCategory ){
        this.setState({
          selectedCategory: this.state.categoryList[0]
        });
        this.onCategoriesJoke(this.state.categoryList[0]);
      }
      else {
        this.onCategoriesJoke();
      }

    }
    else if ( this.state.checked === "Search" ) {

      if (this.state.searchValue.length < 3){
        this.setState({
          searchValue: '',
          searchError: true,
          loading: false
        });
      }else {
        this.onSearchJoke();
        this.setState({
          searchValue: '',
          searchError: false,
          loading: false
        });
      }
    }else {
      console.log("choose joke type");
      this.setState({
        loading: false
      });
    }

  };

  onLabelChange = (e) => {
    this.setState({
      searchValue: e.target.value
    });
  };

  onFavoriteOpen = () => {
    this.setState({
      menuOpen: true
    });
  };

  onFavoriteClose = () => {
    this.setState({
      menuOpen: false
    });
  };

  onFavoriteJokeAdded = (joke) => {

    this.setState(({ favorite }) => {

      joke.favorite = true

      const newArr = [
        joke,
        ...favorite
      ];

      return {
        favorite: newArr
      }
    });

    this.setState(({ allJoke }) => {
      joke.favorite = true
    });

  };

  deleteFavoriteJoke = (joke) => {
    this.setState(({ favorite }) => {

      joke.favorite = false

      const idx = favorite.findIndex((el) => el.id === joke.id);

      const newArray = [
        ...favorite.slice(0, idx),
        ...favorite.slice(idx + 1)
      ];

      return {
        favorite: newArray
      };
    });

    this.setState(({ allJoke }) => {
      joke.favorite = false
    });

  };

  setFavorite = (favorite) =>{
    this.setState(({ favorite }) => {
      favorite = true
    });
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('favorite', JSON.stringify(nextState.favorite));
  };

  UNSAFE_componentWillMount() {
    localStorage.getItem('favorite') && this.setState ({
      favorite: JSON.parse(localStorage.getItem('favorite'))
    });
  };

  componentDidMount(){
    this.apiService
      .getAllCategories()
      .then((categoryList) => {
        this.setState({
          categoryList
        });
      });
  }



  render(){

    return(
      <div className = "app">
        <div className = "app-content">
          <Header menuOpen = { this.state.menuOpen }
                  onFavoriteOpen = { this.onFavoriteOpen } />
          <div className = "app-jokes">
            <AppTitles />
            <JokeForm onChecked = { this.onChecked }
                      onCategorySelected = { this.onCategorySelected }
                      state = { this.state }
                      onSubmit = { this.onSubmit }
                      onLabelChange = { this.onLabelChange }/>

            <JokeBody allJoke = { this.state.allJoke }
                      onFavoriteJokeAdded = { this.onFavoriteJokeAdded }
                      deleteFavoriteJoke = { this.deleteFavoriteJoke }
                      loading = { this.state.loading }
                      error = { this.state.error }
                      searchNoResult = { this.state.searchNoResult }
                      favorite = { this.state.favorite }
                      setFavorite = { this.setFavorite }/>
          </div>
        </div>
        <Favorite menuOpen = { this.state.menuOpen }
                  onFavoriteClose = { this.onFavoriteClose }
                  deleteFavoriteJoke = { this.deleteFavoriteJoke }
                  favorite = { this.state.favorite } />
      </div>
    );
  };
};
