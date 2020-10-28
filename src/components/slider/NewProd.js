import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../css/NewProd.css';
import newWhiteT from '../../assets/images/NewProd/newWhiteT.png';
import star from '../../assets/images/star.svg';
import shose from '../../assets/images/shose.png';

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 3,
        };
        return (
            <div className="newItems">
                <h2>이번달 신상품</h2>
                <Slider {...settings}>
                    <div className="prod">
                        <div className="prod_item">
                            <img
                                src={newWhiteT}
                                alt="하얀티"
                                className="itemImg"
                            />
                            <p className="name">티릴리 티셔츠</p>
                            <p className="tag">티셔츠</p>
                            <div className="price">
                                <h2>10,000</h2>
                                <div className="scroe">
                                    <img src={star} alt="" />
                                    <p>4.9점</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prod">
                        <div className="prod_item">
                            <img src={shose} alt="신발" className="itemImg" />
                            <p className="name">티릴리 신발</p>
                            <p className="tag">신발</p>
                            <div className="price">
                                <h2>30,000</h2>
                                <div className="scroe">
                                    <img src={star} alt="" />
                                    <p>4.9점</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prod">
                        <div className="prod_item">
                            <img
                                src={newWhiteT}
                                alt="하얀티"
                                className="itemImg"
                            />
                            <p className="name">티릴리 티셔츠</p>
                            <p className="tag">티셔츠</p>
                            <div className="price">
                                <h2>10,000</h2>
                                <div className="scroe">
                                    <img src={star} alt="" />
                                    <p>4.9점</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
