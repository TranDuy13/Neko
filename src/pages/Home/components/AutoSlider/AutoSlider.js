import classNames from 'classnames/bind';
import styles from './AutoSlider.module.scss';

import Slider from 'react-slick';
import '~/../node_modules/slick-carousel/slick/slick.css';
import '~/../node_modules/slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';

const cx = classNames.bind(styles);

const DATA_IMAGE = [
    'https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-7.f9fb90f8.jpg&w=384&q=100',
    'https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-6.1a5f25da.jpg&w=384&q=100',
    'https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-5.634f496a.jpg&w=384&q=100',
    'https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-4.7fccaa44.jpg&w=384&q=100',
    'https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-3.8d3db520.jpg&w=384&q=100',
    'https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-1.b981dc6c.jpg&w=384&q=100',
    'https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-12.e5e9fc12.jpg&w=384&q=100',
    'https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-14.07c55f52.jpg&w=384&q=100',
];

function SampleNextArrow(props) {
    const { onClick } = props;
    return <div className={cx('slider-btn')} onClick={onClick}></div>;
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return <div className={cx('slider-btn')} onClick={onClick}></div>;
}

export default class AutoSlider extends Component {
    render() {
        const settings = {
            className: 'slider variable-width',
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            variableWidth: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <Slider {...settings}>
                {DATA_IMAGE.map((item, index) => (
                    <div key={index} className={cx('slider-boxImage-container')}>
                        <span className={cx('slider-boxImage')}>
                            <img className={cx('slider-image')} src={item} alt="Hình ảnh" />
                        </span>
                    </div>
                ))}
            </Slider>
        );
    }
}
