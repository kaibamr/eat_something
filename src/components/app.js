import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import RecipesList from '../containers/recipesList';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <RecipesList />
      </div>
    );
  }
}
