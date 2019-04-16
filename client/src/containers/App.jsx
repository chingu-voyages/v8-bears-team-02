import React, { Component } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faIgloo } from '@fortawesome/free-solid-svg-icons';
// library.add(faIgloo)

import {store} from "../store";
import {Provider} from 'react-redux';

import {ConnectedNavigation} from '../components/Navigation';
import {ConnectedQuestionList} from '../components/QuestionList';
import {ConnectedNewQuestion} from "../components/NewQuestion";


import './App.scss';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">

              <ConnectedNavigation/>

              <ConnectedQuestionList />

              <ConnectedNewQuestion/>

          </div>
        </Provider>
    );
  }
}

export default App;
