import { useState } from "react";
import "./App.css";
import Header from "./header.jsx";
import Input from "./Input.jsx";
import StockList from "./stocklist.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <Header />
      <Input />
      <StockList />
    </div>
  );
}

export default App;
