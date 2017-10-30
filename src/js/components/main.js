import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/home';
import PropertyList from './property-list';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/result' component={PropertyList} />
            </Switch>
        </main>
    )
};

export default Main;