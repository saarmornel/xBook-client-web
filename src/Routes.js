import React from 'react';
import { Switch, Route, PrivateRoute } from 'react-router-dom';
import Explore from './screens/Explore';
import AddBook from './screens/AddBook';
import Giveaway from './screens/Giveaway';
import Reading from './screens/Reading';
import Requests from './screens/Requests';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/explore">
                <Explore></Explore>
            </Route>
            <Route exact path="/add_book">
                <AddBook></AddBook>
            </Route>
            <Route exact path="/reading">
                <Reading></Reading>
            </Route>
            <Route exact path="/giveaway">
                <Giveaway></Giveaway>
            </Route>
            <Route exact path="/requests">
                <Requests></Requests>
            </Route>
        </Switch>
    );
};

export default Routes;