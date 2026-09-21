import {useState, useEffect} from 'react';
function UserList(){
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>불러오는 중...</p>;
    }

    return (
        <ul>
            {users.map((user) => (
                <li>

                </li>
            ))}
        </ul>
    )
}

export default UserList;