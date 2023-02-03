import styles from "~/pages/Home/Home.module.scss"
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Footer (){
    
    return(
        <>
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
        </>
    )
}
export default Footer