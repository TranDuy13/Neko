import classNames from 'classnames/bind';
import { LeftArrowIcon, PackageIcon, ShieldIcon, TopArrowIcon, TruckIcon } from '~/components/Icons';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import BestSellerItem from './components/BestSellerItem';
import { useEffect, useState } from 'react';
import AutoSlider from './components/AutoSlider/AutoSlider';

const cx = classNames.bind(styles);

function Home() {
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-section')}>
                <img
                    className={cx('banner-section-img')}
                    src="https://cms.curnonwatch.com/uploads/Banner_Homepage_237c7e6d0a.jpeg"
                    alt="Anh"
                />
                <div className={cx('banner-section-content')}>
                    <div className={cx('banner-section-content-left')}>
                        <div className={cx('pretitle-content-left')}>NEW WOMEN COLLECTION</div>
                        <div className={cx('title-content-left')}>SICILY</div>
                        <div className={cx('description-content-left')}>"TRỌN" NỮ TÍNH</div>
                        <Link to="https://www.facebook.com/" className={cx('link-content-left')}>
                            SHOP NOW
                        </Link>
                    </div>
                    <div className={cx('banner-section-content-right')}></div>
                </div>
            </div>
            <div className={cx('policy-section')}>
                <div className={cx('policy-container-mobile')}>
                    <div className={cx('policy-box')}>
                        <p className={cx('policy-content')}>
                            <span className={cx('policy-icon')}>
                                <TruckIcon />
                            </span>
                            <span className={cx('policy-text')}>FREESHIP ĐƠN HÀNG &gt;700K</span>
                        </p>
                    </div>
                </div>
                <div className={cx('policy-container-desktop')}>
                    <div className={cx('policy-box')}>
                        <p className={cx('policy-content')}>
                            <span className={cx('policy-icon')}>
                                <TruckIcon />
                            </span>
                            <span className={cx('policy-text')}>FREESHIP ĐƠN HÀNG &gt;700K</span>
                        </p>
                    </div>
                    <div className={cx('policy-box')}>
                        <p className={cx('policy-content')}>
                            <span className={cx('policy-icon')}>
                                <ShieldIcon />
                            </span>
                            <span className={cx('policy-text')}>BẢO HÀNH 10 NĂM</span>
                        </p>
                    </div>
                    <div className={cx('policy-box')}>
                        <p className={cx('policy-content')}>
                            <span className={cx('policy-icon')}>
                                <PackageIcon />
                            </span>
                            <span className={cx('policy-text')}>ĐỔI TRẢ MIỄN PHÍ TRONG VÒNG 3 NGÀY</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('category-section')}>
                <div className={cx('category-container')}>
                        <Link
                            style={{ backgroundImage: 'url(https://cms.curnonwatch.com/uploads/nu_83e94c34eb.jpg)' }}
                            to="/"
                            className={cx('category-link')}
                        >
                            <div className={cx('category-content')}>
                                <p className={cx('category-text')}>ĐỒNG HỒ NỮ</p>
                                <div className={cx('category-btn')}>
                                    <LeftArrowIcon />
                                </div>
                            </div>
                        </Link>
                        <Link
                            style={{ backgroundImage: 'url(	https://cms.curnonwatch.com/uploads/nam_ff98c9d171.jpg)' }}
                            to="/"
                            className={cx('category-link')}
                        >
                            <div className={cx('category-content')}>
                                <p className={cx('category-text')}>ĐỒNG HỒ NAM</p>
                                <div className={cx('category-btn')}>
                                    <LeftArrowIcon />
                                </div>
                            </div>
                        </Link>
                        <Link
                            style={{ backgroundImage: 'url(https://cms.curnonwatch.com/uploads/pk_515e1b9dce.jpg)' }}
                            to="/"
                            className={cx('category-link' , 'category-link-end')}
                        >
                            <div className={cx('category-content')}>
                                <p className={cx('category-text')}>PHỤ KIỆN THỜI TRANG</p>
                                <div className={cx('category-btn')}>
                                    <LeftArrowIcon />
                                </div>
                            </div>
                        </Link>
                </div>
            </div>
            <div className={cx('menBestSeller-section')}>
                <div className={cx('bestSeller-container')}>
                    <h3 className={cx('bestSeller-title')}>MEN'S BEST SELLERS</h3>
                    <Link to="/" className={cx('bestSeller-seeAll')}>
                        <span className={cx('bestSeller-seeAll-test')}>XEM TẤT CẢ</span>
                        <span className={cx('bestSeller-seeAll-icon')}>
                            <LeftArrowIcon />
                        </span>
                    </Link>
                    <div className={cx('bestSeller-content')}>
                        <div className={cx('bestSeller-gallery')}>
                            <div className={cx('bestSeller-list')}>
                                <BestSellerItem />
                                <BestSellerItem />
                                <BestSellerItem moreclassName = {cx('bottom-item')} />
                                <BestSellerItem moreclassName = {cx('bottom-item', 'last-item')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('womenBestSeller-section')}>
                <div className={cx('bestSeller-container')}>
                    <h3 className={cx('bestSeller-title')}>WOMEN'S BEST SELLERS</h3>
                    <Link to="/" className={cx('bestSeller-seeAll')}>
                        <span className={cx('bestSeller-seeAll-test')}>XEM TẤT CẢ</span>
                        <span className={cx('bestSeller-seeAll-icon')}>
                            <LeftArrowIcon />
                        </span>
                    </Link>
                    <div className={cx('bestSeller-content')}>
                        <div className={cx('bestSeller-gallery')}>
                            <div className={cx('bestSeller-list')}>
                                <BestSellerItem />
                                <BestSellerItem />
                                <BestSellerItem moreclassName = {cx('bottom-item')} />
                                <BestSellerItem moreclassName = {cx('bottom-item', 'last-item')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('story-section')}>
                <div className={cx('story-container')}>
                    <img
                        className={cx('story-logo')}
                        src="https://curnonwatch.com/_next/static/media/logo_small.f2cdcd68.svg"
                        alt="Hình ảnh"
                    />
                    <div className={cx('story-content')}>
                        <h3 className={cx('story-title')}>THE STORY OF CURNON</h3>
                        <p className={cx('story-text')}>
                            Cuối năm 2016, 3 chàng trai đam mê Startup và Đồng hồ quyết định thành lập Curnon, nhưng
                            ngay từ đầu, chúng tôi đã biết rằng: Curnon sinh ra với một sứ mệnh lớn lao hơn, không chỉ
                            dừng lại là một thương hiệu đồng hồ. Chúng tôi muốn mang tới một nguồn cảm hứng, một sự thay
                            đổi về tư duy, về suy nghĩ và chính những cái chúng tôi gọi là trải nghiệm cho người trẻ.
                        </p>
                        <img
                            className={cx('story-image')}
                            src="https://curnonwatch.com/_next/static/media/storyLarge.b54806b1.png"
                            alt="Hình ảnh"
                        />
                    </div>
                </div>
            </div>
            <div className={cx('slider-section')}>
                <div className={cx('slider-header')}>
                    <h3 className={cx('slider-title')}>BE PART OF CURNON</h3>
                    <p className={cx('slider-subtitle')}>Ai nói bạn không thể lựa chọn gia đình?</p>
                </div>
                <div className={cx('slider-body')}>
                    <AutoSlider />
                </div>
            </div>

            {showGoToTop && (
                <div>
                    <div className={cx('scrollToTop')}>
                        <span onClick={scrollToTop} className={cx('scrollToTop-btn')}>
                            <TopArrowIcon className={cx('topArrowIcon')} />
                        </span>
                    </div>
                </div>
            )}
        </div>
    )}

    export default Home;