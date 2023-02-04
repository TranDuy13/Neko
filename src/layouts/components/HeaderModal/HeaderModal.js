import classNames from 'classnames/bind';
import styles from './HeaderModal.module.scss';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function HeaderModal({ data, setHideHeaderModal }) {
    const [content, setContent] = useState('ĐỒNG HỒ');

    const innerRef = useRef();

    function Content() {
        switch (content) {
            case 'ĐỒNG HỒ':
                return <p>ĐỒNG HỒ</p>;
            case 'VÒNG TAY':
                return <p>VÒNG TAY</p>;
            case 'PHỤ KIỆN':
                return <p>PHỤ KIỆN</p>;
            case 'DÂY ĐỒNG HỒ':
                return <p>DÂY ĐỒNG HỒ</p>;
            default:
                return <p>QUÀ TẶNG</p>;
        }
    }

    return (
        <div
            className={cx('wrapper')}
            onMouseOver={(e) => {
                if (!e.target.closest(`.${cx('inner')}`)) {
                    innerRef.current.classList.add(cx('animation'));
                    setTimeout(() => {
                        setHideHeaderModal(false);
                    }, 600);
                }
            }}
        >
            <div ref={innerRef} className={cx('inner')}>
                <div className={cx('container')}>
                    <div className={cx('sidebar')}>
                        {data.map((item, index) => (
                            <Link
                                key={index}
                                to="/"
                                onMouseOver={(e) => {
                                    setContent(e.target.text);
                                }}
                                className={cx('sidebar-item', {
                                    active: content === item,
                                })}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                    <div className={cx('content')}>
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderModal;
