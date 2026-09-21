import "../css/ProductTabs.css";
import { useState } from "react";

function ProductTabs() {
    const [tab, setTab] = useState("상품정보");

    const tabs = [
        {
            id: 1,
            name: "상품정보",
            title: "상품정보",
            description:
                "가볍고 튼튼한 소재로 제작된 데일리 백팩입니다. 노트북과 일상 소지품을 넉넉하게 수납할 수 있습니다.",
        },
        {
            id: 2,
            name: "배송안내",
            title: "배송안내",
            description:
                "평일 오후 2시 이전 주문은 당일 출고됩니다. 기본 배송 기간은 1~3영업일입니다.",
        },
        {
            id: 3,
            name: "리뷰",
            title: "리뷰",
            description:
                "평균 평점 4.8 / 5.0 · 총 128개의 구매 후기가 있습니다.",
        },
    ];

    const clickTab = (name) => {
        setTab(name);
    };

    // find는 true 또는 false
    const selectedTab = tabs.find((item) => {
        return tab === item.name;
    })

    return (
        <section className="product-tabs">
            <div className="tabs">
                {/* TODO: tabs 배열을 이용해서 버튼을 렌더링 */}
                {tabs.map((item) => (
                    <button
                     className={tab === item.name ? "tab-button active" : "tab-button"}
                     type="button"
                     onClick={() => clickTab(item.name)}
                     key={item.id}
                    >
                        {item.name}
                    </button>
                ))}
            </div>

            <div className="tab-content">
                <div>
                    <h2>{selectedTab.title}</h2>
                    <p>
                        {selectedTab.description}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ProductTabs;