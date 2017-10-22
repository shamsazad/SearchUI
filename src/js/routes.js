import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/app';
import SearchBar from './components/SearchBar';

const RouteManage = () => (
    <main>
        <Route path="/" component={App} />
        <Route path="/search" component={SearchBar}/>
    </main>
);

export default RouteManage;