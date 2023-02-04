import classNames from 'classnames/bind';

import styles from './BoxImage.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function BoxImage({ data }) {
    const [srcMainImage, setSrcMainImage] = useState(data[0]);

    return (
        <div className={cx('productDetail-boxImage')}>
            <div className={cx('boxImage-wrapper')}>
                <div className={cx('thumbImage-list')}>
                    {data.map((item, index) => (
                        <div key={index} className={cx('thumbImage-item')}>
                            <img
                                className={cx('thumbImage', {
                                    active: item === srcMainImage,
                                })}
                                src={item}
                                onClick={(e) => {
                                    setSrcMainImage(e.target.currentSrc);
                                }}
                                alt="Hình ảnh"
                            />
                        </div>
                    ))}
                </div>
                <div className={cx('mainImage-wrapper')}>
                    {data.map((item, index) => (
                        <img
                            key={index}
                            className={cx('mainImage', {
                                active: item === srcMainImage,
                            })}
                            src={item}
                            alt="Hình ảnh"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BoxImage;
