import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/app';
import SearchBar from './components/SearchBar';

export default (
    <main>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/" component={SearchBar} />
        </Switch>
    </main>
);
