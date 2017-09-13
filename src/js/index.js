import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import App from './components/app';
import SearchBar from './components/SearchBar';

import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(
    promise
)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
        <main>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/" component={SearchBar} />
            </Switch>
        </main>
        </Router>
    </Provider>
    , document.getElementById('.container'));
