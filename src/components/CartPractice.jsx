import { useState } from "react";
import "../css/CartPractice.css";
import CartItem from "./CartItem.jsx";

const initialCart = [
    {
        id: 1,
        name: "무선 기계식 키보드",
        price: 89000,
        quantity: 1,
        selected: false
    },
    {
        id: 2,
        name: "USB-C 멀티 허브",
        price: 59000,
        quantity: 2,
        selected: false
    },
    {
        id: 3,
        name: "노트북 거치대",
        price: 39000,
        quantity: 1,
        selected: true
    },
];

function CartPractice() {
    // TODO: 장바구니 state
    const [carts, setCarts] = useState(initialCart);

    // TODO: 수량 증가
    const handleAddCount = (id) => {
        // 클릭한 상품의 장바구니 개수 증가
        const addCount = carts.map((item) => {
            if (id === item.id) {
                return {
                    ...item,
                    quantity : item.quantity + 1
                }
            }
            return item
        })

        setCarts(addCount)
    }

    // TODO: 수량 감소
    const handleMinusCount = (id) => {
        const minusCount = carts.map((item) => {
            if(id === item.id) {
                if (item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
            }
            return item
        })

        setCarts(minusCount)
    }

    // TODO: 상품 삭제
    const handleDeleteProduct = (id) => {
        const cartProduct = carts.filter((item) => {
            return id !== item.id
        })
        setCarts(cartProduct)
    }

    // TODO: 총 수량 계산
    const totalCount = carts.reduce((total, item) => {
        return total + item.quantity
    }, 0)

    // TODO: 총 금액 계산
    // const totalAmount = carts.reduce((total, item) => {
    //     return total + (item.price * item.quantity)
    // }, 0)

    // 체크박스
    const handleToggleSelected = (id) => {
        const cart = carts.map((item) => {
            if(id === item.id) {
                return {
                    ...item,
                    selected : !item.selected
                }
            }
            return item
        })

        setCarts(cart)
    }

    // 장바구니에서 선택된 상품만 고르기
    const selectedCarts = carts.filter((item) => {
        return item.selected
    })

    const selectedTotalCount = selectedCarts.reduce((total, item) => {
        return total + item.quantity
    }, 0)

    const selectedTotalAmount = selectedCarts.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0)

    const isAllSelected = carts.length !==0 && carts.length === selectedCarts.length

    const handleToggleAllSelected = () => {
        const cart = carts.map((item) => {
            return {
                ...item,
                selected : !isAllSelected
            }
        })
        setCarts(cart)
    }

    return (
        <main className="cart-page">
            <section className="cart-container">
                <header className="cart-header">
                    <div>
                        <span className="eyebrow">CART</span>
                        <h1>장바구니</h1>
                    </div>

                    <strong className="cart-count">
                        총 {totalCount}개
                    </strong>
                </header>

                <div className="cart-select-all">
                    <label>
                        <input
                            type="checkbox"
                            onChange={() =>{handleToggleAllSelected()}}
                        />
                        <span>전체 선택</span>
                    </label>
                </div>

                <div className="cart-list">
                    {/* 장바구니 상품 렌더링 */}

                    {
                        carts.length === 0 ?
                            (<p className="cart-empty">장바구니가 비어 있습니다.</p>) :

                            (carts.map((item) => {
                                return (
                                    // <article className="cart-item" key={item.id}>
                                    //     <div className="cart-item-info">
                                    //         <h2 className="cart-item-name">
                                    //             {item.name}
                                    //         </h2>
                                    //
                                    //         <p className="cart-item-price">
                                    //             {item.price.toLocaleString()}원
                                    //         </p>
                                    //     </div>
                                    //
                                    //     <div className="cart-item-actions">
                                    //         <div className="quantity-control">
                                    //             <button
                                    //                 type="button"
                                    //                 className="quantity-button"
                                    //                 onClick={() => {handleMinusCount(item.id)}}
                                    //             >
                                    //                 −
                                    //             </button>
                                    //
                                    //             <strong className="quantity-value">
                                    //                 {item.quantity}
                                    //             </strong>
                                    //
                                    //             <button
                                    //                 type="button"
                                    //                 className="quantity-button"
                                    //                 onClick={() => {handleAddCount(item.id)}}
                                    //             >
                                    //                 +
                                    //             </button>
                                    //         </div>
                                    //
                                    //         <button
                                    //             type="button"
                                    //             className="delete-button"
                                    //             onClick={() => {handleDeleteProduct(item.id)}}
                                    //         >
                                    //             삭제
                                    //         </button>
                                    //     </div>
                                    // </article>
                                    <CartItem
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        price={item.price}
                                        quantity={item.quantity}
                                        selected={item.selected}
                                        selectedCarts = {selectedCarts}
                                        onHandleAddCount={handleAddCount}
                                        onHandleMinusCount={handleMinusCount}
                                        onHandleDeleteProduct={handleDeleteProduct}
                                        onHandleToggleSelected={handleToggleSelected}
                                    />
                                )
                            }))
                    }

                </div>

                <div className="cart-summary">
                    <div className="summary-row">
                        <span>선택 상품</span>
                        <strong>{selectedTotalCount}개</strong>
                    </div>

                    <div className="summary-row">
                        <span>상품 금액</span>
                        <strong>{selectedTotalAmount.toLocaleString()}원</strong>
                    </div>

                    <div className="summary-row total">
                        <span>총 결제 금액</span>
                        <strong>{selectedTotalAmount.toLocaleString()}원</strong>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default CartPractice;