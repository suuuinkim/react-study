import { useState } from "react";

function ProductSearchPractice2() {
    const products = [
        { id: 1, name: "Mini Pouch", category: "ACCESSORY", price: 19000 },
        { id: 2, name: "City Tote", category: "BAG", price: 39000 },
        { id: 3, name: "Travel Bag", category: "TRAVEL", price: 69000 },
        { id: 4, name: "Daily Wallet", category: "ACCESSORY", price: 29000 },
    ];

    // TODO: 검색어 state
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('전체');

    const filteredProducts = products.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
        const matchesCategory =
            category === '전체'
            ? true
            : item.category === category

        // 검색어에 맞는 상품만 남기기
        return matchesSearch && matchesCategory
    })

    // 이벤트가 발생했을 때 실행할 함수
    // 매개변수 event를 받아서 쓰느냐 안쓰느냐의 차이

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

            <p>현재 카테고리 : {category}</p>

            <button
                type="button"
                onClick={()=> {
                    setCategory("BAG")
                }}
            >BAG</button>



            <div>
                <p>검색 결과 : {filteredProducts.length}</p>
                {filteredProducts.length === 0 && (
                    <p>검색 결과가 없습니다.</p>
                )}

                {/* 아직 아무것도 하지 않음 */}
                {filteredProducts.map((item) => {
                    return(
                        <div key={item.id}>
                            {item.name}
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default ProductSearchPractice2;