function CategoryFilter(props) {
    const {category, onCategoryChange} = props;

    return (
        <div className="category-filter">
            <button
                className={category === "전체" ? "category-button active" : "category-button"}
                type="button"
                onClick={() => {
                    onCategoryChange("전체")
                }}
            >
                전체
            </button>

            <button
                className={category === "BAG" ? "category-button active" : "category-button"}
                type="button"
                onClick={() => {
                    onCategoryChange("BAG")
                }}
            >
                BAG
            </button>

            <button
                className={category === "ACCESSORY" ? "category-button active" : "category-button"}
                type="button"
                onClick={() => {
                    onCategoryChange("ACCESSORY")
                }}
            >
                ACCESSORY
            </button>

            <button
                className={category==="TRAVEL" ? "category-button active" : "category-button"}
                type="button"
                onClick={() => {
                    onCategoryChange("TRAVEL")
                }}
            >
                TRAVEL
            </button>
        </div>
    );
}

export default CategoryFilter;