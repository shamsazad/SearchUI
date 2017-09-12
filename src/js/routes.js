import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';

import App from './components/app';
import SearchBar from './components/SearchBar';

export default (
    <Route exact path="/" component={App}>
    </Route>
);
