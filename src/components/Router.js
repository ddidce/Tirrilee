/** @format */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import Login from '../routes/Login';
import SignUp from '../routes/SignUp';
import Loading from './Loading';
import DetailBlackT from '../components/DetailProd/DetailBlackT';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Loading />
                </Route>

                <Route exact path="/Login">
                    <Login />
                </Route>

                <Route exact path="/SignUp">
                    <SignUp />
                </Route>

                <Route exact path="/Home">
                    <Home />
                </Route>

                <Route exact path="/Detail">
                    <DetailBlackT />
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
