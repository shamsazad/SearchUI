import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';

require('../postcss/style.css');
require('react-datepicker/dist/react-datepicker.css');

const createStoreWithMiddleware = applyMiddleware(
    promise
)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router routes={routes} />
    </Provider>
    , document.getElementById('.container'));
