function ProductCard({name, price, favorite, id, onHandleToggleFavorite}) {
    return (
        <article className="product-card">
            <div className="product-info">
                <h2 className="product-name">
                    {name}
                </h2>

                <p className="product-price">
                    {price.toLocaleString()}원
                </p>
            </div>

            <button
                type="button"
                className={favorite ? "favorite-button active" : "favorite-button"}
                onClick={() => {onHandleToggleFavorite(id)}}
            >
                {favorite ? '♥': '♡'}
            </button>
        </article>
    )
}

export default ProductCard