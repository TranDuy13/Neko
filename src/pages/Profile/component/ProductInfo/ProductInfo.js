import classNames from 'classnames/bind';

import styles from './ProductInfo.module.scss';
import { useEffect, useState } from 'react';
import DetailInfo from './component/DetailInfo';
import ShipPolicy from './component/ShipPolicy';
import ExchangeWarranty from './component/ExchangeWarranty';
import PayMethod from './component/PayMethod';

const cx = classNames.bind(styles);

function ProductInfo({data}) {

    const [productInfoContent, setProductInfoContent] = useState('THÔNG TIN SẢN PHẨM')

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

    return ( 
        <div className={cx('productInfo-wrapper')}>
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
     );
}

export default ProductInfo;