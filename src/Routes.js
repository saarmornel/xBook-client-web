import React from 'react';
import { Switch, Route, PrivateRoute } from 'react-router-dom';

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
                <GiveAway></GiveAway>
            </Route>
            <Route exact path="/requests">
                <Requests></Requests>
            </Route>
        </Switch>
    );
};

export default Routes;