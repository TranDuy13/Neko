import './product.scss';
import BestSellerItem from '../Home/components/BestSellerItem';
function Product() {
    return (
        <>
            <div className="product-category">
                <div className="product-content">
                    <div className="product-wrapper">
                        <div className="product-content-title">Sản phẩm</div>

                        <div className="product-list-task">
                            <div className="product-list-task-item">
                            </div>
                            <div className='product-list'>
                            <BestSellerItem />
                                <BestSellerItem />
                                <BestSellerItem />
                                <BestSellerItem />
                                <BestSellerItem />
                                <BestSellerItem />
                                <BestSellerItem />
                                <BestSellerItem />
                                <BestSellerItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
