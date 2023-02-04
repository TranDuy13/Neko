import classNames from 'classnames/bind';
import {
    LeftArrowIcon,
    PackageIcon,
    ShieldIcon,
    SizeIcon,
    StartIcon,
    TopArrowIcon,
    TruckIcon,
} from '~/components/Icons';
import styles from './Profile.module.scss';
import { useEffect, useState } from 'react';
import BoxImage from './component/BoxImage';
import ProductInfo from './component/ProductInfo';

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
                <div className={cx('policy-container')}>
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
                                <p>
                                    Dựa trên
                                    <span className={cx('number-review')}> 21 </span>
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
                </div>
            </div>
            <div className={cx('slider-section')}>
                <div className={cx('slider-header')}>
                    <h3 className={cx('slider-title')}>BE PART OF CURNON</h3>
                    <p className={cx('slider-subtitle')}>Ai nói bạn không thể lựa chọn gia đình?</p>
                </div>
                <div className={cx('slider-body')}>
                    <div className={cx('slider-slick')}></div>
                </div>
            </div>
            <div className={cx('footer-section')}>
                <section className={cx('footer-section01')}>
                    <div className={cx('boxInput')}>
                        <div className={cx('formWrapper')}>
                            <p className={cx('form-title')}>NHẬN THÔNG TIN MỚI NHẤT TỪ CURNON</p>
                            <form>
                                <div className={cx('input-information')}>
                                    <div className={cx('input-select-container')}>
                                        <span>*</span>
                                        <select required id="gender" name="gender" className={cx('input-select')}>
                                            <option disabled value selected>
                                                Giới tính
                                            </option>
                                            <option value="Male">Nam</option>
                                            <option value="Female">Nữ</option>
                                        </select>
                                    </div>
                                    <div className={cx('input-name-container')}>
                                        <input
                                            className={cx('input-name')}
                                            placeholder="Họ tên..."
                                            name="name"
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={cx('input-email-container')}>
                                    <input
                                        type="email"
                                        className={cx('input-email')}
                                        placeholder="Email..."
                                        name="email"
                                        required
                                    />
                                </div>
                                <button type="submit" className={cx('submit-form-btn')}>
                                    <span className={cx('submit-form-text')}>ĐĂNG KÝ NGAY</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className={cx('boxContact')}>
                        <h4 className={cx('boxContact-title')}>LIÊN LẠC</h4>
                        <div className={cx('boxContact-content')}>
                            <p className={cx('boxContact-text')}>cskh@nekkocake.com</p>
                            <p className={cx('boxContact-text')}>0977515865</p>
                            <div className={cx('boxContact-iconSocial')}>
                                <a className={cx('icon-social')} href="/">
                                    <img
                                        src="https://curnonwatch.com/_next/static/media/icon_fb.ba9f5d29.svg"
                                        alt="Icon"
                                    />
                                </a>
                                <a className={cx('icon-social')} href="/">
                                    <img
                                        src="https://curnonwatch.com/_next/static/media/icon_insta.9353e397.svg"
                                        alt="Icon"
                                    />
                                </a>
                                <a className={cx('icon-social')} href="/">
                                    <img
                                        src="https://curnonwatch.com/_next/static/media/icon_youtube.dee9fd66.svg"
                                        alt="Icon"
                                    />
                                </a>
                            </div>
                            <div className={cx('boxContact-iconPay')}>
                                <div className={cx('imgPay')}>
                                    <img src="https://curnonwatch.com/_next/static/media/cod.10bcbd91.png" alt="Cod" />
                                </div>
                                <div className={cx('imgPay')}>
                                    <img
                                        src="https://curnonwatch.com/_next/static/media/fundiin.34ef01d3.png"
                                        alt="Fundiin"
                                    />
                                </div>
                                <div className={cx('imgPay')}>
                                    <img
                                        src="https://curnonwatch.com/_next/static/media/momo.1a8e86d8.png"
                                        alt="Momo"
                                    />
                                </div>
                                <div className={cx('imgPay')}>
                                    <img
                                        src="https://curnonwatch.com/_next/static/media/vnpay.3fa45c06.png"
                                        alt="Vnpay"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('boxStore')}>
                        <p className={cx('boxStore-title')}>STORES</p>
                        <div className={cx('boxStore-content')}>
                            <p className={cx('boxStore-address')}>Nhà máy Tấn Nhẫn, Km38, KrôngPắk, DakLak .</p>
                            <p className={cx('boxStore-address')}>97 Thôn Phước Tân 1, EaKuăng, KrôngPắk, DakLak.</p>
                        </div>
                    </div>
                </section>
                <section className={cx('footer-section02')}>
                    <div className={cx('section02-container')}>
                        <div className={cx('section02-leftBoxContent')}>
                            <div className={cx('leftBoxContent-list')}>
                                <div className={cx('leftBoxContent-item')}>
                                    <a className={cx('leftBoxContent-link')} href="/">
                                        Đồng hồ nam
                                    </a>
                                </div>
                                <div className={cx('leftBoxContent-item')}>
                                    <a className={cx('leftBoxContent-link')} href="/">
                                        Đồng hồ nữ
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('section02-rightBoxContent')}>
                            <a className={cx('rightBoxContent-service')} href="/">
                                Chính sách vận chuyển
                            </a>
                            <div className={cx('rightBoxContent-aline')}></div>
                            <a className={cx('rightBoxContent-service')} href="/">
                                Đổi trả & Bảo hành
                            </a>
                        </div>
                    </div>
                </section>
                <section className={cx('footer-section03')}>
                    <div className={cx('section03-boxContent')}>
                        <p className={cx('section03-copyright')}>
                            © 2021 - Bản quyền của CTCP PHÁT TRIỂN SẢN PHẨM SÁNG TẠO VIỆT
                        </p>
                        <p className={cx('section03-text')}>
                            Giấy chứng nhận ĐKKD số 0108150321 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp ngày
                            29/01/2018 123C Thụy Khuê, Tây Hồ, Hà Nội
                        </p>
                    </div>
                    <div className={cx('section03-boxContent')}>
                        <img
                            className={cx('section03-img')}
                            src="https://curnonwatch.com/_next/static/media/certificate.e07e4993.png"
                            alt="Hình ảnh"
                        />
                    </div>
                </section>
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
