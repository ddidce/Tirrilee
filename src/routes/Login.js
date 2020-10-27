/** @format */

import React from 'react';
import StateBar from '../components/StateBar';
import Logo from '../assets/images/logo.svg';
import '../css/Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="totalForm">
            <StateBar />
            <img src={Logo} alt="" className="logo" />
            <div className="loginForm">
                <input
                    type="text"
                    placeholder="아이디(이메일)"
                    className="id"
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="password"
                />
            </div>
            <div className="idSave">
                <input type="checkbox" id="idSave" />
                <label htmlFor="idSave">로그인 상태 유지하기</label>
            </div>
            <div className="button">
                <button className="loginBtn">로그인</button>
                <Link to="/SignUp">
                    <button className="signUpBtn">회원가입</button>
                </Link>
            </div>
            <p className="text">
                회원가입 없이 카카오톡 계정만으로 바로 이용이 가능합니다.
                <br />
                로그인 시, <span>이용약관 및 개인정보처리방침 동의</span>로
                간주됩니다.
            </p>
        </div>
    );
};

export default Login;
