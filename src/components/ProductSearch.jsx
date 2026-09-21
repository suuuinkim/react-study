import "../css/ProductSearch.css";
import SearchInput from "./SearchInput.jsx";
import SearchResult from "./SearchResult.jsx";
import {useState} from 'react';
import CategoryFilter from "./CategoryFilter.jsx";

function ProductSearch() {
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
        {
            id: 4,
            name: "Daily Wallet",
            category: "ACCESSORY",
            price: 29000,
        },
    ];

    // search : 현재 검색어
    // setSearch : 검색어를 변경하는 함수

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("전체");

    const filteredProducts = products.filter((item) => {
        const productName = item.name.toLowerCase();
        const keyword = search.toLowerCase();

        const matchesSearch = productName.includes(keyword);
        const matchesCategory =
            category === "전체"
            ? true
            : item.category === category

        return matchesSearch && matchesCategory;
    })

    const handleCategoryChange = (category) => {
        setCategory(category)
    }

    return (
        <section className="product-search">
            <div className="search-heading">
                <span>STORE</span>
                <h2>상품 검색</h2>
            </div>

            <SearchInput
                search={search}
                onSearchChange={setSearch}
            />

            <CategoryFilter
                category={category}
                onCategoryChange={handleCategoryChange}
            />

            <SearchResult
                products={filteredProducts}
            />
        </section>
    );
}

export default ProductSearch;