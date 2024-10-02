import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cart from "./pages/Cart";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Cart />
            {/* <div className="text-3xl font-bold underline">hello world</div> */}
        </>
    );
}

export default App;
