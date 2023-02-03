import classNames from 'classnames/bind';
import styles from './SidebarModal.module.scss';
import { useRef, useState } from 'react';
import { CloseIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function SidebarModal({ setHideSidebarModal }) {
    const wrapperRef = useRef();
    const containerRef = useRef();

    const handleHideSidebarModal = () => {
        wrapperRef.current.classList.add(cx('animation'));
        containerRef.current.classList.add(cx('animation'));
        setTimeout(() => {
            setHideSidebarModal(false);
        }, 300);
    };
    return (
        <>
            <div ref={wrapperRef} onClick={handleHideSidebarModal} className={cx('wrapper')}></div>
            <div ref={containerRef} className={cx('container')}>
                <div className={cx('sidebar-header')}>
                    <div className={cx('header-title')}>GIO HANG CUA BAN</div>
                    <button onClick={handleHideSidebarModal} className={cx('close-btn')}>
                        <CloseIcon />
                    </button>
                </div>
                <div className={cx('sidebar-content')}></div>
            </div>
        </>
    );
}

export default SidebarModal;
