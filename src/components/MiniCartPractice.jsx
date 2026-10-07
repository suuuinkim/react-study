import { useState } from "react";
import "../css/MiniCartPractice.css";

function MiniCartPractice() {
    const products = [
        {
            id: 1,
            name: "Mini Pouch",
            price: 19000,
        },
        {
            id: 2,
            name: "City Tote",
            price: 39000,
        },
        {
            id: 3,
            name: "Travel Bag",
            price: 69000,
        },
    ];

    // TODO: 장바구니에 담긴 상품들을 기억할 state
    const [cartItems, setCartItems] = useState([]);

    // TODO: 상품을 장바구니에 추가하는 기능
    const handleAddCart = (item) => {
        const existingItem = cartItems.find((cartItem) => {
            return cartItem.id === item.id
        })

        if (existingItem) {
            return
        }
        setCartItems([...cartItems, item])
    }


    // 장바구니에서 삭제
    const handleDeleteCartItem = (id) => {
        // filter()는 조건이 true인것만 배열에 담는다
        const newCartItems = cartItems.filter((item) => {
            return item.id !== id
        })

        console.log(newCartItems);
        setCartItems(newCartItems)
    }

    // 총계
    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price
    }, 0)

    return (
        <main className="cart-page">
            <section className="product-section">
                <div className="section-heading">
                    <span>STORE</span>
                    <h1>상품 목록</h1>
                </div>

                <div className="product-list">
                    {/* TODO: products를 이용해 상품 목록 렌더링 */}
                    {/* filter() 조건에 맞는 여러 개를 남겨서 배열 반환 */}
                    {/* find() 조건에 맞는 첫 번째 요소 하나 반환 */}
                    {/* some()은 배열 안에 조건을 만족하는 요소가 하나라도 있는지 검사해서 true/false 반환 */}
                    {products.map((item) => {
                        const isInCart = cartItems.some((cartItem) => {
                            return cartItem.id === item.id
                        })

                        return(
                            <article className="product-item" key={item.id}>
                                <div>
                                    <h2>{item.name}</h2>
                                    <strong>₩{item.price.toLocaleString()}</strong>
                                </div>

                                <button
                                    type="button"
                                    disabled={isInCart}
                                    onClick={() => {handleAddCart(item)}}>
                                    담기
                                </button>
                            </article>
                        )
                    })}

                    {/* 상품 하나의 UI 예시
          <article className="product-item">
            <div>
              <h2>상품명</h2>
              <strong>₩가격</strong>
            </div>

            <button type="button">
              담기
            </button>
          </article>
          */}
                </div>
            </section>

            <aside className="cart-section">
                <div className="cart-heading">
                    <h2>
                        장바구니
                        <span>
              {cartItems.length}
            </span>
                    </h2>
                </div>

                <div className="cart-list">
                    {cartItems.length === 0 && (
                        <p>장바구니가 비어있습니다.</p>
                    )}
                    {/* TODO: 장바구니 상품 렌더링 */}
                    {cartItems.map((item) => {
                        return (
                            <div key={item.id}>
                                {item.name}
                                <button type="button" onClick={() => handleDeleteCartItem(item.id)}>삭제</button>
                            </div>
                        )
                    })}
                </div>

                <div className="cart-total">
                    <span>총 결제 금액</span>
                    <strong>
                        ₩{totalPrice.toLocaleString()}
                    </strong>
                </div>
            </aside>
        </main>
    );
}

export default MiniCartPractice;