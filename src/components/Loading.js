/** @format */

import React from 'react';
import StateBar from './StateBar';
import Logo from '../assets/images/logo.svg';
import '../css/Loading.css';

const Loading = () => {
    return (
        <div className="totalForm">
            <StateBar />
            <div className="formContents">
                <img src={Logo} className="LoadingLogo" alt="logo" />
                <p className="loadingText">연결에 가치를 더하다.</p>
            </div>
        </div>
    );
};

export default Loading;
