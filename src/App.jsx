import "./App.css";
import ProductPurchase from "./components/ProductPurchase.jsx";
import ProductTabs from "./components/ProductTabs.jsx";
import RecommendedProducts from "./components/RecommendedProducts.jsx";
import ProductSearch from "./components/ProductSearch.jsx";

function App() {

    return (
        <main>
            <ProductSearch/>
            <ProductPurchase/>
            <ProductTabs/>
            <RecommendedProducts/>
        </main>
    );
}

export default App;