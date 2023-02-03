import classNames from 'classnames/bind';
import styles from './SearchModal.module.scss';
import { useRef, useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function SearchModal({ setHideSearchModal }) {
    const innerRef = useRef();
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleCloseSearchModal = () => {
        innerRef.current.classList.add(cx('animation'));
        setTimeout(() => {
            setHideSearchModal(false);
        }, 600);
    };

    return (
        <div
            className={cx('wrapper')}
            onClick={(e) => {
                if (!e.target.closest(`.${cx('inner')}`)) {
                    handleCloseSearchModal();
                }
            }}
        >
            <div ref={innerRef} className={cx('inner')}>
                <div className={cx('container')}>
                    <div className={cx('search-header')}>
                        <div className={cx('space')}></div>
                        <div className={cx('search')}>
                            <input
                                ref={inputRef}
                                placeholder="Nhập từ khoá..."
                                spellCheck={false}
                                onChange={handleChange}
                                value={searchValue}
                            />
                            {!!searchValue && (
                                <button className={cx('clear-btn')} onClick={handleClear}>
                                    <FontAwesomeIcon className={cx('clear-icon')} icon={faXmark} />
                                </button>
                            )}
                        </div>
                        <div className={cx('close')}>
                            <button onClick={handleCloseSearchModal} className={cx('close-btn')}>
                                ĐÓNG
                            </button>
                        </div>
                    </div>
                    <div className={cx('search-body')}>Content</div>
                </div>
            </div>
        </div>
    );
}

export default SearchModal;
