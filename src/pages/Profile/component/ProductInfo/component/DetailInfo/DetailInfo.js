import classNames from 'classnames/bind';

import styles from './DetailInfo.module.scss';

const cx = classNames.bind(styles);

function DetailInfo({data}) {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('content-text')}>
                <p>{data.data.text}</p>
            </div>
            <div className={cx('content-number')}>
                {data.data.detailData.map((item , index) => (
                    <div key={index} className={cx('boxContent')}>
                        <p className={cx('name')}>{item.name}</p>
                        <p className={cx('value')}>{item.value}</p>
                    </div>
                ))}
                
            </div>
        </div>
     );
}

export default DetailInfo;