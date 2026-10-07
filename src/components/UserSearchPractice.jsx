import { useEffect, useState } from "react";
import "../css/UserSearchPractice.css";

function UserSearchPractice() {
    // 서버에서 받은 사용자 데이터
    const [users, setUsers] = useState([]);

    // TODO: 검색창 state
    const [searchKeyword, setSearchKeyword] = useState('')

    // TODO: loading state
    const [loading, setLoading] = useState(true);

    // TODO: error state
    const [error, setError] = useState(null);

    // TODO:
    // 처음 화면에 들어왔을 때
    // 전체 사용자 데이터를 가져오기
    useEffect(() => {
        const fetchUsers = async () => {
            try{
                setLoading(true)
                setError(null)

                const response = await fetch("https://dummyjson.com/users");
                const data = await response.json();
                if (!response.ok) {
                    throw new Error("조회 요청에 실패했습니다.")
                }
                // console.log(data)
                setUsers(data.users)
            } catch(error) {
                // console.error(error)
                setError("오류")
            } finally {
              setLoading(false);
            }

        }
        fetchUsers();
    }, [])

    // TODO:
    // 검색 버튼을 눌렀을 때
    // 검색 API 호출하기
    const handleSearch = async () => {
        const url = 'https://dummyjson.com/users/search?q=' + searchKeyword;

        const response = await fetch(url)
        const data = await response.json();
        console.log('data', data);
        setUsers(data.users)
    }

    return (
        <main className="user-page">
            <section className="user-container">

                <header className="user-header">
                    <span className="eyebrow">
                        USER MANAGEMENT
                    </span>

                    <h1>사용자 관리</h1>

                    <p>
                        등록된 사용자를 검색해보세요.
                    </p>
                </header>

                <form
                    className="search-box"
                    onSubmit={(e)=>{
                        e.preventDefault();
                        handleSearch();
                    }}
                >
                    <input
                        type="text"
                        className="search-input"
                        placeholder="이름을 검색하세요"
                        value={searchKeyword}
                        onChange={(e) => {
                            setSearchKeyword(e.target.value)
                        }}
                    />

                    <button
                        type="button"
                        className="search-button"
                        onClick={handleSearch}
                    >
                        검색
                    </button>
                </form>

                <div className="user-status">
                    {/* TODO: loading / error / empty */}
                    {loading && "로딩중"}
                    {error && "오류"}
                </div>

                <div className="user-result-header">
                    <span>검색 결과</span>
                    <strong>0명</strong>
                </div>

                <div className="user-grid">
                    {/* TODO: users 렌더링 */}
                    {users.map((item) => {
                        return (
                            <article className="user-card">
                                <img
                                    className="user-avatar"
                                    src={item.image}
                                    alt={item.username}
                                />

                                <div className="user-info">
                                    <h2>{item.username}</h2>
                                    <p className="user-email">
                                        {item.email}
                                    </p>

                                    <div className="user-meta">
                                        <span>{item.age}세</span>
                                        <span>{item.gender}</span>
                                    </div>
                                </div>
                            </article>
                        )
                    })}

                </div>

            </section>
        </main>
    );
}

export default UserSearchPractice;