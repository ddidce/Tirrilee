import React, { useState } from 'react';
import Home from '../assets/images/Navi/Home.svg';
import Search from '../assets/images/Navi/Search.svg';
import Product from '../assets/images/Navi/Product.svg';
import MyPage from '../assets/images/Navi/MyPage.svg';
import BlueHome from '../assets/images/Navi/BlueHome.svg';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const NavBar = () => {
    const [change, setchange] = useState(false);
    const onchange = () => {
        return change ? (
            <img src={BlueHome} alt="선택홈" />
        ) : (
            <img src={Home} alt="홈" />
        );
    };

    const handleClick = (e) => {
        setchange(true);
        console.log(change);
    };
    return (
        <>
            <ul>
                <li>
                    <Link to="/Home" className="navBar">
                        <img src={BlueHome} alt="홈" className="imgHome" />
                        <p className="navHome">홈</p>
                    </Link>
                </li>
                <li>
                    <Link to="/Search" className="navBar">
                        <img src={Search} alt="검색" />
                        <p className="navSearch">검색</p>
                    </Link>
                </li>
                <li>
                    <Link to="/Product" className="navBar">
                        <img src={Product} alt="상품등록" />
                        <p className="navProd">상품 등록</p>
                    </Link>
                </li>
                <li>
                    <Link to="/MyPage" className="navBar">
                        <img src={MyPage} alt="마이페이지" />
                        <p className="navMyPg">마이페이지</p>
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default NavBar;
