import React, { Component } from 'react';
import Slider from 'react-slick';
import blackT from '../../assets/images/BestProd/bestProdB.png';
import whiteT from '../../assets/images/BestProd/bestProdW.png';
import star from '../../assets/images/star.svg';
import emptyHeart from '../../assets/images/noneHeart.svg';
import '../../css/BestProd.css';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        };

        return (
            <div className="itemLists">
                <h2>티릴리 베스트 상품</h2>
                <Slider {...settings}>
                    <div className="bestItem">
                        <img src={blackT} alt="" />
                        <img src={emptyHeart} alt="" className="heart" />
                        <div className="itemDesc">
                            <h3>검정 반팔티</h3>
                            <div className="desc">
                                <p>티셔츠</p>
                                <img src={star} alt="" />
                                <p>4.9점</p>
                            </div>
                            <h2>10,000원</h2>
                        </div>
                    </div>
                    <div className="bestItem">
                        <img src={whiteT} alt="" />
                        <img src={emptyHeart} alt="" className="heart" />
                        <div className="itemDesc">
                            <h3>하얀 반팔티</h3>
                            <div className="desc">
                                <p>티셔츠</p>
                                <img src={star} alt="" />
                                <p>4.9점</p>
                            </div>
                            <h2>12,000원</h2>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
