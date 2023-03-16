import classNames from 'classnames/bind';
import styles from './PreviousNextSection.module.scss';

import Slider from 'react-slick';
import '~/../node_modules/slick-carousel/slick/slick.css';
import React, { Component } from 'react';
import '~/../node_modules/slick-carousel/slick/slick-theme.css';
import { LeftIcon, RightIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className={cx('slider-btn-next')} onClick={onClick}>
            <RightIcon />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className={cx('slider-btn-pre')} onClick={onClick}>
            <LeftIcon />
        </div>
    );
}

export default class PreviousNextSection extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                  }
                },
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className={cx('product-item-wrapper')}>
                        <div className={cx('product-item')}>
                            <Link to="/" className={cx('product-image-box')}>
                                <div className={cx('product-image-container')}>
                                    <span className={cx('product-image-inner')}>
                                        <img
                                            className={cx('product-image')}
                                            src="https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fd96eb53c23516f6ca600411b8495131f%2Fb%2Ft%2Fbt.calm.png&w=640&q=75"
                                            alt="Hình ảnh"
                                        />
                                    </span>
                                </div>
                            </Link>
                            <div className={cx('addToCart')}>
                                <button className={cx('addToCart-btn')}>
                                    <span>THÊM VÀO GIỎ HÀNG</span>
                                </button>
                            </div>
                            <Link to="/" className={cx('product-name')}>
                                <h4 className={cx('name-title')}>CALM</h4>
                            </Link>
                            <div className={cx('product-price')}>
                                <span className={cx('price-number')}>2.399.000&nbsp;₫</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-item-wrapper')}>
                        <div className={cx('product-item')}>
                            <Link to="/" className={cx('product-image-box')}>
                                <div className={cx('product-image-container')}>
                                    <span className={cx('product-image-inner')}>
                                        <img
                                            className={cx('product-image')}
                                            src="https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fd96eb53c23516f6ca600411b8495131f%2Fb%2Ft%2Fbt.calm.png&w=640&q=75"
                                            alt="Hình ảnh"
                                        />
                                    </span>
                                </div>
                            </Link>
                            <div className={cx('addToCart')}>
                                <button className={cx('addToCart-btn')}>
                                    <span>THÊM VÀO GIỎ HÀNG</span>
                                </button>
                            </div>
                            <Link to="/" className={cx('product-name')}>
                                <h4 className={cx('name-title')}>CALM</h4>
                            </Link>
                            <div className={cx('product-price')}>
                                <span className={cx('price-number')}>2.399.000&nbsp;₫</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-item-wrapper')}>
                        <div className={cx('product-item')}>
                            <Link to="/" className={cx('product-image-box')}>
                                <div className={cx('product-image-container')}>
                                    <span className={cx('product-image-inner')}>
                                        <img
                                            className={cx('product-image')}
                                            src="https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fd96eb53c23516f6ca600411b8495131f%2Fb%2Ft%2Fbt.calm.png&w=640&q=75"
                                            alt="Hình ảnh"
                                        />
                                    </span>
                                </div>
                            </Link>
                            <div className={cx('addToCart')}>
                                <button className={cx('addToCart-btn')}>
                                    <span>THÊM VÀO GIỎ HÀNG</span>
                                </button>
                            </div>
                            <Link to="/" className={cx('product-name')}>
                                <h4 className={cx('name-title')}>CALM</h4>
                            </Link>
                            <div className={cx('product-price')}>
                                <span className={cx('price-number')}>2.399.000&nbsp;₫</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-item-wrapper')}>
                        <div className={cx('product-item')}>
                            <Link to="/" className={cx('product-image-box')}>
                                <div className={cx('product-image-container')}>
                                    <span className={cx('product-image-inner')}>
                                        <img
                                            className={cx('product-image')}
                                            src="https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fd96eb53c23516f6ca600411b8495131f%2Fb%2Ft%2Fbt.calm.png&w=640&q=75"
                                            alt="Hình ảnh"
                                        />
                                    </span>
                                </div>
                            </Link>
                            <div className={cx('addToCart')}>
                                <button className={cx('addToCart-btn')}>
                                    <span>THÊM VÀO GIỎ HÀNG</span>
                                </button>
                            </div>
                            <Link to="/" className={cx('product-name')}>
                                <h4 className={cx('name-title')}>CALM</h4>
                            </Link>
                            <div className={cx('product-price')}>
                                <span className={cx('price-number')}>2.399.000&nbsp;₫</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-item-wrapper')}>
                        <div className={cx('product-item')}>
                            <Link to="/" className={cx('product-image-box')}>
                                <div className={cx('product-image-container')}>
                                    <span className={cx('product-image-inner')}>
                                        <img
                                            className={cx('product-image')}
                                            src="https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fd96eb53c23516f6ca600411b8495131f%2Fb%2Ft%2Fbt.calm.png&w=640&q=75"
                                            alt="Hình ảnh"
                                        />
                                    </span>
                                </div>
                            </Link>
                            <div className={cx('addToCart')}>
                                <button className={cx('addToCart-btn')}>
                                    <span>THÊM VÀO GIỎ HÀNG</span>
                                </button>
                            </div>
                            <Link to="/" className={cx('product-name')}>
                                <h4 className={cx('name-title')}>CALM</h4>
                            </Link>
                            <div className={cx('product-price')}>
                                <span className={cx('price-number')}>2.399.000&nbsp;₫</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-item-wrapper')}>
                        <div className={cx('product-item')}>
                            <Link to="/" className={cx('product-image-box')}>
                                <div className={cx('product-image-container')}>
                                    <span className={cx('product-image-inner')}>
                                        <img
                                            className={cx('product-image')}
                                            src="https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fd96eb53c23516f6ca600411b8495131f%2Fb%2Ft%2Fbt.calm.png&w=640&q=75"
                                            alt="Hình ảnh"
                                        />
                                    </span>
                                </div>
                            </Link>
                            <div className={cx('addToCart')}>
                                <button className={cx('addToCart-btn')}>
                                    <span>THÊM VÀO GIỎ HÀNG</span>
                                </button>
                            </div>
                            <Link to="/" className={cx('product-name')}>
                                <h4 className={cx('name-title')}>CALM</h4>
                            </Link>
                            <div className={cx('product-price')}>
                                <span className={cx('price-number')}>2.399.000&nbsp;₫</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-item-wrapper')}>
                        <div className={cx('product-item')}>
                            <Link to="/" className={cx('product-image-box')}>
                                <div className={cx('product-image-container')}>
                                    <span className={cx('product-image-inner')}>
                                        <img
                                            className={cx('product-image')}
                                            src="https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fd96eb53c23516f6ca600411b8495131f%2Fb%2Ft%2Fbt.calm.png&w=640&q=75"
                                            alt="Hình ảnh"
                                        />
                                    </span>
                                </div>
                            </Link>
                            <div className={cx('addToCart')}>
                                <button className={cx('addToCart-btn')}>
                                    <span>THÊM VÀO GIỎ HÀNG</span>
                                </button>
                            </div>
                            <Link to="/" className={cx('product-name')}>
                                <h4 className={cx('name-title')}>CALM</h4>
                            </Link>
                            <div className={cx('product-price')}>
                                <span className={cx('price-number')}>2.399.000&nbsp;₫</span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
