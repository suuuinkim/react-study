import { useState } from "react";
import "../css/SeatReservation.css";

const initialSeats = [
    { id: "A1", row: "A", number: 1, price: 12000, reserved: false },
    { id: "A2", row: "A", number: 2, price: 12000, reserved: true },
    { id: "A3", row: "A", number: 3, price: 12000, reserved: false },
    { id: "A4", row: "A", number: 4, price: 12000, reserved: false },
    { id: "A5", row: "A", number: 5, price: 12000, reserved: true },

    { id: "B1", row: "B", number: 1, price: 12000, reserved: false },
    { id: "B2", row: "B", number: 2, price: 12000, reserved: false },
    { id: "B3", row: "B", number: 3, price: 12000, reserved: false },
    { id: "B4", row: "B", number: 4, price: 12000, reserved: true },
    { id: "B5", row: "B", number: 5, price: 12000, reserved: false },

    { id: "C1", row: "C", number: 1, price: 12000, reserved: false },
    { id: "C2", row: "C", number: 2, price: 12000, reserved: false },
    { id: "C3", row: "C", number: 3, price: 12000, reserved: true },
    { id: "C4", row: "C", number: 4, price: 12000, reserved: false },
    { id: "C5", row: "C", number: 5, price: 12000, reserved: false },
];

function SeatReservation() {
    // TODO: 좌석 데이터를 관리할 state
    const [seats, setSeats] = useState(initialSeats);
    // TODO: 빈 좌석 초기화
    const [selectedSeatIds, setSelectedSeatIds] = useState([]);

    // TODO: 좌석 선택 / 선택 해제
    const handleToggleSeat = (id) => {
        // 클릭한 아이디가 있으면 제거, 없으면 추가
        const isSelected = selectedSeatIds.includes(id);

        if(isSelected) {
            // 제거
            const newIds = selectedSeatIds.filter((item) => {
                return item !== id
            })
            setSelectedSeatIds(newIds)
        } else {
            // [기존 배열에 있는 값, 새로 추가할 값]
            const newIds = [...selectedSeatIds, id]
            setSelectedSeatIds(newIds)
        }
    }
    // TODO: 선택된 좌석 데이터

    // TODO: 선택 좌석 개수

    // TODO: 총 결제 금액

    return (
        <main className="seat-page">
            <section className="seat-container">
                <header className="seat-header">
                    <span className="eyebrow">MOVIE RESERVATION</span>
                    <h1>좌석 선택</h1>
                    <p>원하는 좌석을 선택해주세요.</p>
                </header>

                <div className="screen">
                    SCREEN
                </div>

                <div className="seat-map">
                    {/* TODO: 좌석 목록을 React로 렌더링 */}
                        {seats.map((item) => {
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    className={selectedSeatIds.includes(item.id) ? "seat is-selected" : "seat"}
                                    onClick={() => {handleToggleSeat(item.id)}}
                                    disabled={item.reserved}
                                >
                                    {item.id}
                                </button>
                        )
                        })}
                </div>

                <div className="seat-legend">
                    <span>
                        <i className="legend-seat available" />
                        선택 가능
                    </span>

                    <span>
                        <i className="legend-seat selected" />
                        선택됨
                    </span>

                    <span>
                        <i className="legend-seat reserved" />
                        예약 완료
                    </span>
                </div>

                <div className="reservation-summary">
                    <div className="selected-seat-area">
                        <span>선택 좌석</span>

                        <strong>
                            {/* TODO: 선택한 좌석 이름 */}
                            선택된 좌석이 없습니다.
                        </strong>
                    </div>

                    <div className="summary-row">
                        <span>선택 좌석</span>
                        <strong>0석</strong>
                    </div>

                    <div className="summary-row total">
                        <span>결제 금액</span>
                        <strong>0원</strong>
                    </div>

                    <button
                        type="button"
                        className="reservation-button"
                    >
                        예매하기
                    </button>
                </div>
            </section>
        </main>
    );
}

export default SeatReservation;