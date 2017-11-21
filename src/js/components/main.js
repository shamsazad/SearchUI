import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/home';
import PropertyList from './property-list';
import PostAd from './post/postad';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/result' component={PropertyList} />
                <Route path='/postAd' component={PostAd} />
            </Switch>
        </main>
    )
};

export default Main;