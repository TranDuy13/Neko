import classNames from 'classnames/bind';

import styles from './ExchangeWarranty.module.scss';

const cx = classNames.bind(styles);

function ExchangeWarranty() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('boxContent')}>
                <p className={cx('title')}>
                    Chính sách đổi trả:
                </p>
                <div className={cx('content')}>
                    <p className={cx('textLi')}>
                        - 
                        <span> 1 ĐỔI 1 </span>
                        trong vòng 3 ngày kể từ khi nhận hàng (kèm theo các điều kiện)
                    </p>
                </div>
            </div>
            <div className={cx('boxContent')}>
                <p className={cx('title')}>
                    Chính sách bảo hành:
                </p>
                <div className={cx('content')}>
                    <p className={cx('textLi')}>
                        - 
                        <span> BẢO HÀNH 10 NĂM </span>
                        đối với những lỗi từ nhà sản xuất
                    </p>
                    <p className={cx('textLi')}>
                        - 
                        <span> BẢO HÀNH MIỄN PHÍ (1 lần) trong 1 năm đầu tiên </span>
                        với những lỗi người dùng như: vỡ, nứt kính, hấp hơi nước, va đập mạnh, rơi linh kiện bên trong mặt đồng hồ...
                    </p>
                    <p className={cx('textLi')}>
                        - 
                        <span> THAY PIN MIỄN PHÍ TRỌN ĐỜI</span>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default ExchangeWarranty;