import React from 'react';
import { 
    Switch,
    Route
} from 'react-router-dom';

import Home from './Views/Home';
import Cart from './Views/Cart';
export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
        </Switch>
    )
}