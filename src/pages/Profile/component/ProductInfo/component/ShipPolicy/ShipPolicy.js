import classNames from 'classnames/bind';

import styles from './ShipPolicy.module.scss';

const cx = classNames.bind(styles);

function ShipPolicy() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('boxContent')}>
                <p className={cx('title')}>
                    Phí vận chuyển:
                </p>
                <div className={cx('content')}>
                    <p className={cx('textLi')}>
                        - 
                        <span> MIỄN PHÍ VẬN CHUYỂN </span>
                         với đơn hàng từ 700,000đ trở lên
                    </p>
                    <p className={cx('textLi')}>
                        - 
                        <span> 30,000đ </span>
                         với đơn hàng có giá trị thấp hơn 700,000đ
                    </p>
                </div>
            </div>
            <div className={cx('boxContent')}>
                <p className={cx('title')}>
                    Thời gian vận chuyển:
                </p>
                <div className={cx('content')}>
                    <p className={cx('textLi')}>
                        - Nội thành Hà Nội: 1-2 ngày
                    </p>
                    <p className={cx('textLi')}>
                        - Miền Trung: 3-5 ngày
                    </p>
                    <p className={cx('textLi')}>
                         - Miền Nam: 5-7 ngày
                    </p>
                </div>
            </div>
        </div>
     );
}

export default ShipPolicy;