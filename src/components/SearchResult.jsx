import ProductCard from "./ProductCard.jsx";

function SearchResult(props) {
    const {products} = props;

    return (
        <div className="search-result">
            <div className="result-header">
        <span>
          검색 결과 {products.length}개
        </span>
            </div>

            <div className="search-grid">
                {/* TODO: 검색된 상품들을 map으로 렌더링 */}

                {products.map((item) => {
                    return(
                        <ProductCard key={item.id} name ={item.name} category={item.category} price={item.price}/>
                    )
                })}


                {products.length === 0 && (
                    <p className="empty-result">검색 결과가 없습니다.</p>
                )}
            </div>
        </div>
    );
}

export default SearchResult;