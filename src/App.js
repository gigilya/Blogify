import React, {useState} from "react";
import Header from "./components/header/Header";

function App() {
    //простой хук
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    //хук. происходит при изменении
    // useEffect(() => {
    //     alert(count)
    // }, [count]);

    return (
        <header className="App">
            <Header/>
            {/*<h1>{count}</h1>*/}
            {/*<button onClick={increment}>+</button>*/}
            {/*<button onClick={decrement}>-</button>*/}
        </header>
    );
}

export default App;
