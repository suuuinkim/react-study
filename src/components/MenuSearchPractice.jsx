import { useState } from "react";

function MenuSearchPractice() {
    const menus = [
        { id: 1, name: "Americano", category: "COFFEE", price: 4500 },
        { id: 2, name: "Cafe Latte", category: "COFFEE", price: 5000 },
        { id: 3, name: "Earl Grey", category: "TEA", price: 4800 },
        { id: 4, name: "Cheese Cake", category: "DESSERT", price: 6500 },
    ];

    // TODO 1: 검색어 state
    const [search, setSearch] = useState('');

    // TODO 2: 카테고리 state
    // 처음에는 "전체"
    const [category, setCategory] = useState('전체')

    // TODO 3: 검색어 + 카테고리를 이용해서
    // 화면에 보여줄 메뉴 배열 만들기
    const filteredMenu = menus.filter((item) => {
        const matchedSearch = item.name.toLowerCase().includes(search.toLowerCase());
        const matchedCategory = category === "전체" ? true : item.category === category;
        return matchedSearch && matchedCategory
    })

    return (
        <section>
            <input
                type="text"
                placeholder="메뉴명을 검색하세요..."
                // TODO
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
            />

            <div>
                <button type="button" onClick={() => setCategory("전체")}>전체</button>
                <button type="button" onClick={() => setCategory("COFFEE")}>COFFEE</button>
                <button type="button" onClick={() => setCategory("TEA")}>TEA</button>
                <button type="button" onClick={() => setCategory("DESSERT")}>DESSERT</button>
            </div>

            <p>현재 카테고리: {category}</p>

            <p>
                검색 결과: {filteredMenu.length}개
            </p>

            <div>
                {/* TODO: 결과가 0개면 안내 문구 */}
                {filteredMenu.length === 0 && (
                    <p>검색 결과가 없습니다.</p>
                )}

                {/* TODO: 결과를 map으로 렌더링 */}
                {filteredMenu.map((item) => {
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

export default MenuSearchPractice;