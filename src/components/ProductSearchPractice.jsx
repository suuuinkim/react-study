import { useState } from "react";

function ProductSearchPractice() {
    const products = [
        { id: 1, name: "Mini Pouch", category: "ACCESSORY", price: 19000 },
        { id: 2, name: "City Tote", category: "BAG", price: 39000 },
        { id: 3, name: "Travel Bag", category: "TRAVEL", price: 69000 },
        { id: 4, name: "Daily Wallet", category: "ACCESSORY", price: 29000 },
    ];

    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('전체')

    const filteredProducts = products.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
        // 검색조건
        const matchesCategory = category ==="전체" ? true : item.category === category

        return matchesCategory && matchesSearch
    })

    return (
        <section>
            <input
                type="text"
                placeholder="상품명을 검색하세요..."
                value={search}
                onChange={(event) => {
                    setSearch(event.target.value)
                }}
            />
            <button
                type="button"
                onClick={() => {
                    setCategory("전체")
                }}
            >
                전체
            </button>
            <button
                type="button"
                onClick={() => {
                    setCategory("BAG")
                }}
            >
                BAG
            </button>

            <button
                type="button"
                onClick={() => {
                    setCategory("ACCESSORY")
                }}
            >
                ACCESSORY
            </button>

            <button
                type="button"
                onClick={() => {
                    setCategory("TRAVEL")
                }}
            >
                TRAVEL
            </button>

            <p>현재 카테고리 : {category}</p>
            <p>검색결과 : {filteredProducts.length}</p>

            <div>
                {/* 나중에 검색 결과 렌더링 */}
                {filteredProducts.length === 0 && (
                    <p>검색 결과가 없습니다.</p>
                )}

                {filteredProducts.map((item) => {
                    return (
                        <div key={item.id}>
                            {item.name}
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default ProductSearchPractice;