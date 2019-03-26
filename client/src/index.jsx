import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import { store} from "./store";


ReactDOM.render(<App />, document.getElementById('root'));

console.log(store.getState());