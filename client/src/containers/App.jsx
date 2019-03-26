import React, { Component } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faIgloo } from '@fortawesome/free-solid-svg-icons';
// library.add(faIgloo)

import Navigation from '../components/Navigation';
import QuestionList from '../components/QuestionList';
import SearchBar from '../components/SearchBar';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        Chingus for the win!
        <SearchBar />
        <QuestionList />
      </div>
    );
  }
}

export default App;
