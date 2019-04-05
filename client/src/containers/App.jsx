import React, { Component } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faIgloo } from '@fortawesome/free-solid-svg-icons';
// library.add(faIgloo)

import {store} from "../store";
import {Provider} from 'react-redux';

import Navigation from '../components/Navigation';
import {ConnectedQuestionList} from '../components/QuestionList';
import SearchBar from '../components/SearchBar';


import './App.scss';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
              <div className="logo">
                  <h1>Logo</h1>
              </div>
              <SearchBar />
              <Navigation/>

              Chingus for the win!


              <ConnectedQuestionList />
          </div>
        </Provider>
    );
  }
}

export default App;
