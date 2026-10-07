import { useState } from "react";

function CartStatePractice() {
    // TODO 1: 장바구니 state 만들기
    // 처음에는 빈 배열
    const [cartItems, setCartItems] = useState([]);

    // TODO 2: 사과를 장바구니에 추가하는 함수
    const handleAddApple = () => {
        setCartItems([...cartItems, "사과"]);
    }

    const handleDeleteApple = (deleteIndex) => {
        const newCartItems = cartItems.filter((item, index) => {
            return index !== deleteIndex
        })
        setCartItems(newCartItems)
    }

    return (
        <section>
            <h1>과일 장바구니</h1>

            <button
                type="button"
                onClick={handleAddApple}
            >
                사과 담기
            </button>

            <p>
                장바구니 개수: {cartItems.length}
            </p>

            <div>
                {/* 나중에 장바구니 목록 출력 */}
                {cartItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item}</p>
                            <button onClick={() => {handleDeleteApple(index)}}>삭제</button>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default CartStatePractice;