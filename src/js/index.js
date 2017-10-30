import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router} from 'react-router-dom';
import promise from 'redux-promise';
import createDebounce from 'redux-debounced';

import reducers from './reducers/index';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(
    promise,
    createDebounce()
)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.querySelector('.app'));
