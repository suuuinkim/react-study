import { useEffect, useState } from "react";
import "../css/ProductApiPractice.css";

function ProductApiPractice() {
    // 서버에서 받은 상품 데이터
    const [products, setProducts] = useState([]);

    // TODO: loading 상태
    const [loading, setLoading] = useState(true);

    // TODO: error 상태
    const [error, setError] = useState(null);

    // TODO:
    // 컴포넌트가 처음 실행될 때
    // 서버에서 상품 데이터를 가져오세요.
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await fetch("https://dummyjson.com/products");

                if (!response.ok){
                    throw new Error("상품 조회 요청에 실패했습니다.")
                }

                const data = await response.json();

                // console.log('data', data)
                setProducts(data.products)
            } catch(error) {
                console.error(error)
                setError("상품을 불러오지 못했습니다")
            } finally {
                setLoading(false)
            }

        };

        fetchProducts();
    }, [])

    return (
        <main className="product-api-page">
            <section className="product-api-container">
                <header className="product-api-header">
                    <span className="eyebrow">PRODUCT STORE</span>
                    <h1>오늘의 상품</h1>
                    <p>서버에서 불러온 상품을 확인해보세요.</p>
                </header>

                <div className="product-status">
                    {/* TODO: loading / error UI */}
                    {/*{loading ? '로딩중' : ''}*/}
                    {loading &&
                        <div className="loading-box">
                            <span className="loading-spinner"></span>
                            <p>상품을 불러오는 중입니다...</p>
                        </div>
                    }

                    {error && (
                        <p>{error}</p>
                    )}
                </div>

                <div className="product-grid">
                    {/* TODO: API 상품 목록 렌더링 */}
                    {products.map((item) => {
                        return (
                            <article className="api-product-card" key={item.id}>
                                <div className="product-image-area">
                                    <img
                                        className="product-image"
                                        src={item.thumbnail}
                                        alt={item.title}
                                    />
                                </div>

                                <div className="product-content">
                            <span className="product-category">
                                {item.category}
                            </span>

                                    <h2 className="product-title">
                                        {item.title}
                                    </h2>

                                    <strong className="product-price">
                                        ${item.price}
                                    </strong>
                                </div>
                            </article>
                        )
                    })}

                </div>
            </section>
        </main>
    );
}

export default ProductApiPractice;