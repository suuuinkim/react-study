function SearchInput(props) {
    const {search, onSearchChange} = props;

    return (
        <div className="search-input-area">
            <input
                className="search-input"
                type="text"
                placeholder="상품명을 검색하세요..."
                value={search}
                onChange={(event) => {
                    onSearchChange(event.target.value);
                }}
            />
        </div>
    );
}

export default SearchInput;