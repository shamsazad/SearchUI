import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/app';
import SearchBar from './components/SearchBar';

const RouteManage = () => (
    <main>
        <Route exact path="/" component={App} />
    </main>
);

export default RouteManage;