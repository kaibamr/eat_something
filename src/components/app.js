import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import SearchResults from '../containers/searchResults';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}
