function ProductCard(props) {
    // 구조분해할당
    const {category, name, price, onSelect} = props;

    return (
        <article className="recommend-card">
            <div className="recommend-image">
                <span>PRODUCT</span>
            </div>

            <div className="recommend-info">
        <span className="recommend-category">
          {/* TODO: 상품 카테고리 */}
            {category}
        </span>

                <h3>
                    {/* TODO: 상품 이름 */}
                    {name}
                </h3>

                <strong>
                    {/* TODO: 상품 가격 */}
                    {price.toLocaleString()}
                </strong>

                <button
                    className="select-product-button"
                    type="button"
                    onClick={() => {
                        onSelect({
                            category, name, price
                        })
                    }}
                >
                    선택하기
                </button>
            </div>
        </article>
    );
}

export default ProductCard;