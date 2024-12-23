import { useState } from "react";
import "./App.css";
import Header from "./header.jsx";
import Input from "./Input.jsx";
import StockContext from "./contexts/StockContext.js";
import StockList from "./stocklist.jsx";

function App() {
  const [stockList, setStockList] = useState([]);

  return (
    <div className="main">
      <Header />
      <StockContext.Provider value={{ stockList, setStockList }}>
        <Input />
        <StockList />
      </StockContext.Provider>
    </div>
  );
}

export default App;
