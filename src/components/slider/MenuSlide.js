import React, { Component } from 'react';
import Slider from 'react-slick';
import blackT from '../../assets/images/blackT.png';
import bag from '../../assets/images/bag.png';
import shose from '../../assets/images/shose.png';
import cup from '../../assets/images/cup.png';
import etc from '../../assets/images/etc.png';
import '../../css/MenuSlide.css';

export default class SwipeToSlide extends Component {
    render() {
        const settings = {
            className: 'center',
            infinite: true,
            // centerPadding: '60px',
            slidesToShow: 5,
            swipeToSlide: true,
        };
        return (
            <div className="menuslide">
                <Slider {...settings} className="asd">
                    <div className="slideImg">
                        <img src={blackT} alt="티셔츠" />
                        <p>티셔츠</p>
                    </div>
                    <div className="slideImg">
                        <img src={bag} alt="에코백" />
                        <p>에코백</p>
                    </div>
                    <div className="slideImg">
                        <img src={shose} alt="신발" />
                        <p>신발</p>
                    </div>
                    <div className="slideImg">
                        <img src={cup} alt="굿즈" />
                        <p>굿즈</p>
                    </div>
                    <div className="slideImg">
                        <img src={etc} alt="기타" />
                        <p>기타</p>
                    </div>
                    <div className="slideImg">
                        <img src={blackT} alt="티셔츠" />
                        <p>티셔츠</p>
                    </div>
                    <div className="slideImg">
                        <img src={bag} alt="에코백" />
                        <p>에코백</p>
                    </div>
                    <div className="slideImg">
                        <img src={shose} alt="신발" />
                        <p>신발</p>
                    </div>
                    <div className="slideImg">
                        <img src={cup} alt="굿즈" />
                        <p>굿즈</p>
                    </div>
                </Slider>
            </div>
        );
    }
}
