import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/image';

import { CartIcon, SearchIcon } from '~/components/Icons';

import { Link } from 'react-router-dom';
import config from '~/config';
import { useRef, useState } from 'react';
import HeaderModal from '../HeaderModal';
import SidebarModal from '../SidebarModal';
import SearchModal from '../SearchModal';

const cx = classNames.bind(styles);

const MALE_MENU = ['ĐỒNG HỒ', 'PHỤ KIỆN', 'DÂY ĐỒNG HỒ', 'QUÀ TẶNG'];
const FEMALE_MENU = ['ĐỒNG HỒ', 'VÒNG TAY', 'DÂY ĐỒNG HỒ', 'QUÀ TẶNG'];

function Header() {
    const [isMaleMenu, setIsMaleMenu] = useState(false);
    const [hideHeaderModal, setHideHeaderModal] = useState(false);
    const [hideSidebarModal, setHideSidebarModal] = useState(false);
    const [hideSearchModal, setHideSearchModal] = useState(false);

    const aboutModalRef = useRef();
    const aboutModalListRef = useRef();

    const handleRemoveAboutModal = () => {
        aboutModalListRef.current.classList.add(cx('animation'));
        aboutModalRef.current.classList.add(cx('animation'));
        setTimeout(() => {
            aboutModalRef.current.classList.remove(cx('open'));
            aboutModalRef.current.classList.remove(cx('animation'));
            aboutModalListRef.current.classList.remove(cx('animation'));
        }, 600);
    };

    return (
        <>
            <header className={cx('wrapper')}>
                <nav className={cx('nav-list')}>
                    <div
                        className={cx('nav-item')}
                        onMouseOver={() => {
                            setIsMaleMenu(true);
                            setHideHeaderModal(true);
                            setHideSidebarModal(false);
                            setHideSearchModal(false);
                            aboutModalRef.current.classList.remove(cx('open'));
                        }}
                    >
                        <span>NAM GIỚI</span>
                        <img className={cx('line-nav')} src={images.lineNavbar} alt="Line" />
                    </div>
                    <div
                        className={cx('nav-item')}
                        onMouseOver={() => {
                            setIsMaleMenu(false);
                            setHideHeaderModal(true);
                            setHideSidebarModal(false);
                            setHideSearchModal(false);
                            aboutModalRef.current.classList.remove(cx('open'));
                        }}
                    >
                        <span>NỮ GIỚI</span>
                        <img className={cx('line-nav')} src={images.lineNavbar} alt="Line" />
                    </div>
                    <div
                        onMouseOver={() => {
                            setHideHeaderModal(false);
                            setHideSidebarModal(false);
                            setHideSearchModal(false);
                            aboutModalRef.current.classList.add(cx('open'));
                        }}
                        className={cx('nav-item')}
                    >
                        <span>VỀ CURNON</span>
                        <img className={cx('line-nav')} src={images.lineNavbar} alt="Line" />
                        <div
                            onMouseOver={(e) => {
                                if (!e.target.closest(`.${cx('about-modal-list')}`)) {
                                    handleRemoveAboutModal();
                                }
                            }}
                            ref={aboutModalRef}
                            className={cx('about-modal')}
                        >
                            <div className={cx('about-modal-background')}></div>
                            <div ref={aboutModalListRef} className={cx('about-modal-list')}>
                                <div className={cx('container')}>
                                    <div className={cx('about-modal-item')}>
                                        <Link className={cx('about-modal-link')} to="/">
                                            Blog
                                        </Link>
                                    </div>
                                    <div className={cx('about-modal-item')}>
                                        <Link className={cx('about-modal-link')} to="/">
                                            Về chúng tôi
                                        </Link>
                                    </div>
                                    <div className={cx('about-modal-item')}>
                                        <Link className={cx('about-modal-link')} to="/">
                                            Long & Short
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <nav className={cx('header-right')}>
                    <button
                        onClick={() => {
                            setHideSidebarModal(true);
                            setHideHeaderModal(false);
                            setHideSearchModal(false);
                            aboutModalRef.current.classList.remove(cx('open'));
                        }}
                        className={cx('cart-button')}
                    >
                        <span>GIỎ HÀNG</span>
                        <span className={cx('cart-icon')}>
                            <CartIcon />
                        </span>
                    </button>
                    <button
                        onClick={() => {
                            setHideSidebarModal(false);
                            setHideHeaderModal(false);
                            setHideSearchModal(true);
                            aboutModalRef.current.classList.remove(cx('open'));
                        }}
                        className={cx('search-button')}
                    >
                        <SearchIcon />
                    </button>
                </nav>
            </header>
            {hideHeaderModal && (
                <HeaderModal data={isMaleMenu ? MALE_MENU : FEMALE_MENU} setHideHeaderModal={setHideHeaderModal} />
            )}
            {hideSidebarModal && <SidebarModal setHideSidebarModal={setHideSidebarModal} />}
            {hideSearchModal && <SearchModal setHideSearchModal={setHideSearchModal} />}
        </>
    );
}

export default Header;
