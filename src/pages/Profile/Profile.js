import classNames from 'classnames/bind';
import {
    PackageIcon,
    ShieldIcon,
    SizeIcon,
    StartIcon,
    TopArrowIcon,
} from '~/components/Icons';
import styles from './Profile.module.scss';
import { useEffect, useState } from 'react';
import BoxImage from './component/BoxImage';
import ProductInfo from './component/ProductInfo';
import PreviousNextSection from './component/PreviousNextSection/PreviousNextSection'
import AutoSlider from '../Home/components/AutoSlider/AutoSlider';

const cx = classNames.bind(styles);

const DATA_IMAGE_LIST = [
    'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fm%2F5%2Fm53-01_1.png&w=640&q=75',
    'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fk%2F2%2Fk2-mn3_1.png&w=640&q=75',
    'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2Fs%2Fdsc07211_1.jpg&w=640&q=75',
    'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2Fs%2Fdsc07181.jpg&w=640&q=75',
    'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2Fs%2Fdsc07198_1.jpg&w=640&q=75',
];

const DATA_PRODUCT_INFO = [{
    title: 'THÔNG TIN SẢN PHẨM',
    data: {
        text: 'Đồng hồ nam Curnon Kashmir Calm mang phong cách trẻ trung, hiện đại, tối giản, phù hợp với nhiều trang phục; Dây kim loại thép, Mặt kính Sapphire chống trầy xước, Chống nước 3ATM',
        detailData: [
            {name: 'Kích thước mặt' , value: '40MM'},
            {name: 'Độ dày' , value: '7MM'},
            {name: 'Màu mặt' , value: 'WHITE'},
            {name: 'Loại máy' , value: 'MIYOTA QUARTZ'},
            {name: 'Chất liệu dây' , value: 'DÂY KIM LOẠI'},
        ]
    }
}, {
    title: 'CHÍNH SÁCH VẬN CHUYỂN',
}, {
    title: 'ĐỔI TRẢ & BẢO HÀNH',
},{
    title: 'HÌNH THỨC THANH TOÁN',
},
]

function Profile() {
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
            <div className={cx('productDetail-section')}>
                <div className={cx('productDetail-container')}>
                    <BoxImage data={DATA_IMAGE_LIST} />
                    <div className={cx('productDetail-boxWrapper')}>
                        <div className={cx('productDetail-boxContent')}>
                            <p className={cx('productDetail-subname')}>DETROIT</p>
                            <h3 className={cx('productDetail-name')}>M-53</h3>
                            <div className={cx('productDetail-priceRating')}>
                                <div className={cx('productDetail-boxPrice')}>
                                    <p className={cx('boxPrice-price')}>2.719.000&nbsp;₫</p>
                                    <p className={cx('boxPrice-priceRegular')}>3.199.000&nbsp;₫</p>
                                </div>
                                <div className={cx('productDetail-boxRating')}>
                                    <span className={cx('boxRating-rating')}>
                                        <span className={cx('starRating-wrapper')}>
                                            <span className={cx('simpleStarRating')}>
                                                <span className={cx('startIcon-empty')}>
                                                    <StartIcon className={cx('start-icon')} />
                                                    <StartIcon className={cx('start-icon')}/>
                                                    <StartIcon className={cx('start-icon')}/>
                                                    <StartIcon className={cx('start-icon')}/>
                                                    <StartIcon className={cx('start-icon')}/>
                                                </span>
                                                <span className={cx('startIcon-fill')}>
                                                    <StartIcon className={cx('start-icon')}/>
                                                    <StartIcon className={cx('start-icon')}/>
                                                    <StartIcon className={cx('start-icon')}/>
                                                    <StartIcon className={cx('start-icon')}/>
                                                    <StartIcon className={cx('start-icon')}/>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                    <span className={cx('boxRating-total')}>(0)</span>
                                </div>
                            </div>
                            <div className={cx('productDetail-statusSize')}>
                                <div className={cx('status-wrapper')}>
                                    <button className={cx('status-btn')}>
                                        Tình trạng:&nbsp;
                                        <span>Còn hàng</span>
                                    </button>
                                </div>
                                <button className={cx('size-btn')}>
                                    <span>
                                        <SizeIcon className={cx('size-icon')} />
                                    </span>
                                    Cỡ cổ tay
                                </button>
                            </div>
                            <div className={cx('productDetail-line')}></div>
                            <div className={cx('productDetail-boxButton')}>
                                <button className={cx('buyNow-btn')}>THANH TOÁN NGAY</button>
                                <button className={cx('addToCart-btn')}>THÊM VÀO GIỎ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('policy-section')}>
                <div className={cx('policy-container-mobile')}>
                    <div className={cx('policy-box')}>
                        <p className={cx('policy-content')}>
                            <span className={cx('policy-icon')}>
                                <ShieldIcon />
                            </span>
                            <span className={cx('policy-text')}>FREESHIP ĐƠN HÀNG &gt;700K</span>
                        </p>
                    </div>
                </div>
                <div className={cx('policy-container-desktop')}>
                    <div className={cx('policy-box')}>
                        <p className={cx('policy-content')}>
                            <span className={cx('policy-icon')}>
                                <ShieldIcon />
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
            <div className={cx('productInfo-section')}>
               <ProductInfo data ={DATA_PRODUCT_INFO} />
            </div>
            <div className={cx('review-section')}>
                <div className={cx('review-container')}>
                    <div className={cx('review-header')}>
                        <div className={cx('review-boxTitle')}>
                            <h3 className={cx('review-title')}>
                                REVIEWS CỦA KHÁCH HÀNG
                            </h3>
                            <div className={cx('review-boxDescription')}>
                                <span>
                                    <span className={cx('starRating-wrapper')}>
                                        <span className={cx('simpleStarRating')}>
                                            <span className={cx('startIcon-empty')}>
                                                <StartIcon className={cx('start-icon')} />
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                            </span>
                                            <span className={cx('startIcon-fill')}>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                                <p className={cx('review-boxNumber')}>
                                    Dựa trên
                                    <span className={cx('number-review')}>&nbsp;21&nbsp;</span>
                                    reviews
                                </p>
                            </div>
                        </div>
                        <div className={cx('review-boxButton')}>
                            <button className={cx('review-btn')}>
                                XEM TẤT CẢ
                            </button>
                        </div>
                    </div>
                    <div className={cx('review-body')}>
                        <div className={cx('boxReview-item')}>
                            <div className={cx('boxReview-wrapper')}>
                                <section className={cx('boxReview-rating')}>
                                    <span className={cx('starRating-wrapper')}>
                                        <span className={cx('simpleStarRating')}>
                                            <span className={cx('startIcon-empty')}>
                                                <StartIcon className={cx('start-icon')} />
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                            </span>
                                            <span className={cx('startIcon-fill')}>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                            </span>
                                        </span>
                                    </span>
                                    <p className={cx('review-time')}>Sep 4th, 2019</p>
                                </section>
                                <section className={cx('boxReview-title')}>
                                    <h3 className={cx('boxReview-title-text')}>Xin hỏi</h3>
                                </section>
                                <section className={cx('boxReview-detail')}>
                                    <p className={cx('boxReview-detail-text')}>Sao không có mẫu nào automatic vậy nhĩ</p>
                                </section>
                                <section className={cx('boxReview-boxInfo')}>
                                    <div className={cx('boxReview-avatar')}>
                                        M
                                    </div>
                                    <div className={cx('boxReview-info')}>
                                        <p className={cx('boxReview-name')}>
                                            Miên
                                        </p>
                                        <p className={cx('boxReview-verify')}>
                                            Đã xác thực
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className={cx('boxReview-item')}>
                            <div className={cx('boxReview-wrapper')}>
                                <section className={cx('boxReview-rating')}>
                                    <span className={cx('starRating-wrapper')}>
                                        <span className={cx('simpleStarRating')}>
                                            <span className={cx('startIcon-empty')}>
                                                <StartIcon className={cx('start-icon')} />
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                            </span>
                                            <span className={cx('startIcon-fill')}>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                            </span>
                                        </span>
                                    </span>
                                    <p>Sep 4th, 2019</p>
                                </section>
                                <section className={cx('boxReview-title')}>
                                    <h3 className={cx('boxReview-title-text')}>Xin hỏi</h3>
                                </section>
                                <section className={cx('boxReview-detail')}>
                                    <p className={cx('boxReview-detail-text')}>Sao không có mẫu nào automatic vậy nhĩ</p>
                                </section>
                                <section className={cx('boxReview-boxInfo')}>
                                    <div className={cx('boxReview-avatar')}>
                                        M
                                    </div>
                                    <div className={cx('boxReview-info')}>
                                        <p className={cx('boxReview-name')}>
                                            Miên
                                        </p>
                                        <p className={cx('boxReview-verify')}>
                                            Đã xác thực
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className={cx('boxReview-item')}>
                            <div className={cx('boxReview-wrapper')}>
                                <section className={cx('boxReview-rating')}>
                                    <span className={cx('starRating-wrapper')}>
                                        <span className={cx('simpleStarRating')}>
                                            <span className={cx('startIcon-empty')}>
                                                <StartIcon className={cx('start-icon')} />
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                            </span>
                                            <span className={cx('startIcon-fill')}>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                                <StartIcon className={cx('start-icon')}/>
                                            </span>
                                        </span>
                                    </span>
                                    <p>Sep 4th, 2019</p>
                                </section>
                                <section className={cx('boxReview-title')}>
                                    <h3 className={cx('boxReview-title-text')}>Xin hỏi</h3>
                                </section>
                                <section className={cx('boxReview-detail')}>
                                    <p className={cx('boxReview-detail-text')}>Sao không có mẫu nào automatic vậy nhĩ</p>
                                </section>
                                <section className={cx('boxReview-boxInfo')}>
                                    <div className={cx('boxReview-avatar')}>
                                        M
                                    </div>
                                    <div className={cx('boxReview-info')}>
                                        <p className={cx('boxReview-name')}>
                                            Miên
                                        </p>
                                        <p className={cx('boxReview-verify')}>
                                            Đã xác thực
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className={cx('reviewList-boxButtonMobile')}>
                        <button className={cx('reviewList-buttonMobile')}>XEM TẤT CẢ</button>
                    </div>
                </div>
            </div>
            <div className={cx('relateProduct-section')}>
                <div className={cx('relateProduct-wrapper')}>
                    <h2 className={cx('relateProduct-title')}>SẢN PHẨM TƯƠNG TỰ</h2>
                    <div>
                        <PreviousNextSection />
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
    );
}

export default Profile;
