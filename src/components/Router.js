/** @format */

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../routes/Login';
import SignUp from '../routes/SignUp';
import Loading from './Loading';

const AppRouter = () => {
    // const [isLoading, setIsLoading] = useState(true);
    // const Loading = () => (
    //     <div>
    //         <Loading />
    //     </div>
    // );
    // const Login = () => (
    //     <div>
    //         <Login />
    //     </div>
    // );

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 3000);
    // }, []);

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
            </Switch>
        </Router>
    );
};

export default AppRouter;
