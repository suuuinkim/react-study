function CartItem({
                      id
                        ,name
                        , price
                        , quantity
                        , selected
                        , selectedCarts
                        , onHandleAddCount
                        , onHandleMinusCount
                        , onHandleDeleteProduct
                        , onHandleToggleSelected

    }) {
    return (
        <article className="cart-item">
            <input type="checkbox" checked={selected} onChange={() => {onHandleToggleSelected(id)}}/>
            <div className="cart-item-info">
                <h2 className="cart-item-name">
                    {name}
                </h2>

                <p className="cart-item-price">
                    {price.toLocaleString()}원
                </p>
            </div>

            <div className="cart-item-actions">
                <div className="quantity-control">
                    <button
                        type="button"
                        className="quantity-button"
                        onClick={() => {onHandleMinusCount(id)}}
                        disabled={quantity === 1}
                    >
                        −
                    </button>

                    <strong className="quantity-value">
                        {quantity}
                    </strong>

                    <button
                        type="button"
                        className="quantity-button"
                        onClick={() => {onHandleAddCount(id)}}
                    >
                        +
                    </button>
                </div>

                <button
                    type="button"
                    className="delete-button"
                    onClick={() => {onHandleDeleteProduct(id)}}
                >
                    삭제
                </button>
            </div>
        </article>
    )
}

export default CartItem