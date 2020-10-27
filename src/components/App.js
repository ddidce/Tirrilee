/** @format */

import React, { useEffect, useState } from 'react';
import '../css/SignUp.css';
import Login from '../routes/Login';
import Loading from './Loading';
import AppRouter from './Router';

const App = () => {
    // const [isLoading, setIsLoading] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false);
    //         console.log('하이');
    //     }, 2000);
    //     console.log('끝');
    //     return () => clearTimeout(isLoading);
    // }, []);

    return <AppRouter />;
    // <>{isLoading ? <Loading /> : <Login />}</>;
};
export default App;
