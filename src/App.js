//import React, {useState} from "react";
import Header from "./components/header/Header";

function App() {
    //простой хук
    // const [count, setCount] = useState(0)
    //
    // function increment() {
    //     setCount(count + 1)
    // }
    //
    // function decrement() {
    //     setCount(count - 1)
    // }
    //
    // хук. происходит при изменении
    // useEffect(() => {
    //     alert(count)
    // }, [count]);
    return (
            <Header/>
    );
}

export default App;
