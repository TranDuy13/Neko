import classNames from 'classnames/bind';

import styles from './ProductInfo.module.scss';
import { useEffect, useState } from 'react';
import DetailInfo from './component/DetailInfo';
import ShipPolicy from './component/ShipPolicy';
import ExchangeWarranty from './component/ExchangeWarranty';
import PayMethod from './component/PayMethod';
import { MinusIcon, PlusIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function ProductInfo({data}) {

    const [productInfoContent, setProductInfoContent] = useState('THÔNG TIN SẢN PHẨM')
    const [contentInfoMobile,setContentInfoMobile] = useState('')

    const ProductInfoContent = () => {
        switch (productInfoContent) {
            case 'THÔNG TIN SẢN PHẨM':
                return <DetailInfo data = {data[0]}/>
            case 'CHÍNH SÁCH VẬN CHUYỂN':
                return <ShipPolicy />
            case 'ĐỔI TRẢ & BẢO HÀNH':
                return <ExchangeWarranty />;
            default:
                return <PayMethod />;
        }
    }

    const handleSetContent = (e) => {
        const inforValue = e.target.closest(`.${cx('section-title-container')}`).value
        if(contentInfoMobile === inforValue){
            setContentInfoMobile('')
        } else {
            setContentInfoMobile(inforValue)
        }
    }

    return ( 
        <>
            <div className={cx('productInfo-wrapper-moblie')}>
                <div>
                    <button value={'THÔNG TIN SẢN PHẨM'} onClick={handleSetContent} className={cx('section-title-container')}>
                        <span className={cx('section-title-wrapper')}>
                            <p className={cx('section-titleText')}>THÔNG TIN SẢN PHẨM</p>
                            {contentInfoMobile === "THÔNG TIN SẢN PHẨM" ? <MinusIcon /> : <PlusIcon />}
                        </span>
                    </button>
                    <div className={cx('section-contents-container' , {
                        active: contentInfoMobile === "THÔNG TIN SẢN PHẨM"
                    })}>
                        <div className={cx('productInfo_innerContent')}>
                            <DetailInfo data = {data[0]}/>
                        </div>
                    </div>
                </div>
                <div>
                    <button value={'CHÍNH SÁCH VẬN CHUYỂN'} onClick={handleSetContent} className={cx('section-title-container')}>
                        <span className={cx('section-title-wrapper')}>
                            <p className={cx('section-titleText')}>CHÍNH SÁCH VẬN CHUYỂN</p>
                            {contentInfoMobile === "CHÍNH SÁCH VẬN CHUYỂN" ? <MinusIcon /> : <PlusIcon />}
                        </span>
                    </button>
                    <div className={cx('section-contents-container' , {
                        active: contentInfoMobile === "CHÍNH SÁCH VẬN CHUYỂN"
                    })}>
                        <div className={cx('productInfo_innerContent')}>
                            <ShipPolicy />
                        </div>
                    </div>
                </div>
                <div>
                    <button value={'ĐỔI TRẢ & BẢO HÀNH'} onClick={handleSetContent} className={cx('section-title-container')}>
                        <span className={cx('section-title-wrapper')}>
                            <p className={cx('section-titleText')}>ĐỔI TRẢ & BẢO HÀNH</p>
                            {contentInfoMobile === "ĐỔI TRẢ & BẢO HÀNH" ? <MinusIcon /> : <PlusIcon />}
                        </span>
                    </button>
                    <div className={cx('section-contents-container' , {
                        active: contentInfoMobile === "ĐỔI TRẢ & BẢO HÀNH"
                    })}>
                        <div className={cx('productInfo_innerContent')}>
                            <ExchangeWarranty />
                        </div>
                    </div>
                </div>
                <div>
                    <button value={'HÌNH THỨC THANH TOÁN'} onClick={handleSetContent} className={cx('section-title-container')}>
                        <span className={cx('section-title-wrapper')}>
                            <p className={cx('section-titleText')}>HÌNH THỨC THANH TOÁN</p>
                            {contentInfoMobile === "HÌNH THỨC THANH TOÁN" ? <MinusIcon /> : <PlusIcon />}
                        </span>
                    </button>
                    <div className={cx('section-contents-container' , {
                        active: contentInfoMobile === "HÌNH THỨC THANH TOÁN"
                    })}>
                        <div className={cx('productInfo_innerContent')}>
                            <PayMethod />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('productInfo-wrapper-destop')}>
                <div className={cx('productInfo-inner')}>
                    <div className={cx('productInfo-container')}>
                        <div className={cx('productInfo-title-wrapper')}>
                            <div className={cx('productInfo-title-list')}>
                                {data.map((item, index) => (
                                    <button key={index} className={cx('productInfo-title-item')}>
                                        <div onClick={() => {
                                            setProductInfoContent(item.title);
                                        }} className={cx('title-item-wrapper', {
                                            active: productInfoContent === item.title
                                        })}>
                                            <span className={cx('title-item-text')}>
                                                {item.title}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className={cx('productInfo-content-wrapper')}>
                            <ProductInfoContent />
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default ProductInfo;