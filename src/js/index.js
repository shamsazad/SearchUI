import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import RouteManage from './routes';

const createStoreWithMiddleware = applyMiddleware(
    promise
)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <RouteManage />
        </Router>
    </Provider>
    , document.querySelector('.app'));
