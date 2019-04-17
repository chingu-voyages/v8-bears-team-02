import React, { Component } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faIgloo } from '@fortawesome/free-solid-svg-icons';
// library.add(faIgloo)

import {store} from "../store";
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {ConnectedNavigation} from '../components/Navigation';
import {ConnectedQuestionList} from '../components/QuestionList';
import {ConnectedNewQuestion} from "../components/NewQuestion";
import Login from '../components/Login';

import Register from '../components/Register';


import './App.scss';

class App extends Component {
  render() {
    return (
        <Router>
            <Provider store={store}>
                <div className="App">
                    <Route exact
                           path='/'
                           component={ConnectedQuestionList}
                    />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />

                </div>
            </Provider>
        </Router>

    );
  }
}

export default App;
