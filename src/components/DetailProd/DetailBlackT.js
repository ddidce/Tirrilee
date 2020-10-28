import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import StateBar from '../StateBar';
import BackButton from '../../assets/images/backButton.png';
import DetailTB from '../../assets/images/Detail/DetailImgB.png';
import RedHeart from '../../assets/images/redHeart.svg';
import '../../css/DetailForm.css';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="Detailform">
                <div className="header">
                    <StateBar />
                    <div className="header_name">
                        <Link to="/Home" target="_self">
                            <img
                                src={BackButton}
                                alt="backBtn"
                                className="backBtn"
                            />
                        </Link>
                        <h2>상품정보</h2>
                    </div>
                </div>
                <Slider {...settings}>
                    <div className="DetailImg">
                        <img src={DetailTB} alt="" />
                        <img className="detailHeart" src={RedHeart} alt="" />
                    </div>
                    <div className="DetailImg">
                        <img src={DetailTB} alt="" />
                        <img className="detailHeart" src={RedHeart} alt="" />
                    </div>
                    <div className="DetailImg">
                        <img src={DetailTB} alt="" />
                        <img className="detailHeart" src={RedHeart} alt="" />
                    </div>
                </Slider>
                <div className="detailDesc">
                    <div className="title">
                        <h3 className="detail_Title">티릴리 티셔츠</h3>
                        <p className="detail_com">티릴리</p>
                    </div>
                    <div className="description">
                        <p className="detail_cate">티셔츠</p>
                        <p className="detail_price">20,000원</p>
                    </div>
                </div>

                <div className="detailSize">
                    <h1 className="size_title">사이즈</h1>
                    <ul className="sizes">
                        <li className="size_kinds">
                            <p className="size_txt">XS</p>
                        </li>
                        <li className="size_kinds">
                            <p className="size_txt">S</p>
                        </li>
                        <li className="size_kinds">
                            <p className="size_txt">M</p>
                        </li>
                        <li className="size_kinds">
                            <p className="size_txt">L</p>
                        </li>
                        <li className="size_kinds">
                            <p className="size_txt">XL</p>
                        </li>
                    </ul>
                </div>

                <div className="prod_Detail">
                    <h1 className="prod_Detail_title">상품상세</h1>
                    <p className="prod_Detail_desc">
                        이 상품은 매우 예뻐요. 2030대 여성이 착용하기에 좋고요.
                        훌륭합니다. 우리 가게에 놀러와보세요.
                    </p>
                </div>

                <div className="prod_Detail_Btn">
                    <button className="question_Btn">
                        <Link href="https://tirrilee.xyz/">문의하기</Link>
                    </button>
                    <button className="cash_Btn">
                        <Link>구매하기</Link>
                    </button>
                </div>
            </div>
        );
    }
}
