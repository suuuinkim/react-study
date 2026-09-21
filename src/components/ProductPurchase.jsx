import "../css/ProductPurchase.css";
import {useState} from 'react';

function ProductPurchase() {
    // TODO: 변경되는 수량을 React가 기억하도록 구현해보세요.
    const [count, setCount] = useState(1);

    // TODO: + 버튼을 눌렀을 때 실행할 기능을 구현해보세요.
    const handlePlus = () => {
        setCount(count+1)
    }
    // TODO: - 버튼을 눌렀을 때 실행할 기능을 구현해보세요.
    const handleMinus = () => {
        setCount(count - 1)
    }
    // TODO: 현재 수량에 따른 총 상품 금액을 구해보세요.
    const productPrice = 49000;
    const totalAmount = count * productPrice;

    return (
        <section className="product-page">
            <section className="product-card">
                <div className="product-image">
                    <div className="image-placeholder">
                        <span>EVERYDAY</span>
                        <strong>BACKPACK</strong>
                    </div>
                </div>

                <div className="product-info">
                    <div className="product-heading">
                        <span className="category">BAG / DAILY</span>

                        <h1>Everyday Backpack</h1>

                        <p className="description">
                            필요한 물건을 편하게 수납할 수 있는
                            <br />
                            가볍고 실용적인 데일리 백팩입니다.
                        </p>
                    </div>

                    <div className="price">₩49,000</div>

                    <div className="divider" />

                    <div className="quantity-section">
                        <span className="label">수량</span>

                        <div className="quantity-control">
                            <button
                                className="quantity-button"
                                type="button"
                                onClick={handleMinus}
                                disabled={count === 1}
                            >
                                −
                            </button>

                            <span className="quantity-value">
                {/* TODO: 현재 수량 */}
                                {count}
              </span>

                            <button
                                className="quantity-button"
                                type="button"
                                onClick={handlePlus}
                                disabled={count === 5}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="summary">
                        <span>총 상품 금액</span>

                        <strong>
                            {/* TODO: 계산된 총 금액 */}
                            {totalAmount.toLocaleString()}
                        </strong>
                    </div>

                    <button className="cart-button" type="button">
                        장바구니 담기
                    </button>

                    <p className="shipping">
                        오후 2시 이전 주문 시 오늘 출고됩니다.
                    </p>
                </div>
            </section>
        </section>
    );
}

export default ProductPurchase;