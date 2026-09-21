import "../css/RecommendedProducts.css";
import ProductCard from "./ProductCard.jsx";
import {useState} from 'react';

function RecommendedProducts() {
    const products = [
        {
            id: 1,
            name: "Mini Pouch",
            category: "ACCESSORY",
            price: 19000,
        },
        {
            id: 2,
            name: "City Tote",
            category: "BAG",
            price: 39000,
        },
        {
            id: 3,
            name: "Travel Bag",
            category: "TRAVEL",
            price: 69000,
        },
    ];

    const [product, setProduct] = useState(null);

    const handleSelectProduct = (selectedProduct) => {
        setProduct(selectedProduct)
    }

    return (
        <section className="recommended-products">
            <div className="recommended-heading">
                <span>YOU MAY ALSO LIKE</span>
                <h2>추천 상품</h2>
            </div>

            <div className="product-grid">
                {/* TODO: products를 map으로 순회 */}
                {/* TODO: ProductCard 렌더링 */}
                {/* TODO: 각 상품 정보를 props로 전달 */}

                {products.map((item) => (
                    <ProductCard
                        key={item.id}
                        name={item.name}
                        category={item.category}
                        price={item.price}
                        onSelect={handleSelectProduct}
                    />
                ))}
            </div>

            <div className="selected-product">
                <span className="selected-label">
                  선택한 상품
                </span>

                {/* TODO: 선택 여부에 따라 다른 내용 표시 */}
                {product ? (
                    product.name
                ) : (
                    "선택한 제품 없음"
                )}
            </div>
        </section>
    );
}

export default RecommendedProducts;