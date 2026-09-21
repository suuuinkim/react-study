import {useState, useCallback, memo} from 'react';

function App() {
    const [count, setCount] = useState(0);

    // const handleClick = () => {
    //     console.log('clicked');
    // };

    const handleClick = useCallback(() => {
        console.log('clicked');
    }, []);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                {count}
            </button>

            <Child />
        </>
    )
}

const Child = memo(function Child({onClick}) {

    console.log('Child render');

    return <button onClick={onClick}>클릭</button>

});


export default App;