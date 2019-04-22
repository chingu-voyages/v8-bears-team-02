import React, { Component } from 'react';

import {store} from "../store";
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {ConnectedQuestionList} from '../components/QuestionList';
import Login from '../components/Login';
import Register from '../components/Register';

import './App.scss';

class App extends Component {
  render() {
    return (
        <Router>
            <Provider store={store}>
                <div className="App">
                    <Route
                        exact
                        path='/'
                        component={ConnectedQuestionList}
                    />
                    <Route
                        exact
                        path="/register"
                        component={Register} />
                    <Route
                        exact
                        path="/login"
                        component={Login} />

                </div>
            </Provider>
        </Router>
    );
  }
}

export default App;
