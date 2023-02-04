import classNames from 'classnames/bind';

import styles from './PayMethod.module.scss';

const cx = classNames.bind(styles);

function PayMethod() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('boxContent')}>
                <p className={cx('title')}>Curnon chấp nhận các hình thức thanh toán sau: </p>
                <p className={cx('text')}>Trả tiền mặt khi nhận hàng, Ví điện tử Momo, Ví điện tử VNPay</p>
                <div className={cx('boxImg')}>
                    <img className={cx('img-icon')} src='https://curnonwatch.com/_next/static/media/cod.10bcbd91.png' alt='cod' />
                    <img className={cx('img-icon')} src='https://curnonwatch.com/_next/static/media/momo.1a8e86d8.png' alt='momo' />
                    <img className={cx('img-icon')} src='https://curnonwatch.com/_next/static/media/vnpay.3fa45c06.png' alt='vnpay' />
                </div>
                <p className={cx('text')}>Hoặc chuyển khoản ngân hàng qua tài khoản:</p>
                <p className={cx('text-list')}>
                    Số tài khoản: 050105419411
                    <br />
                    Chủ tài khoản: Trần Thế Phong
                    <br />
                    Tên ngân hàng: Sacombank (SCB)
                    <br />
                    Chi nhánh: Thành Phố Hồ Chí Minh
                </p>
            </div>
           
            
        </div>
     );
}

export default PayMethod;