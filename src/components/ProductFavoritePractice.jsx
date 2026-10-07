import { useState } from "react";
import "../css/ProductFavoritePractice.css";
import ProductCard from "./ProductCard.jsx";

const initialProducts = [
    {
        id: 1,
        name: "무선 기계식 키보드",
        price: 89000,
        favorite: false,
    },
    {
        id: 2,
        name: "27인치 QHD 모니터",
        price: 329000,
        favorite: true,
    },
    {
        id: 3,
        name: "알루미늄 모니터",
        price: 42000,
        favorite: false,
    },
    {
        id: 4,
        name: "USB-C 멀티 허브",
        price: 59000,
        favorite: false,
    },
];

function ProductFavoritePractice() {
    const [products, setProducts] = useState(initialProducts)
    const [filter, setFilter] = useState('전체')

    const handleToggleFavorite = (id) => {
        const newProduct = products.map((item) => {
            if (id === item.id) {
                return(
                    {
                        ...item,
                        favorite : !item.favorite
                    }
                )
            }
            return item
        })
        setProducts(newProduct)
    }

    // 찜한 상품 개수
    const favoriteProduct = products.filter((item) => {
        return item.favorite
    })

    // 전체 상품 계산
    // 배열, reduce((누적값, 현재값) => {return 다음누적값}, 시작값)
    const totalFavoritePrice = favoriteProduct.reduce((total, item) => {
            return total + item.price
    }, 0)

    // 필터
    const filteredProduct = products.filter((item) => {
        if (filter === '전체') {
            return true
        } else {
            return item.favorite
        }
    })

    return (
        <main className="product-page">
            <section className="product-container">

                <header className="product-header">
                    <div>
                        <span className="eyebrow">SHOP</span>
                        <h1>오늘의 추천 상품</h1>
                    </div>

                    <strong className="favorite-count">
                        찜한 상품 {favoriteProduct.length}개
                    </strong>

                    <span className="favorite-total">
                        총 {totalFavoritePrice.toLocaleString()}원
                    </span>
                </header>

                <div className="product-filter">
                    <button type="button" className={filter === '전체' ? 'active' : ''} onClick={() => {setFilter('전체')}}>
                        전체
                    </button>

                    <button type="button" className={filter === '찜한 상품' ? 'active' : ''} onClick={() => {setFilter('찜한 상품')}}>
                        찜한 상품
                    </button>
                </div>

                <div className="product-list">
                    {/* 상품 목록을 React로 구현 */}

                    {filter === '찜한 상품' && favoriteProduct.length === 0 ?
                        (<p className="empty-state">찜한 상품이 없습니다</p>) :

                        (filteredProduct.map((item) => {
                            return (
                                <ProductCard
                                    name={item.name}
                                    key={item.id}
                                    price={item.price}
                                    favorite={item.favorite}
                                    id={item.id}
                                    onHandleToggleFavorite={handleToggleFavorite}
                                />
                                // <article className="product-card" key={item.id}>
                                //     <div className="product-info">
                                //         <h2 className="product-name">
                                //             {item.name}
                                //         </h2>
                                //
                                //         <p className="product-price">
                                //             {item.price.toLocaleString()}원
                                //         </p>
                                //     </div>
                                //
                                //     <button
                                //         type="button"
                                //         className={item.favorite ? "favorite-button active" : "favorite-button"}
                                //         onClick={()=>handleToggleFavorite(item.id)}
                                //     >
                                //         {item.favorite ? '♥' : '♡'}
                                //     </button>
                                // </article>
                            )
                        })
                    )}
                </div>

            </section>
        </main>
    );
}

export default ProductFavoritePractice;