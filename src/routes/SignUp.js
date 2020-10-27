/** @format */

import React, { useState } from 'react';
import '../css/SignUp.css';
import StateBar from '../components/StateBar';
import BackButton from '../assets/images/backButton.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nick, setNick] = useState('');
    const [phone, setPhone] = useState('');

    //이메일 유효성검사
    const checkedE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //패스워드 유효성검사
    const checkedPass = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/;

    const onChangeBtn = () => {
        return checkedE.test(email) &&
            checkedPass.test(password) &&
            nick &&
            phone
            ? 'trueBtn'
            : 'falseBtn';
    };
    //이메일 핸들링
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    //패스워드 핸들링
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangeNick = (e) => {
        setNick(e.target.value);
    };

    const onchangePhone = (e) => {
        setPhone(e.target.value);
    };

    console.log([email, password, nick, phone]);
    return (
        <div className="totalForm">
            <div className="header">
                <StateBar />
                <div className="header_name">
                    <Link to="/Login" target="_self">
                        <img
                            src={BackButton}
                            alt="backBtn"
                            className="backBtn"
                        />
                    </Link>
                    <h2>회원가입</h2>
                </div>
            </div>
            <p className="infoTxt">가입 정보를 입력해주세요 :)</p>
            <form className="infoForm">
                <div className="emailForm">
                    <label htmlFor="">이메일</label>
                    <div className="emailField">
                        <input
                            type="email"
                            placeholder="이메일을 입력해주세요."
                            onChange={onChangeEmail}
                            value={email}
                        />
                        {checkedE.test(email) && (
                            <div
                                style={{
                                    color: 'red',
                                    zIndex: '1',
                                    fontSize: '9px',
                                }}
                            >
                                올바른 이메일입니다.
                            </div>
                        )}
                    </div>
                </div>

                <div className="pwdForm">
                    <label htmlFor="">비밀번호</label>
                    <div className="pwdField">
                        <input
                            type="password"
                            placeholder="숫자,영문,특수문자 포함 12자"
                            onChange={onChangePassword}
                            value={password}
                            maxLength="12"
                        />
                        {checkedPass.test(password) && (
                            <div
                                style={{
                                    color: 'red',
                                    zIndex: '1',
                                    fontSize: '9px',
                                }}
                            >
                                올바른 패스워드입니다.
                            </div>
                        )}
                    </div>
                </div>

                <div className="nickForm">
                    <label htmlFor="">닉네임</label>
                    <div className="nickField">
                        <input
                            type="text"
                            placeholder="티릴리에서 사용할 닉네임을 입력해주세요."
                            onChange={onChangeNick}
                            value={nick}
                            minLength="5"
                        />
                    </div>
                </div>

                <div className="phoneForm">
                    <label htmlFor="">연락처</label>
                    <div className="phoneField">
                        <input
                            type="number"
                            placeholder='"-"제외, 숫자만 입력해주세요.'
                            onChange={onchangePhone}
                            value={phone}
                            minLength="8"
                        />
                    </div>
                </div>
            </form>
            {/* <button style={{ backgroundColor: email && password ? "#226bef" : null }}> */}
            <button className={onChangeBtn()}>가입완료</button>
        </div>
    );
};
export default SignUp;
